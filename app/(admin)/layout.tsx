import { Toaster } from '@/components/ui/toaster';
import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
	return (
		<main className='container py-12'>
			{children}
			<Toaster />
		</main>
	);
}
