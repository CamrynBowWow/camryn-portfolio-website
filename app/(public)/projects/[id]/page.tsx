import { db } from '@/drizzle/db';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import ProjectHeader from '../_components/ProjectHeader';
import ProjectBody from '../_components/ProjectBody';
import ProjectFooter from '../_components/ProjectFooter';

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

			<div className='w-full x-ms:flex items-center justify-center hidden h-[280px] sm:h-[280px] md:h-[350px] mt-4'>
				<div className='relative h-full w-full sm:w-[500px] md:w-[700px]'>
					<Image
						src={projectInfo.image}
						alt={`Image of ${projectInfo.name} Project`}
						loading='lazy'
						fill
					/>
				</div>
			</div>
		</section>
	);
}
