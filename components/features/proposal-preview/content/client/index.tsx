import { FC, ReactElement } from "react";

const ClientSection: FC = (): ReactElement => {
	return (
		<section className='w-full h-full  '>
			<section className='grid grid-cols-3 gap-4 h-full w-full '>
				{Array.from(
					[1, 2, 3, 4, 5, 6, 8, 9, 10].map((item) => {
						return (
							<section
								key={item}
								className='w-full h-full bg-gray-200'></section>
						);
					}),
				)}
			</section>
		</section>
	);
};

export default ClientSection;
