import { FC, ReactElement } from "react";
import { CoverSectionProps } from "./types";
import ProposalFooter from "@/components/ui/footer/proposal";
import Image from "next/image";
import logo from "../../../../../src/assets/general/logo.png";
import { fontBebasNeue, fontInter } from "@/lib/constant/font";

const SectionCover: FC<CoverSectionProps> = ({
	title,
	pageNumber,
	withPageNumber,
	footerEnding = false,
	footerType = "cover",
}): ReactElement => {
	return (
		<section
			className={`${fontBebasNeue.className} flex h-[1080px] w-[1920px] text-white! break-after-page flex-col justify-between bg-text-dark p-10`}>
			<section className='flex justify-between gap-2'>
				<section className='flex items-start gap-[110px]'>
					{withPageNumber && (
						<p className={`${fontInter.className} text-[20px]`}>
							( {pageNumber} )
						</p>
					)}
					<section className='flex flex-col '>
						{title?.map((item) => {
							return (
								<section key={item.label} className='flex gap-6 items-center'>
									{item.withAscent && (
										<span className='bg-accent-blue h-29 leading-40 w-29 block'></span>
									)}
									<p className='font-bold text-[200px] block leading-40'>
										{item.label}
									</p>
								</section>
							);
						})}
					</section>
				</section>
				<section className='h-[72px] w-[72px]'>
					<Image
						draggable={false}
						alt='logo'
						height={72}
						width={72}
						loading='eager'
						unoptimized
						className='h-full w-full object-cover'
						src={logo}
					/>
				</section>
			</section>

			<ProposalFooter
				textTheme={"light"}
				listType={footerType}
				footerEnding={footerEnding}
			/>
		</section>
	);
};

export default SectionCover;
