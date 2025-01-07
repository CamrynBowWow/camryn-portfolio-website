import React, { useState } from 'react';
import { DataTable } from '../../_components/data-table';
import { columns } from '../../_components/columns';
import { ProjectContent } from '@/types';

export default function ProjectsPage({ data }: { data: ProjectContent[] }) {
	const [projectData, setProjectData] = useState<ProjectContent[]>();

	setProjectData(data);

	return <>{projectData && <DataTable columns={columns} data={projectData} />}</>;
}
