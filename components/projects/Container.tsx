import { formatDateMedium } from '@/lib/formatters';
import { ProjectContent } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export default function Container({ projects }: { projects: ProjectContent[] }) {
	return (
		<>
			<ul className='grid grid-cols-3 gap-8'>
				{projects.map((project, index) => (
					<li key={index} className='group relative'>
						<Link href={`/projects/${project.name}`}>
							<div className='h-72 w-full overflow-hidden relative rounded'>
								<Image
									src={project.image}
									alt={project.name}
									fill
									loading='lazy'
									className='rounded object-cover object-center transition-transform duration-500 group-hover:scale-105'
								/>
							</div>

							<div className='absolute inset-[5px] rounded bg-background/85 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

							<div className='absolute flex flex-col justify-between h-full inset-x-0 top-0 translate-y-2 px-6 py-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100'>
								<h2 className='capitalize line-clamp-1 text-2xl font-semibold'>{project.name}</h2>

								<div className='flex flex-col gap-3'>
									<div className='flex flex-col'>
										<p className='capitalize font-medium'>{project.category} Project</p>

										<p className='capitalize text-sm'>{project.status}</p>
									</div>

									<div className='flex gap-2 text-muted-foreground text-sm'>
										<p>{formatDateMedium(new Date(project.creationDate))}</p>-
										{project.finishDate && <p>{formatDateMedium(new Date(project.finishDate))}</p>}
									</div>
								</div>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}
