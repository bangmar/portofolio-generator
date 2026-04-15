import { fontBebasNeue, fontInter } from "@/lib/constant/font";
import { FC, ReactElement } from "react";

const AgendaContent: FC = (): ReactElement => {
	const agenda = [
		{
			title: "Company Intro",
			page: "1",
		},
		{
			title: "Our Services",
			page: "2",
		},
		{
			title: "Our Framework",
			page: "3",
		},
		{
			title: "Selected Projects",
			page: "4",
		},
		{
			title: "Collaborate with Hatypo",
			page: "5",
		},
		{
			title: "Our Pricing",
			page: "6",
		},
	];

	return (
		<section
			className={`${fontInter.className} text-text-dark flex flex-col justify-between pb-[100px] h-full w-full`}>
			<section>
				{agenda?.map((item, index) => {
					return (
						<section
							className={`text-[24px] py-[24px] flex items-center justify-between border-b-[1px] border-[#E6E6E6] ${index === 0 ? "border-t-[1px]" : ""}`}
							key={item.page}>
							<p>{item?.title}</p>
							<p>Page {item?.page}</p>
						</section>
					);
				})}
			</section>
		</section>
	);
};

export default AgendaContent;
