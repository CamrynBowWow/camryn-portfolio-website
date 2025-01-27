'use client';

import { ProjectContent } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import ImageOverlay from './ImageOverlay';
import { useState } from 'react';
import SearchContainer from './SearchContainer';
import { useSearch } from '@/hooks/useSearchProjects';

export default function Container({ projects }: { projects: ProjectContent[] }) {
	const [sortedProjects, setSortedProjects] = useState<ProjectContent[]>(projects);

	const { handleFilterChange, applyFormFilters } = useSearch(projects, setSortedProjects);

	return (
		<>
			<SearchContainer
				handleFilterChange={handleFilterChange}
				applyFormFilters={applyFormFilters}
			/>
			<ul className='grid grid-cols-1 justify-items-center lg:grid-cols-2 xl:grid-cols-3 gap-8'>
				{sortedProjects.map(({ id, name, image, category, status, creationDate, finishDate }) => (
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
