import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import { currentUser } from '@clerk/nextjs/server';
import Link from 'next/link';
import { db } from '@/drizzle/db';
import { DataTable } from '../_components/data-table';
import { columns } from '../_components/columns';
import TooltipWrapper from '@/components/TooltipWrapper';
import JobSection from '../_components/JobSection';

export const revalidate = 0;

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
					<h2 className='sm:block hidden font-light cursor-default'>{user?.fullName}</h2>
				</div>
			</div>
			<section className='py-10 flex flex-col gap-3 x-sm:gap-4'>
				<div className='admin-title-container'>
					<h2 className='admin-h2'>Projects Table</h2>
					<TooltipWrapper description='Add New Project'>
						<Button asChild>
							<Link href='NoNoShouldNotBeOnPage/add'>Add Project</Link>
						</Button>
					</TooltipWrapper>
				</div>
				<DataTable columns={columns} data={data} />
			</section>
			<JobSection />
		</>
	);
}
