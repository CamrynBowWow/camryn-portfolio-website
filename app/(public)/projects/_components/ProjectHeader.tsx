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
						{finishDate ? <span>{formatDateLong(new Date(finishDate))}</span> : 'Still In Progress'}
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
		</>
	);
}
