'use client';

import { AboutContent } from '@/types';
import Image from 'next/image';
import ProfileLinks from './ProfileLinks';

type ContentProps = {
	main: AboutContent;
};

export default function Content({ main }: ContentProps) {
	return (
		<div className='flex flex-col sm:flex-row gap-10 w-full'>
			<div className='basis-[60%] flex flex-col gap-2'>
				<h1 className='about-title'>{main.title}</h1>
				<p className='default-paragraph'>{main.startingPoint}</p>
				<p className='default-paragraph'>{main.experience}</p>
				<p className='default-paragraph'>{main.passion}</p>
				<p className='default-paragraph'>{main.bestChoice}</p>
				<p className='default-paragraph'>{main.excitedReason}</p>
			</div>

			<div className='sm:basis-[40%] h-[300px] sm:h-auto justify-center flex flex-col gap-3 sm:gap-0'>
				<div className='basis-[90%] relative'>
					<Image
						src={main.mainImage}
						alt='Samurai Dog by Credit: Gabriel Lopes'
						title='Credit: Samurai Dogo by Gabriel Lopes'
						fill={true}
						style={{ objectFit: 'cover' }}
						className='grayscale-[30%]'
					/>
				</div>
				<ProfileLinks />
			</div>
		</div>
	);
}
