import Link from 'next/link';
import Image from 'next/image';
import { profileContent } from '@/content/about';
import { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

export default function ProfileLinks({
	className,
}: Pick<ComponentPropsWithoutRef<'div'>, 'className'>) {
	return (
		<div className={cn('basis-[10%] flex items-center justify-start gap-3 sm:gap-8', className)}>
			{profileContent.map((profile) => (
				<Link className='about-profile-link' key={profile.site} href={profile.link}>
					<Image src={profile.image} alt={profile.site} fill />
				</Link>
			))}
		</div>
	);
}
