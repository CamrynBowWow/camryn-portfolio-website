import Container from '@/app/(public)/projects/_components/Container';
import { db } from '@/drizzle/db';
import { CodeProjectTable } from '@/drizzle/schema';
import { desc } from 'drizzle-orm';

export const revalidate = 15;

export default async function ProjectsPage() {
	const projects = await db.query.CodeProjectTable.findMany({
		orderBy: [desc(CodeProjectTable.finishDate)],
	});

	return (
		<section className='container w-full'>
			<Container projects={projects} />
		</section>
	);
}
