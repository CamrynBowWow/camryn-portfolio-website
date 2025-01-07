/* eslint-disable  @typescript-eslint/no-explicit-any */

import { db } from '@/drizzle/db';
import { ProjectContent } from '@/types';
import { useCallback, useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { deleteProject } from '@/server/actions/project';

export function useProjects() {
	const [data, setData] = useState<ProjectContent[]>([]);
	const { toast } = useToast();

	const fetchProjects = useCallback(async () => {
		try {
			const projects = await db.query.CodeProjectTable.findMany();
			setData(projects);
		} catch (error: any) {
			toast({
				variant: 'destructive',
				title: error.message,
			});
		}

		console.log('here');
	}, []);

	const deleteProjectById = async (id: string) => {
		const data = await deleteProject(id);

		if (data?.error) {
			toast({
				variant: 'destructive',
				title: 'An Error has occurred while deleting the project.',
			});
		} else {
			toast({
				variant: 'default',
				title: 'Project was successfully deleted.',
			});
			fetchProjects();
		}
	};

	// useEffect(() => {
	// 	fetchProjects();
	// }, [fetchProjects]);

	return { data, deleteProjectById };
}
