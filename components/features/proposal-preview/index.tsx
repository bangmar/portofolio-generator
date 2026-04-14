import { FC, ReactElement } from "react";
import SectionCover from "./template/section-cover";
import { ProposalPreviewProps } from "./types";

const ProposalPreview: FC<ProposalPreviewProps> = ({
	mode = "preview",
}): ReactElement => {
	const isPrintMode = mode === "print";

	return (
		<div
			className={`flex min-h-screen flex-col items-center ${isPrintMode ? "bg-white p-0" : "bg-[#f3f0e8] px-6 py-10"}`}>
			<div className={`flex flex-col ${isPrintMode ? "gap-0" : "gap-6"}`}>
				<SectionCover
					title={[
						{
							label: "HATYPO",
						},
						{ label: "STUDIO", withAscent: true },
						{ label: "PROPOSAL" },
					]}
				/>
				<SectionCover
					title={[
						{
							label: "OUR",
						},
						{ label: "SERVICES" },
					]}
					pageNumber={1}
					withPageNumber
					footerType='content'
				/>
			</div>
		</div>
	);
};

export default ProposalPreview;
