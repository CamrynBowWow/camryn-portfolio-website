import Container from '@/components/projects/Container';
import { db } from '@/drizzle/db';

export default async function ProjectsPage() {
	const projects = await db.query.CodeProjectTable.findMany();

	return (
		<section className='container w-full'>
			<Container projects={projects} />
		</section>
	);
}
