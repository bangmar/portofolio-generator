import { NextResponse } from "next/server";
import puppeteer from "puppeteer-core";
import {
	getBrowserExecutablePath,
	getBrowserLaunchArgs,
} from "@/lib/helper/pdf/browser";

const PDF_PAGE_WIDTH = 1920;
const PDF_PAGE_HEIGHT = 1080;
const RESOURCE_WAIT_TIMEOUT = 15_000;

function logPdfStage(stage: string, detail?: Record<string, unknown>) {
	console.info("[pdf]", stage, detail ?? {});
}

export async function GET(request: Request) {
	let browser: Awaited<ReturnType<typeof puppeteer.launch>> | null = null;
	let stage = "launch_browser";

	try {
		logPdfStage("start", {
			method: request.method,
			url: request.url,
		});

		const executablePath = await getBrowserExecutablePath();
		const launchArgs = getBrowserLaunchArgs();

		logPdfStage(stage, {
			executablePath,
			args: launchArgs,
			platform: process.platform,
		});

		browser = await puppeteer.launch({
			executablePath,
			args: launchArgs,
			headless: true,
		});

		stage = "open_page";
		logPdfStage(stage);
		const page = await browser.newPage();
		const printUrl = new URL("/print", request.url).toString();

		stage = "configure_page";
		logPdfStage(stage, { printUrl });
		await page.setViewport({
			width: PDF_PAGE_WIDTH,
			height: PDF_PAGE_HEIGHT,
			deviceScaleFactor: 1,
		});
		await page.emulateMediaType("screen");

		stage = "goto_print_page";
		logPdfStage(stage, { printUrl });
		await page.goto(printUrl, {
			waitUntil: "domcontentloaded",
			timeout: 60_000,
		});

		stage = "wait_dom_complete";
		logPdfStage(stage);
		await page.waitForFunction(() => document.readyState === "complete", {
			timeout: RESOURCE_WAIT_TIMEOUT,
		});

		stage = "wait_resources";
		logPdfStage(stage);
		await page.evaluate(async (timeout) => {
			const waitWithTimeout = async (promise: Promise<unknown>) => {
				await Promise.race([
					promise,
					new Promise((resolve) => window.setTimeout(resolve, timeout)),
				]);
			};

			await waitWithTimeout(document.fonts.ready);
			window.scrollTo({ top: document.body.scrollHeight, behavior: "instant" });
			window.scrollTo({ top: 0, behavior: "instant" });

			const images = Array.from(document.images);

			await Promise.all(
				images.map(async (image) => {
					if (!image.complete) {
						await waitWithTimeout(
							new Promise<void>((resolve) => {
								image.addEventListener("load", () => resolve(), { once: true });
								image.addEventListener("error", () => resolve(), { once: true });
							}),
						);
					}

					if (typeof image.decode === "function") {
						await waitWithTimeout(image.decode().catch(() => undefined));
					}
				}),
			);

			await new Promise<void>((resolve) => {
				requestAnimationFrame(() => {
					requestAnimationFrame(() => resolve());
				});
			});
		}, RESOURCE_WAIT_TIMEOUT);

		stage = "render_pdf";
		logPdfStage(stage);
		const pdf = await page.pdf({
			width: "1920px",
			height: "1080px",
			printBackground: true,
			preferCSSPageSize: true,
			margin: {
				top: "0",
				right: "0",
				bottom: "0",
				left: "0",
			},
		});

		stage = "close_page";
		logPdfStage(stage);
		await page.close();

		logPdfStage("success", { bytes: pdf.length });
		return new NextResponse(Buffer.from(pdf), {
			headers: {
				"Content-Type": "application/pdf",
				"Content-Disposition": 'attachment; filename="proposal.pdf"',
				"Cache-Control": "no-store",
			},
		});
	} catch (error) {
		const message =
			error instanceof Error ? error.message : "Failed to generate PDF.";

		console.error("[pdf] error", {
			stage,
			message,
			error,
		});

		return NextResponse.json({ message, stage }, { status: 500 });
	} finally {
		if (browser) {
			logPdfStage("close_browser");
			await browser.close();
		}
	}
}
