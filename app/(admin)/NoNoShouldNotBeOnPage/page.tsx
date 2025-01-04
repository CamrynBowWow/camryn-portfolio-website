import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import { currentUser } from '@clerk/nextjs/server';

import Link from 'next/link';

export default async function Page() {
	const { userId, redirectToSignIn } = await auth();

	if (userId == null) return redirectToSignIn();

	const user = await currentUser();

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
		</>
	);
}
