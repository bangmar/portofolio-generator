"use client";

import Link from "next/link";
import { useHome } from "./hook";

export default function HomeFeature() {
	const { actions } = useHome();

	return (
		<div className='flex min-h-screen items-center justify-center bg-[#f3f0e8] px-6 py-10'>
			<div className='flex flex-col gap-4 sm:flex-row'>
				{actions.map((action) => (
					<Link
						key={action.label}
						href={action.href}
						target={action.target}
						className='rounded-full border border-text-dark px-6 py-3 text-lg font-medium text-text-dark transition hover:bg-text-dark hover:text-white'>
						{action.label}
					</Link>
				))}
			</div>
		</div>
	);
}
