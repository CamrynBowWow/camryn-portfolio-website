'use server';

import ProjectForm from '@/app/(admin)/_components/ProjectForm';
import { db } from '@/drizzle/db';

type EditPageParams = Promise<{ id: string }>;

export default async function EditPage({ params }: { params: EditPageParams }) {
	const { id } = await params;

	const projectData = await db.query.CodeProjectTable.findFirst({
		where: ({ id: projectId }, { eq }) => eq(projectId, id),
	});

	return (
		<div className='w-full'>
			<ProjectForm projectData={projectData} />
		</div>
	);
}
