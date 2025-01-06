import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import { currentUser } from '@clerk/nextjs/server';
import { parse } from 'date-fns';
import Link from 'next/link';
import { DataTable } from '../_components/data-table';
import { columns } from '../_components/columns';
import { db } from '@/drizzle/db';
import { ProjectContent } from '@/types';

async function getData(): Promise<ProjectContent[]> {
	return [
		{
			id: '123',
			name: 'test',
			description: 'yes',
			reason: 'yes',
			techStack: 'yes',
			creationDate: '2025-01-01',
			finishDate: '2025-01-01',
			image: 'work',
			githubLink: null,
			activeLink: null,
			category: 'personal',
			status: 'completed',
			createdAt: parse('2025-01-05 10:32:25.875', 'yyyy-MM-dd HH:mm:ss.SSS', new Date()),
			updatedAt: parse('2025-01-05 10:32:25.875', 'yyyy-MM-dd HH:mm:ss.SSS', new Date()),
		},
		{
			id: '125',
			name: 'test2',
			description: 'yes',
			reason: 'yes',
			techStack: 'yes',
			creationDate: '2025-01-01',
			finishDate: '2025-01-01',
			image: 'work',
			githubLink: null,
			activeLink: null,
			category: 'personal',
			status: 'completed',
			createdAt: parse('2025-01-05 10:32:25.875', 'yyyy-MM-dd HH:mm:ss.SSS', new Date()),
			updatedAt: parse('2025-01-05 10:32:25.875', 'yyyy-MM-dd HH:mm:ss.SSS', new Date()),
		},
		{
			id: '124',
			name: 'test2',
			description: 'yes',
			reason: 'yes',
			techStack: 'yes',
			creationDate: '2025-01-01',
			finishDate: '2025-01-01',
			image: 'work',
			githubLink: null,
			activeLink: null,
			category: 'personal',
			status: 'completed',
			createdAt: parse('2025-01-05 10:32:25.875', 'yyyy-MM-dd HH:mm:ss.SSS', new Date()),
			updatedAt: parse('2025-01-05 10:32:25.875', 'yyyy-MM-dd HH:mm:ss.SSS', new Date()),
		},
	];
}

export default async function Page() {
	const { userId, redirectToSignIn } = await auth();

	if (userId == null) return redirectToSignIn();

	const user = await currentUser();

	// const data = await db.query.CodeProjectTable.findMany();
	const data = await getData();

	return (
		<>
			<div className='w-full flex items-center justify-between'>
				<div className='flex items-center gap-2'>
					<div className='ml-auto size-10 sm:size-8'>
						<UserButton appearance={{ elements: { userButtonAvatarBox: 'size-full' } }} />
					</div>
					<h2 className='sm:block hidden font-light'>{user?.fullName}</h2>
				</div>
				<Button asChild>
					<Link href='NoNoShouldNotBeOnPage/add'>Add</Link>
				</Button>
			</div>
			<div className='py-10'>
				<DataTable columns={columns} data={data} />
			</div>
		</>
	);
}
