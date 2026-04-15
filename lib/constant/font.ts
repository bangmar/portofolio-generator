import { Bebas_Neue, Geist, Geist_Mono, Inter } from "next/font/google";

export const fontInter = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const fontGeistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

export const fontGeistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const fontBebasNeue = Bebas_Neue({
	weight: "400",
	subsets: ["latin"],
});
