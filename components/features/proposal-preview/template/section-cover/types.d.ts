export type CoverSectionProps = {
	title?: Array<{
		label: string;
		withAscent?: boolean;
	}>;
	withPageNumber?: boolean;
	pageNumber?: string;
	footerType?: "cover" | "content";
	footerEnding?: boolean;
};
