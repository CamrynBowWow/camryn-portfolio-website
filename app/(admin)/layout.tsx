import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
	return <main className='container'>{children}</main>;
}
