import { fontBebasNeue, fontInter } from "@/lib/constant/font";
import { FC, ReactElement } from "react";

const ServiceListContent: FC = (): ReactElement => {
	const services = [
		{
			title: "uiux design",
		},
		{
			title: "product design",
		},
		{
			title: "web development",
		},
		{
			title: "branding identity",
		},
	];
	return (
		<section
			className={`${fontInter.className} text-text-dark flex flex-col justify-between pb-[100px] h-full w-full`}>
			<section>
				{services?.map((item, index) => {
					return (
						<section
							className={`  flex items-center justify-between  `}
							key={item.title}>
							<section className='flex  gap-[110px] w-full '>
								<p className='block'>( {index + 1} )</p>
								<p
									className={`font-bold  block text-[120px] tracking-tight ${fontBebasNeue.className} ${index + 1 === 2 ? " text-text-dark" : "text-[#F1F1F1]"} leading-24`}>
									{item?.title}{" "}
								</p>
							</section>
						</section>
					);
				})}
			</section>
		</section>
	);
};

export default ServiceListContent;
