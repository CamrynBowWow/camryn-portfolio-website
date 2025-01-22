import { cn } from '@/lib/utils';
import Image from 'next/image';

type ImageOverlayProps = {
	image: string;
	isDisplayed: boolean;
	setIsDisplayed: () => void;
};

export default function ImageOverlay({ image, isDisplayed, setIsDisplayed }: ImageOverlayProps) {
	return (
		<div
			onClick={setIsDisplayed}
			className={cn(
				'fixed inset-0 flex items-center bg-black/50 justify-center z-10 ',
				isDisplayed ? 'flex' : 'hidden'
			)}
		>
			{image && (
				<div className='relative h-full w-[95%] sm:w-[600px] md:w-[700px] lg:w-[850px] xl:w-[1000px] 2xl:w-[1300px]'>
					<Image
						src={image}
						alt='Certificate Image'
						fill
						className='object-contain'
						loading='lazy'
					/>
				</div>
			)}
		</div>
	);
}
