import { cn } from '@/lib/utils';
import { ComponentPropsWithoutRef } from 'react';

type CertificateCardProps = {
	qualificationName: string;
	uni: string;
	dateRange: string;
} & Pick<ComponentPropsWithoutRef<'div'>, 'className'>;

export default function CertificateCard({
	qualificationName,
	uni,
	dateRange,
	className,
}: CertificateCardProps) {
	return (
		<div
			className={cn(
				'flex flex-col text-center w-full x-ms:w-[90%] sm:w-[75%] timeline-hidden:w-[48%]',
				className
			)}
		>
			<h2 className='text-balance sm:text-pretty text-base sm:text-xl tracking-wide mb-3'>
				{qualificationName}
			</h2>
			<h3 className='text-sm sm:text-base font-semibold mb-1'>{uni}</h3>
			<p className='text-gray-600 sm:tracking-tight text-xs sm:text-sm'>{dateRange}</p>
		</div>
	);
}
