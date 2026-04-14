import { NextResponse } from "next/server";
import puppeteer from "puppeteer-core";
import { getBrowserExecutablePath } from "@/lib/helper/pdf/browser";

export async function GET(request: Request) {
	let browser: Awaited<ReturnType<typeof puppeteer.launch>> | null = null;

	try {
		browser = await puppeteer.launch({
			executablePath: getBrowserExecutablePath(),
			headless: true,
		});

		const page = await browser.newPage();
		const printUrl = new URL("/print", request.url).toString();

		await page.goto(printUrl, {
			waitUntil: "networkidle0",
		});

		await page.emulateMediaType("screen");
		await page.evaluate(async () => {
			await document.fonts.ready;
			const images = Array.from(document.images);

			await Promise.all(
				images.map((image) => {
					if (image.complete) {
						return Promise.resolve();
					}

					return new Promise<void>((resolve) => {
						image.addEventListener("load", () => resolve(), { once: true });
						image.addEventListener("error", () => resolve(), { once: true });
					});
				}),
			);
		});

		const pdf = await page.pdf({
			width: "480mm",
			height: "270mm",
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
			},
		});
	} catch (error) {
		const message = error instanceof Error ? error.message : "Failed to generate PDF.";

		return NextResponse.json({ message }, { status: 500 });
	} finally {
		if (browser) {
			await browser.close();
		}
	}
}
