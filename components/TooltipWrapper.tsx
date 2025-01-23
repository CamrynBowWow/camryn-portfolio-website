'use client';

import { ReactNode } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

interface TooltipWrapperProps {
	children: ReactNode;
	description: string;
	delayDuration?: number;
}

export default function TooltipWrapper({
	children,
	description,
	delayDuration = 400,
}: TooltipWrapperProps) {
	return (
		<TooltipProvider delayDuration={delayDuration}>
			<Tooltip>
				<TooltipTrigger asChild>{children}</TooltipTrigger>
				<TooltipContent sideOffset={6} className='tracking-tight font-light'>
					<p>{description}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
