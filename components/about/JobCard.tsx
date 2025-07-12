import { formatMonthYear } from '@/lib/formatters';
import { JobContent } from '@/types';

interface JobCardProp {
	jobData: JobContent;
}

export default function JobCard({ jobData }: JobCardProp) {
	return (
		<div className='flex flex-col gap-2 py-6 px-10 rounded-xl border-gray-300 border shadow-md'>
			<div className='flex justify-between'>
				<h3 className='text-muted-foreground text-xl font-light tracking-tight'>
					{jobData.jobTitle}
				</h3>
				<h2 className='font-light text-2xl tracking-tight'>{jobData.company}</h2>
			</div>

			<div className='mt-4'>
				<p className='max-w-4xl text-balance'>{jobData.jobDuties}</p>
				<div className='flex flex-col mt-5 gap-2'>
					<h2 className='text-base sm:text-lg'>Tech Stack</h2>
					<ul className='flex flex-wrap text-xs sm:text-sm pl-5 gap-2 md:gap-10 text-neutral-600 list-normal font-medium sm:font-normal flex-col md:flex-row capitalize'>
						{jobData.techStack.split(',').map((value) => (
							<li key={value}>{value}</li>
						))}
					</ul>
				</div>
			</div>

			<div className='flex gap-1 font-normal tracking-tight text-sm text-black mt-3'>
				<p>{formatMonthYear(new Date(jobData.startedDate))}</p>
				<span>-</span>
				{jobData.endedDate ? (
					<p>{formatMonthYear(new Date(jobData.endedDate))}</p>
				) : (
					<p>Currently At</p>
				)}
			</div>
		</div>
	);
}
