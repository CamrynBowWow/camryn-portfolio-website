import { cn } from '@/lib/utils';

import { ComponentPropsWithoutRef } from 'react';

type StatusCircleProps = {
	status: string;
} & Pick<ComponentPropsWithoutRef<'div'>, 'className'>;

export default function StatusCircle({ status, className }: StatusCircleProps) {
	return (
		<div
			className={cn(
				'border border-gray-500/45 rounded-full',
				status === 'completed'
					? 'bg-green-400'
					: status === 'in progress'
					? 'bg-yellow-400'
					: status === 'started'
					? 'bg-sky-400'
					: status === 'unavailable' || status === 'cancelled'
					? 'bg-red-400'
					: 'bg-teal-400',
				className
			)}
		/>
	);
}
