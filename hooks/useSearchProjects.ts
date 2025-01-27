import { formatText } from '@/lib/formatters';
import { ProjectContent } from '@/types';
import * as React from 'react';

export function useSearch(
	projects: ProjectContent[],
	setProjects: (value: ProjectContent[]) => void
) {
	function handleFilterChange(event: React.ChangeEvent<HTMLInputElement>) {
		const searchValue = formatText(event.target.value.toLowerCase());

		setProjects(
			projects.filter((project) => formatText(project.name.toLowerCase()).includes(searchValue))
		);
	}

	function applyFormFilters(filters: { category: string; status: string; dateOrder: string }) {
		let filteredProjects = [...projects];

		if (filters.category !== 'all' && filters.category !== undefined) {
			filteredProjects = filteredProjects.filter(
				(project) => project.category === filters.category
			);
		}

		if (filters.status !== 'all' && filters.status !== undefined) {
			filteredProjects = filteredProjects.filter((project) => project.status === filters.status);
		}

		if (filters.dateOrder) {
			filteredProjects.sort((a, b) => {
				const dateA = new Date(a.creationDate).getTime();
				const dateB = new Date(b.creationDate).getTime();
				return filters.dateOrder === 'newest' ? dateB - dateA : dateA - dateB;
			});
		}

		setProjects(filteredProjects);
	}

	return { handleFilterChange, applyFormFilters };
}
