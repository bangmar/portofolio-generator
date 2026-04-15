import { existsSync } from "node:fs";
import chromium from "@sparticuz/chromium";

const WINDOWS_BROWSER_CANDIDATES = [
	"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
	"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
	"C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
	"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
];

export async function getBrowserExecutablePath() {
	if (process.env.PUPPETEER_EXECUTABLE_PATH) {
		return process.env.PUPPETEER_EXECUTABLE_PATH;
	}

	if (process.platform === "win32") {
		for (const candidate of WINDOWS_BROWSER_CANDIDATES) {
			if (existsSync(candidate)) {
				return candidate;
			}
		}
	}

	return chromium.executablePath();
}

export function getBrowserLaunchArgs() {
	return process.platform === "win32"
		? ["--disable-dev-shm-usage"]
		: [...chromium.args, "--disable-dev-shm-usage"];
}
