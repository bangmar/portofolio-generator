import { FC, ReactElement } from "react";
import SectionCover from "./template/section-cover";
import { ProposalPreviewProps } from "./types";
import SectionContent from "./template/section-content";
import AboutContent from "./content/about";
import AgendaContent from "./content/agenda";
import StatsSection from "./content/stats";
import ClientSection from "./content/client";
import DealContent from "./content/deal";
import SectionContentOnly from "./template/section-content-only";
import { FrameWorkListType } from "./content/framework/types";
import FrameworkContent from "./content/framework";
import ServiceListContent from "./content/service-list";
import ServiceItemContent from "./content/service-item";

const ProposalPreview: FC<ProposalPreviewProps> = ({
	mode = "preview",
}): ReactElement => {
	const isPrintMode = mode === "print";

	const frameworkContentOne: FrameWorkListType = [
		{
			number: "01",
			title: "Decode the Unknown",
			description:
				"We dissect trends, analyze data, and dive into the heartbeat of your audience. This is where the future starts revealing itself—one insight at a time.",
		},
		{
			number: "02",

			title: "Design the Blueprint of Tomorrow ",
			description:
				"Think bold visuals and boundary-pushing ideas. We gather inspiration that connects the now to what’s next, building a moodboard that sets the tone for the extraordinary..",
		},
		{
			number: "03",

			title: "Define the Vision",
			description:
				"Your brand’s essence is fine-tuned into a master plan. Every color, font, and element serves a purpose: to resonate today and lead tomorrow.",
		},
		{
			number: "04",

			title: "Build the Future",
			description:
				"From digital interfaces to immersive branding, we bring your vision to life. Every detail is crafted to ensure your product doesn’t just adapt to the future—it defines it.",
		},
	];

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
					titleSize='large'
					title={[
						{
							label: "THE",
						},
						{ label: "CONTENT" },
					]}>
					<AgendaContent />
				</SectionContent>
				<SectionCover
					title={[
						{
							label: "ABOUT",
						},
						{ label: "HATYPO" },
					]}
					pageNumber={"02"}
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
					withPageNumber>
					<DealContent />
				</SectionContent>
				<SectionContent
					subTitle={[
						{
							label:
								"We take creative leaps and offer tailored solutions for the growth of your digital products. From scratch to success and beyond.",
						},
					]}>
					<StatsSection />
				</SectionContent>

				<SectionCover
					title={[
						{
							label: "OUR",
						},
						{ label: "SERVICES" },
					]}
					pageNumber={"01"}
					withPageNumber
					footerType='content'
				/>

				<SectionContent
					subTitle={[
						{
							label:
								"Since 2021, we have partnered with these company to create positive impact for the future. Will your logo be next here?",
						},
					]}>
					<ClientSection />
				</SectionContent>
				<SectionContent
					subTitle={[
						{
							label:
								"We take creative leaps and offer tailored solutions for the growth of your digital products. From scratch to success and beyond.",
						},
					]}>
					<ServiceListContent />
				</SectionContent>
				<SectionContentOnly>
					<ServiceItemContent />
				</SectionContentOnly>
				<SectionContentOnly>
					<FrameworkContent list={frameworkContentOne} />
				</SectionContentOnly>
				<SectionCover
					title={[
						{
							label: "LETS",
						},
						{ label: "PARTNER UP", withAscent: true },
						{ label: "WITH HATYPO" },
					]}
					footerEnding
				/>
			</div>
		</div>
	);
};

export default ProposalPreview;
