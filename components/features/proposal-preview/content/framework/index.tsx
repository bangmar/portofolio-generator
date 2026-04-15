import { FC, ReactElement } from "react";
import { FrameworkContentProps } from "./types";
import { fontBebasNeue } from "@/lib/constant/font";

const FrameworkContent: FC<FrameworkContentProps> = ({
	list,
}): ReactElement => {
	return (
		<section className='h-full w-full'>
			<section className='grid grid-cols-4 gap-[88px]'>
				{list?.map((item) => {
					return (
						<section key={item.number} className='flex flex-col gap-[247px] '>
							<section className='flex flex-col h-[263px] gap-[34px]'>
								<p className='text-[20px] text-[#848484]'>({item.number})</p>
								<p
									className={`${fontBebasNeue.className} text-[72px]  leading-16`}>
									{item.title}
								</p>
							</section>
							<p className='text-[#848484] text-[20xp]'>{item.description}</p>
						</section>
					);
				})}
			</section>
		</section>
	);
};

export default FrameworkContent;
