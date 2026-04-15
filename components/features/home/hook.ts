export type HomeAction = {
	label: string;
	href: string;
	target?: "_self" | "_blank";
	type?: "link" | "download";
};

export function useHome() {
	const actions: HomeAction[] = [
		{
			label: "Download PDF",
			href: "/api/pdf",
			type: "download",
		},
		{
			label: "Preview PDF",
			href: "/proposal-preview",
			target: "_blank",
			type: "link",
		},
		{
			label: "Print View",
			href: "/print",
			target: "_blank",
			type: "link",
		},
	];

	return {
		actions,
	};
}
