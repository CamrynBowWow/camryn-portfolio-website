'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ComponentProps } from 'react';

export default function NavLink({ className, ...props }: ComponentProps<typeof Link>) {
	const path = usePathname();
	const isActive = path === props.href;

	return (
		<Link
			{...props}
			className={cn('transition-colors', isActive && 'underline-offset-2 underline', className)}
		/>
	);
}
