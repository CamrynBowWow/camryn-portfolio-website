import { db } from '@/drizzle/db';
import { formatDateLong, formatText } from '@/lib/formatters';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import parse from 'html-react-parser';
import StatusCircle from '@/components/projects/StatusCircle';

export default async function ProjectPage({ params }: { params: { id: string } }) {
	const { id } = await params;

	const projectInfo = await db.query.CodeProjectTable.findFirst({
		where: ({ id: projectId }, { eq }) => eq(projectId, id),
	});

	if (projectInfo == null) return notFound();

	return (
		<section className='container flex flex-col gap-8'>
			<div className='flex flex-col md:flex-row md:justify-between items-start md:items-center gap-3 md:gap-0'>
				<h1 className='capitalize text-3xl sm:text-4xl font-semibold tracking-wide'>
					{formatText(projectInfo.name)}
				</h1>
				<div>
					<p className='text-xs sm:text-sm text-muted-foreground '>
						<span>{formatDateLong(new Date(projectInfo.creationDate))}</span> -{' '}
						{projectInfo.finishDate ? (
							<span>{formatDateLong(new Date(projectInfo.finishDate))}</span>
						) : (
							'Still In Progress'
						)}
					</p>
				</div>
			</div>

			<div className='flex text-base sm:text-lg items-center capitalize gap-4 sm:gap-8'>
				<p>{projectInfo.category}</p> |
				<div className='flex gap-2 sm:gap-3 items-center'>
					<StatusCircle status={projectInfo.status} className='sm:h-3 sm:w-3 h-[11px] w-[11px]' />
					<p>{projectInfo.status}</p>
				</div>
			</div>

			<div className='flex flex-col gap-5'>
				<div className='flex flex-col gap-2'>
					<h2 className='font-semibold text-xl sm:text-2xl underline-offset-2 underline'>
						Features
					</h2>
					<div className='default-paragraph'>{parse(projectInfo.description)}</div>
				</div>
				<div className='flex flex-col gap-2'>
					<h2 className='font-semibold text-xl sm:text-2xl underline-offset-2 underline'>
						Purpose
					</h2>
					<div className='default-paragraph'>{parse(projectInfo.reason)}</div>
				</div>
			</div>

			<div className='flex flex-col gap-2'>
				<h2 className='text-lg sm:text-xl'>Tech Stack</h2>
				<ul className='flex text-xs sm:text-sm pl-5 gap-2 sm:gap-10 text-neutral-600 list-disc font-normal sm:font-light flex-col sm:flex-row'>
					{projectInfo.techStack.split(',').map((value) => (
						<li key={value}>{value}</li>
					))}
				</ul>
			</div>

			<div className='flex gap-8 text-sm font-semibold'>
				{projectInfo.githubLink && (
					<a
						target='_blank'
						className='hover:text-black/50 duration-700'
						href={projectInfo.githubLink}
					>
						Link To GitHub
					</a>
				)}
				{projectInfo.activeLink && (
					<a
						target='_blank'
						className='hover:text-black/50 duration-700'
						href={projectInfo.activeLink}
					>
						Live Link
					</a>
				)}
			</div>
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
