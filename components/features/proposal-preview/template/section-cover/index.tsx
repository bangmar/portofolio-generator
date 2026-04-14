import { FC, ReactElement } from "react";
import { CoverSectionProps } from "./types";
import { Bebas_Neue, Inter } from "next/font/google";
import ProposalFooter from "@/components/ui/footer/proposal";
import Image from "next/image";
import logo from "../../../../../src/assets/general/logo.png";

const bebasNeue = Bebas_Neue({
	weight: "400",
	subsets: ["latin"],
});

const inter = Inter({
	subsets: ["latin"],
});

const SectionCover: FC<CoverSectionProps> = ({
	title,
	pageNumber,
	withPageNumber,
	footerType = "cover",
}): ReactElement => {
	return (
		<section
			className={`${bebasNeue.className} flex h-[270mm] w-[480mm] break-after-page flex-col justify-between bg-text-dark p-10`}>
			<section className='flex justify-between gap-2'>
				<section className='flex items-start gap-[110px]'>
					{withPageNumber && (
						<p className={`${inter.className} text-[20px] text-white`}>
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
									<p className='font-bold text-[200px] text-white block leading-40'>
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
						className='w-full h-full object-cover'
						src={logo}
					/>
				</section>
			</section>

			<ProposalFooter textTheme={"light"} listType={footerType} />
		</section>
	);
};

export default SectionCover;
