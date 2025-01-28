import { formatDateMedium } from '@/lib/formatters';
import StatusCircle from './StatusCircle';

type ImageOverlayProps = {
	name: string;
	category: string;
	status: string;
	creationDate: string;
	finishDate: string | null;
};

export default function ImageOverlay({
	name,
	category,
	status,
	creationDate,
	finishDate,
}: ImageOverlayProps) {
	return (
		<div className='image-overlay-container '>
			<h2 className='image-overlay-title'>{name}</h2>

			<div className='flex flex-col gap-3'>
				<div className='flex flex-col'>
					<p className='capitalize font-medium'>{category} Project</p>

					<div className='flex gap-[5px] items-center'>
						<StatusCircle status={status} className='h-[9px] w-[9px]' />
						<p className='capitalize text-sm'>{status}</p>
					</div>
				</div>

				<div className='image-overlay-date-container'>
					<p>{formatDateMedium(new Date(creationDate))}</p>-
					{finishDate ? (
						<span>{formatDateMedium(new Date(finishDate))}</span>
					) : (
						<span>In Progress</span>
					)}
				</div>
			</div>
		</div>
	);
}
