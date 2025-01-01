import Header from '@/components/Header';
import { ReactNode } from 'react';

export default function PublicLayout({ children }: { children: ReactNode }) {
	return (
		<main className='py-24'>
			<Header />
			{children}
		</main>
	);
}
