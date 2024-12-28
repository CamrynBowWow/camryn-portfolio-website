import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';

const poppins = Poppins({
	variable: '--font-poppins',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Camryn Portfolio',
	description: 'A website to showcase my work',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body
					className={cn(
						'flex min-h-screen flex-col antialiased font-poppins py-24',
						poppins.variable
					)}
				>
					<Header />
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
