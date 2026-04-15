import { fontBebasNeue } from "@/lib/constant/font";
import { FC, ReactElement } from "react";

const AboutContent: FC = (): ReactElement => {
	return (
		<section>
			<p
				className={`${fontBebasNeue.className} font-bold text-[100px] block leading-20`}>
				Hatypo Studio is a creative partner for branding, UIUX & web design —
				helping brands grow with purpose.
			</p>
		</section>
	);
};

export default AboutContent;
