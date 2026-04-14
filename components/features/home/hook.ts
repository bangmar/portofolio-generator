export type HomeAction = {
	label: string;
	href: string;
	target?: "_self" | "_blank";
};

export function useHome() {
	const actions: HomeAction[] = [
		{
			label: "Download PDF",
			href: "/api/pdf",
		},
		{
			label: "Preview PDF",
			href: "/proposal-preview",
			target: "_blank",
		},
		{
			label: "Print View",
			href: "/print",
			target: "_blank",
		},
	];

	return {
		actions,
	};
}
