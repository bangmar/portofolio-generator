"use client";

import Link from "next/link";
import { useRef } from "react";
import { useHome } from "./hook";

export default function HomeFeature() {
	const { actions } = useHome();
	const downloadCounterRef = useRef(0);

	const handleDownload = (href: string) => {
		downloadCounterRef.current += 1;

		const downloadUrl = new URL(href, window.location.origin);
		downloadUrl.searchParams.set("t", downloadCounterRef.current.toString());
		window.open(downloadUrl.toString(), "_blank", "noopener,noreferrer");
	};

	return (
		<div className='flex min-h-screen items-center justify-center bg-[#f3f0e8] px-6 py-10'>
			<div className='flex flex-col gap-4 sm:flex-row'>
				{actions.map((action) => {
					const className =
						"rounded-full border border-text-dark px-6 py-3 text-lg font-medium text-text-dark transition hover:bg-text-dark hover:text-white";

					if (action.type === "download") {
						return (
							<button
								key={action.label}
								type='button'
								onClick={() => handleDownload(action.href)}
								className={className}>
								{action.label}
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
