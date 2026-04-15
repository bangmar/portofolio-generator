import { ReactElement } from "react";

export type ContentSectionProps = {
	title?: Array<{
		label?: string;
	}>;
	subTitle?: Array<{
		label?: string;
	}>;
	titleSize?: "normal" | "large";
	withPageNumber?: boolean;
	pageNumber?: number;
	children?: ReactElement;
	childrenClassName?: string;
};
