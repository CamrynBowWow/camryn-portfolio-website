type ProjectFooterProps = {
	techStack: string;
	githubLink: string | null;
	activeLink: string | null;
};

export default function ProjectFooter({ techStack, githubLink, activeLink }: ProjectFooterProps) {
	return (
		<>
			<div className='flex flex-col gap-2'>
				<h2 className='text-lg sm:text-xl'>Tech Stack</h2>
				<ul className='flex text-xs sm:text-sm pl-5 gap-2 sm:gap-10 text-neutral-600 list-disc font-medium sm:font-normal flex-col sm:flex-row'>
					{techStack.split(',').map((value) => (
						<li key={value}>{value}</li>
					))}
				</ul>
			</div>

			<div className='flex gap-8 text-sm font-semibold'>
				{githubLink && (
					<a target='_blank' className='project-footer-link' href={githubLink}>
						Link To GitHub
					</a>
				)}
				{activeLink && (
					<a target='_blank' className='project-footer-link' href={activeLink}>
						Live Link
					</a>
				)}
			</div>
		</>
	);
}
