import { fontBebasNeue, fontInter } from "@/lib/constant/font";
import { FC, ReactElement } from "react";

const ServiceItemContent: FC = (): ReactElement => {
	const service = [
		{
			number: "01",
			title: "uiux design",
			content: [
				"Logo Design",
				"Visual Identity",
				"Visual Identity",
				"Pitch Deck",
				"Editorial Design",
				"Stationary ",
			],
		},
		{
			number: "02",
			title: "product design",
			content: [
				"Visual Identity",
				"Logo Design",
				"Pitch Deck",
				"Visual Identity",
			],
		},
	];
	return (
		<section className='w-full h-full'>
			<section className='grid grid-cols-2'>
				{service?.map((item) => {
					return (
						<section
							key={item.number}
							className='flex text-text-dark items-start gap-[144px] '>
							<p className={`${fontInter.className} text-[20px] `}>
								( {item.number} )
							</p>
							<section className='w-[530px] block  flex flex-col gap-[100px]'>
								<p
									className={`uppercase w-[320px] ${fontBebasNeue.className}  text-[120px] tracking-tight leading-24 `}>
									{item.title}
								</p>
								<section className='flex flex-col gap-[50px]'>
									<section className='h-[202px] w-[358px] bg-gray-200 block'></section>
									<section className='flex flex-col gap-[12px]'>
										{item.content.map((item, index) => {
											return (
												<section key={item} className='flex text-[22px] '>
													<p className='w-[81px]'>( {index + 1} )</p>
													<p>{item}</p>
												</section>
											);
										})}
									</section>
								</section>
							</section>
						</section>
					);
				})}
			</section>
		</section>
	);
};

export default ServiceItemContent;
