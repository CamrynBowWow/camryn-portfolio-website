import StatusCircle from '@/app/(public)/projects/_components/StatusCircle';
import { formatDateLong, formatText } from '@/lib/formatters';

type ProjectHeaderProps = {
	name: string;
	creationDate: string;
	finishDate: string | null;
	category: string;
	status: string;
};

export default function ProjectHeader({
	name,
	creationDate,
	finishDate,
	category,
	status,
}: ProjectHeaderProps) {
	return (
		<>
			<div className='flex flex-col md:flex-row md:justify-between items-start md:items-center gap-3 md:gap-0'>
				<h1 className='capitalize text-3xl sm:text-4xl font-semibold tracking-wide'>
					{formatText(name)}
				</h1>
				<div>
					<p className='text-xs sm:text-sm text-muted-foreground '>
						<span>{formatDateLong(new Date(creationDate))}</span> -{' '}
						{finishDate ? (
							<span>{formatDateLong(new Date(finishDate))}</span>
						) : (
							<span>In Progress</span>
						)}
					</p>
				</div>
			</div>

			<div className='flex text-base sm:text-lg items-center capitalize gap-4 sm:gap-8'>
				<p>{category}</p> |
				<div className='flex gap-2 sm:gap-3 items-center'>
					<StatusCircle status={status} className='sm:h-3 sm:w-3 h-[11px] w-[11px]' />
					<p>{status}</p>
				</div>
			</div>

			{status === 'unavailable' && (
				<div className='flex flex-col gap-1 sm:gap-[2px]'>
					<h3 className='font-semibold tracking-wide text-sm sm:text-base underline underline-offset-2'>
						Live App
					</h3>
					<p className='text-xs sm:text-sm tracking-tight max-w-sm sm:max-w-md text-balance sm:text-pretty text-red-400'>
						The <span className='font-semibold text-gray-600'>Live App</span> is working and
						accessible. However, it appears unavailable because the database storing its data is
						currently paused.
					</p>
				</div>
			)}
		</>
	);
}
