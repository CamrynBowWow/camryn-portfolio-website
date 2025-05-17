import TooltipWrapper from '@/components/TooltipWrapper';

type ProjectFooterProps = {
	techStack: string;
	githubLink: string | null;
	activeLink: string | null;
	credit: string | null;
	creditLink: string | null;
};

export default function ProjectFooter({
	techStack,
	githubLink,
	activeLink,
	credit,
	creditLink,
}: ProjectFooterProps) {
	return (
		<>
			<div className='flex flex-col gap-2'>
				<h2 className='text-lg sm:text-xl'>Tech Stack</h2>
				<ul className='flex flex-wrap text-xs sm:text-sm pl-5 gap-2 md:gap-10 text-neutral-600 list-normal font-medium sm:font-normal flex-col md:flex-row capitalize'>
					{techStack.split(',').map((value) => (
						<li key={value}>{value}</li>
					))}
				</ul>
			</div>

			{credit && (
				<div className='flex flex-col gap-2 x-sm:gap-3'>
					<h2 className='text-lg sm:text-xl'>Credit Of Tutorial</h2>

					<div className='flex sm:flex-row flex-col gap-1 sm:gap-2 items-start sm:items-center'>
						<p className='font-normal x-sm:font-light text-sm x-sm:text-base x-sm:tracking-tight tracking-wide'>
							{credit}
						</p>
						<p className='sm:flex hidden'>-</p>
						{creditLink && (
							<TooltipWrapper description={`${credit} YouTube Channel`}>
								<a href={creditLink} className='project-footer-link' target='_blank'>
									YouTuber Channel link
								</a>
							</TooltipWrapper>
						)}
					</div>
				</div>
			)}

			<div className='flex x-sm:flex-row flex-col gap-2 x-sm:gap-8'>
				{activeLink && (
					<TooltipWrapper description='Project Live Link'>
						<a target='_blank' className='project-footer-link' href={activeLink}>
							Live Link to Project
						</a>
					</TooltipWrapper>
				)}
				{githubLink && (
					<TooltipWrapper description='Github Project Repository'>
						<a target='_blank' className='project-footer-link' href={githubLink}>
							Link To GitHub
						</a>
					</TooltipWrapper>
				)}
			</div>
		</>
	);
}
