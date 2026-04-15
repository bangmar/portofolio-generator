import { FC, ReactElement } from "react";
import SectionCover from "./template/section-cover";
import { ProposalPreviewProps } from "./types";
import SectionContent from "./template/section-content";
import AboutContent from "./content/about";

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
				<SectionContent
					title={[
						{
							label: "GET DEALS,",
						},
						{ label: "CREATE" },
						{ label: "CONTRACT" },
					]}
					subTitle={[
						{
							label:
								"Once agreed, a secure payment process begins, ensuring commitment from both parties. This step ensures a solid foundation for collaboration and prepares the foundation for a successful partnership.",
						},
						{
							label:
								"If bound by a monthly contract, the client is required to pay 100% deposit before starting the project. Payment will be made at the beginning of each month, or at the start of the contract. If the contract starts on March 10, payment must be made on that day and the next payment will be on April 10.",
						},
						{
							label: "We are only using Wise, PayPal, and Upwork.",
						},
					]}
					pageNumber={1}
					withPageNumber
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
				<SectionContent
					subTitle={[
						{
							label:
								"Start from 2021 — no limit. From our serene base in Surakarta, we channel calm into creativity to craft digital products that matter and leave a lasting mark.",
						},
					]}>
					<AboutContent />
				</SectionContent>
			</div>
		</div>
	);
};

export default ProposalPreview;
