import Image from 'next/image';

type ProjectImageProps = {
	image: string;
	name: string;
};

export default function ProjectImage({ image, name }: ProjectImageProps) {
	return (
		<div className='w-full sm:flex items-center justify-center hidden h-[300px] md:h-[350px] 2xl:h-[450px] mt-1 sm:mt-4'>
			<div className='relative h-full w-full sm:w-[590px] md:w-[700px] 2xl:w-[1000px]'>
				<Image src={image} alt={`Image of ${name} Project`} loading='lazy' fill />
			</div>
		</div>
	);
}
