import { LoaderCircle } from 'lucide-react';

export default function LoadingState() {
	return (
		<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 items-center'>
			<LoaderCircle className='text-sky-400 size-28 animate-spin' />
			<div className='text-2xl font-semibold text-center text-primary'>Loading...</div>
		</div>
	);
}
