import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import { currentUser } from '@clerk/nextjs/server';
import Link from 'next/link';
import { db } from '@/drizzle/db';
import ProjectsPage from './projects/page';
import { DataTable } from '../_components/data-table';
import { columns } from '../_components/columns';

export default async function Page() {
	const { userId, redirectToSignIn } = await auth();

	if (userId == null) return redirectToSignIn();

	const user = await currentUser();

	const data = await db.query.CodeProjectTable.findMany();

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
