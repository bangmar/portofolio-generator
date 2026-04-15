import { FC, ReactElement } from "react";
import { ProposalFooterProps } from "./types";
import { fontInter } from "@/lib/constant/font";

const ProposalFooter: FC<ProposalFooterProps> = ({
	textTheme,
	listType = "cover",
	footerEnding = false,
}): ReactElement => {
	const items =
		listType === "cover"
			? [
					"hello@hatypo.studio",
					"www.hatypo.studio",
					"All Right Reserved, Hatypo Studio",
					"©2026",
				]
			: ["Inside the deck", "Hatypo Studio", "Design Proposal", "©2026"];

	const endingItems = [
		"hello@hatypo.studio",
		"www.hatypo.studio",
		"©2025, Hatypo Studio",
		"All Right Reserved.",
	];

	if (!footerEnding) {
		return (
			<section
				className={`${fontInter.className} ${textTheme === "dark" ? "text-text-dark" : "text-white"} flex w-full justify-between gap-2 text-[20px]`}>
				{items?.map((item, index) => (
					<p
						key={item}
						className={
							index === 0 && listType === "content"
								? "text-accent-blue"
								: undefined
						}>
						{item}
					</p>
				))}
			</section>
		);
	}

	return (
		<section className={`${fontInter.className} grid grid-cols-2  text-[20px]`}>
			<p className='block w-[387px] text-[#767676]'>
				We are your digital design partner in crafting digital products to
				impact the future, today.
			</p>
			<section className='text-white grid grid-cols-2 '>
				{endingItems?.map((item, index) => {
					const isEven = (index + 1) % 2 === 0;
					return (
						<p
							key={item}
							className={`block  ${isEven ? "text-end" : "text-start"}`}>
							{item}
						</p>
					);
				})}
			</section>
		</section>
	);
};

export default ProposalFooter;
