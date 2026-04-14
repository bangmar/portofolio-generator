export type CoverSectionProps = {
	title?: Array<{
		label: string;
		withAscent?: boolean;
	}>;
	withPageNumber?: boolean;
	pageNumber?: number;
	footerType?: "cover" | "content";
};
