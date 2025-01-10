import Container from '@/components/projects/Container';
import { db } from '@/drizzle/db';
import { CodeProjectTable } from '@/drizzle/schema';
import { asc } from 'drizzle-orm';

export default async function ProjectsPage() {
	const projects = await db.query.CodeProjectTable.findMany({
		orderBy: [asc(CodeProjectTable.finishDate)],
	});

	return (
		<section className='container w-full'>
			<Container projects={projects} />
		</section>
	);
}
