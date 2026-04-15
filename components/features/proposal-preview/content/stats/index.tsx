import { fontBebasNeue, fontInter } from "@/lib/constant/font";
import { FC, ReactElement } from "react";

const StatsSection: FC = (): ReactElement => {
	const stats = [
		{
			title: "Operational Days",
			value: "1598",
			description: "Successfully completed more than 200+ projects.",
		},
		{
			title: "Funding Raised",
			value: "$30M",
			description:
				"Our creative work has helped clients secure more than $30M+ in funding.",
		},
		{
			title: "Project Success",
			value: "300",
			description:
				"Our creative work has helped clients secure more than $50M+ in funding.",
		},
		{
			title: "Country in the world",
			value: "30",
			description: "Countries, global clients from all over the world",
		},
		{
			title: "Team Members",
			value: "25",
			description: "Passionate Designers and Management Teams",
		},
	];
	return (
		<section
			className={`${fontInter.className} text-text-dark flex flex-col justify-between pb-[100px] h-full w-full`}>
			<section>
				{stats?.map((item, index) => {
					return (
						<section
							className={` pt-[24px] pb-[16px]  text-[18px] text-[#848484] flex items-center justify-between border-b-[1px] border-[#E6E6E6] ${index === 0 ? "border-t-[1px]" : ""}`}
							key={item.value}>
							<section className='flex  gap-[38px] '>
								<p className='block'>( {index + 1} )</p>
								<p
									className={`font-bold w-[332px] block text-[120px] tracking-tight ${fontBebasNeue.className} text-text-dark leading-28`}>
									{item?.value}{" "}
									<span className='text-accent-blue font-bold'>+</span>
								</p>
							</section>
							<p className=' block w-[231px] text-center'>{item?.title}</p>
							<p className=' block w-[245px]'>{item?.description}</p>
						</section>
					);
				})}
			</section>
		</section>
	);
};

export default StatsSection;
