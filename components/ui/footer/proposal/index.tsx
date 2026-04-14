import { Inter } from "next/font/google";
import { FC, ReactElement } from "react";
import { ProposalFooterProps } from "./types";

const inter = Inter({
	subsets: ["latin"],
});

const ProposalFooter: FC<ProposalFooterProps> = ({
	textTheme,
	listType = "cover",
}): ReactElement => {
	const item =
		listType === "cover"
			? [
					"hello@hatypo.studio",
					"www.hatypo.studio",
					"All Right Reserved, Hatypo Studio",
					"©2026",
				]
			: ["Inside the deck", "Hatypo Studio", "Design Proposal", "©2026"];
	return (
		<section
			className={`${inter.className} ${textTheme === "dark" ? "text-text-dark" : "text-white"} flex w-full justify-between gap-2 text-[24px]`}>
			{item?.map((item, index) => (
				<p
					key={item}
					className={index === 0 && listType === "content" ? "text-accent-blue" : undefined}>
					{item}
				</p>
			))}
		</section>
	);
};

export default ProposalFooter;
