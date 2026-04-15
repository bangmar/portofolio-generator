import { FC, ReactElement } from "react";
import { ContentOnlySectionProps } from "./types";
import ProposalFooter from "@/components/ui/footer/proposal";

const SectionContentOnly: FC<ContentOnlySectionProps> = ({
	children,
	childrenClassName,
}): ReactElement => {
	return (
		<section
			className={`flex h-[1080px] w-[1920px]  bg-white text-text-dark break-after-page flex-col justify-between p-10`}>
			<section className={`${childrenClassName}`}>{children}</section>
			<ProposalFooter textTheme={"dark"} listType={"content"} />
		</section>
	);
};

export default SectionContentOnly;
