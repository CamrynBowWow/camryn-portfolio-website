import { ProjectContent } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import ImageOverlay from './ImageOverlay';

export default function Container({ projects }: { projects: ProjectContent[] }) {
	return (
		<>
			<ul className='grid grid-cols-1 justify-items-center lg:grid-cols-2 xl:grid-cols-3 gap-8'>
				{projects.map((project, index) => (
					<li key={index} className='group projects-list-child-container'>
						<Link href={`/projects/${project.name}`}>
							<div className='h-full w-full overflow-hidden relative rounded'>
								<Image
									src={project.image}
									alt={project.name}
									fill
									loading='lazy'
									className='projects-image'
								/>
							</div>

							<div className='projects-background-overlay' />

							<ImageOverlay
								name={project.name}
								category={project.category}
								status={project.status}
								creationDate={project.creationDate}
								finishDate={project.finishDate}
							/>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}
