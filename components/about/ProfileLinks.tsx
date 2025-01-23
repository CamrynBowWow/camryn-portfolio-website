import Image from 'next/image';
import { profileContent } from '@/content/about';
import { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';
import TooltipWrapper from '../TooltipWrapper';

export default function ProfileLinks({
	className,
}: Pick<ComponentPropsWithoutRef<'div'>, 'className'>) {
	return (
		<div className={cn('basis-[10%] flex items-center justify-start gap-3 sm:gap-8', className)}>
			{profileContent.map((profile) => (
				<TooltipWrapper description={profile.tooltip} key={profile.site}>
					<a className='about-profile-link' href={profile.link} target='_blank'>
						<Image src={profile.image} alt={profile.site} fill />
					</a>
				</TooltipWrapper>
			))}
		</div>
	);
}
