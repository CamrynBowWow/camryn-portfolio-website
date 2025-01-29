import { db } from '@/drizzle/db';
import { notFound } from 'next/navigation';
import ProjectHeader from '../_components/ProjectHeader';
import ProjectBody from '../_components/ProjectBody';
import ProjectFooter from '../_components/ProjectFooter';
import ProjectImage from '../_components/ProjectImage';

type ProjectPageParams = Promise<{ id: string }>;

export default async function ProjectPage({ params }: { params: ProjectPageParams }) {
	const { id } = await params;

	const projectInfo = await db.query.CodeProjectTable.findFirst({
		where: ({ id: projectId }, { eq }) => eq(projectId, id),
	});

	if (projectInfo == null) return notFound();

	return (
		<section className='container flex flex-col gap-8'>
			<ProjectHeader
				name={projectInfo.name}
				creationDate={projectInfo.creationDate}
				finishDate={projectInfo.finishDate}
				category={projectInfo.category}
				status={projectInfo.status}
			/>

			<ProjectBody description={projectInfo.description} reason={projectInfo.reason} />

			<ProjectFooter
				techStack={projectInfo.techStack}
				githubLink={projectInfo.githubLink}
				activeLink={projectInfo.activeLink}
				credit={projectInfo.credit}
				creditLink={projectInfo.creditLink}
			/>

			<ProjectImage image={projectInfo.image} name={projectInfo.name} />
		</section>
	);
}
