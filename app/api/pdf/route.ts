import { NextResponse } from "next/server";
import puppeteer from "puppeteer-core";
import { getBrowserExecutablePath } from "@/lib/helper/pdf/browser";

const PDF_PAGE_WIDTH = 1920;
const PDF_PAGE_HEIGHT = 1080;

export async function GET(request: Request) {
	let browser: Awaited<ReturnType<typeof puppeteer.launch>> | null = null;

	try {
		browser = await puppeteer.launch({
			executablePath: getBrowserExecutablePath(),
			headless: true,
		});

		const page = await browser.newPage();
		const printUrl = new URL("/print", request.url).toString();

		await page.setViewport({
			width: PDF_PAGE_WIDTH,
			height: PDF_PAGE_HEIGHT,
			deviceScaleFactor: 1,
		});
		await page.emulateMediaType("screen");
		await page.goto(printUrl, {
			waitUntil: "domcontentloaded",
			timeout: 60_000,
		});
		await page.waitForFunction(() => document.readyState === "complete", {
			timeout: 60_000,
		});
		await page.waitForFunction(
			async () => {
				await document.fonts.ready;
				const images = Array.from(document.images);

				await Promise.all(
					images.map(async (image) => {
						if (!image.complete) {
							await new Promise<void>((resolve) => {
								image.addEventListener("load", () => resolve(), { once: true });
								image.addEventListener("error", () => resolve(), {
									once: true,
								});
							});
						}

						if (typeof image.decode === "function") {
							try {
								await image.decode();
							} catch {}
						}
					}),
				);

				return document.fonts.status === "loaded";
			},
			{ timeout: 60_000 },
		);
		await page.evaluate(async () => {
			await new Promise<void>((resolve) => {
				requestAnimationFrame(() => {
					requestAnimationFrame(() => resolve());
				});
			});
		});

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

		await page.close();

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

		return NextResponse.json({ message }, { status: 500 });
	} finally {
		if (browser) {
			await browser.close();
		}
	}
}
