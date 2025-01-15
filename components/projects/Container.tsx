import { ProjectContent } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import ImageOverlay from './ImageOverlay';

export default function Container({ projects }: { projects: ProjectContent[] }) {
	return (
		<>
			<ul className='grid grid-cols-1 justify-items-center lg:grid-cols-2 xl:grid-cols-3 gap-8'>
				{projects.map(({ id, name, image, category, status, creationDate, finishDate }) => (
					<li key={id} className='group projects-list-child-container'>
						<Link href={`/projects/${id}`}>
							<div className='h-full w-full overflow-hidden relative rounded'>
								<Image src={image} alt={name} fill loading='lazy' className='projects-image' />
							</div>

							<div className='projects-background-overlay' />

							<ImageOverlay
								name={name}
								category={category}
								status={status}
								creationDate={creationDate}
								finishDate={finishDate}
							/>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}
