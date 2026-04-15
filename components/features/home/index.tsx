"use client";

import Link from "next/link";
import { useState } from "react";
import { useHome } from "./hook";

export default function HomeFeature() {
	const { actions } = useHome();
	const [isDownloading, setIsDownloading] = useState(false);

	const handleDownload = async (href: string) => {
		try {
			setIsDownloading(true);

			const response = await fetch(href, {
				cache: "no-store",
			});

			if (!response.ok) {
				throw new Error("Failed to download PDF.");
			}

			const blob = await response.blob();
			const fileUrl = window.URL.createObjectURL(blob);
			const link = document.createElement("a");

			link.href = fileUrl;
			link.download = "proposal.pdf";
			document.body.appendChild(link);
			link.click();
			link.remove();
			window.URL.revokeObjectURL(fileUrl);
		} catch (error) {
			console.error(error);
		} finally {
			setIsDownloading(false);
		}
	};

	return (
		<div className='flex min-h-screen items-center justify-center bg-[#f3f0e8] px-6 py-10'>
			<div className='flex flex-col gap-4 sm:flex-row'>
				{actions.map((action) => {
					const className =
						"rounded-full border border-text-dark px-6 py-3 text-lg font-medium text-text-dark transition hover:bg-text-dark hover:text-white disabled:cursor-not-allowed disabled:opacity-60";

					if (action.type === "download") {
						return (
							<button
								key={action.label}
								type='button'
								onClick={() => handleDownload(action.href)}
								disabled={isDownloading}
								className={className}>
								{isDownloading ? "Downloading..." : action.label}
							</button>
						);
					}

					return (
						<Link
							key={action.label}
							href={action.href}
							target={action.target}
							className={className}>
							{action.label}
						</Link>
					);
				})}
			</div>
		</div>
	);
}
