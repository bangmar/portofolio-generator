import { FC, ReactElement } from "react";
import { ContentSectionProps } from "./types";
import ProposalFooter from "@/components/ui/footer/proposal";
import { fontBebasNeue, fontInter } from "@/lib/constant/font";

const SectionContent: FC<ContentSectionProps> = ({
	children,
	pageNumber,
	title,
	withPageNumber,
	subTitle,
	childrenClassName,
}): ReactElement => {
	return (
		<section
			className={`${fontBebasNeue.className} flex h-[1080px] w-[1920px]  bg-white text-text-dark break-after-page flex-col justify-between p-10`}>
			<section className='grid grid-cols-12 pb-[40px] h-full '>
				<section className='flex items-start col-span-3 flex-col gap-[32px] '>
					{withPageNumber && (
						<p className={`${fontInter.className} text-[20px] `}>
							( {pageNumber} )
						</p>
					)}
					<section className='flex flex-col gap-[40px]'>
						<section className='flex flex-col '>
							{title?.map((item) => {
								return (
									<section key={item.label} className='flex gap-6 items-center'>
										<p className='font-bold text-[72px]  block leading-16'>
											{item.label}
										</p>
									</section>
								);
							})}
						</section>
						<section className={`${fontInter.className} flex flex-col gap-6`}>
							{subTitle?.map((item) => {
								return (
									<p
										key={item.label}
										className='font-normal text-[#848484] text-[20px]  block '>
										{item.label}
									</p>
								);
							})}
						</section>
					</section>
				</section>

				<span className='block col-span-2'></span>
				<section
					className={` col-span-7 ${childrenClassName} ${fontInter.className}`}>
					{children}
				</section>
			</section>

			<ProposalFooter textTheme={"dark"} listType={"content"} />
		</section>
	);
};

export default SectionContent;
