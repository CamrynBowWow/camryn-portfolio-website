import { TechStackContent } from '@/types';
import Image from 'next/image';

type TechStackProps = {
	stack: TechStackContent;
};

export default function TechStack({ stack }: TechStackProps) {
	return (
		<div className='flex flex-col gap-8 mt-4'>
			<h2 className='tech-stack-header'>{stack.title}</h2>
			<div className='tech-stack-container'>
				{stack.content.map((value, index) => (
					<div className='tech-stack-content-container' key={index}>
						<Image
							src={value.image}
							alt={value.name}
							width={32}
							height={32}
							className='grayscale'
						/>
						<p>{value.name}</p>
					</div>
				))}
			</div>
		</div>
	);
}
