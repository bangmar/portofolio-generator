import { fontBebasNeue } from "@/lib/constant/font";
import { FC, ReactElement } from "react";

import team from "@/src/assets/general/hatypo-team.png";
import Image from "next/image";

const AboutContent: FC = (): ReactElement => {
	return (
		<section
			className={`${fontBebasNeue.className} flex flex-col justify-between pb-[100px] h-full w-full`}>
			<p className={` text-[100px] font-normal leading-20 block`}>
				Hatypo Studio is a creative partner for branding, UIUX & web design —
				helping brands grow with purpose.
			</p>

			<section className='h-[299px] w-[448px]'>
				<Image
					src={team}
					alt='hatypo-team'
					width={448}
					height={299}
					loading='eager'
					unoptimized
					className='h-full w-full'
				/>
			</section>
		</section>
	);
};

export default AboutContent;
