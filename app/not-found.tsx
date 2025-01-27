import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
	return (
		<section className='container py-24 min-h-screen flex flex-col items-center'>
			<h1 className='text-lg x-sm:text-2xl transition-1000 text-center sm:text-3xl md:text-4xl font-light tracking-wide capitalize'>
				Hmmm, you should not be here
			</h1>
			<div className='relative transition-1000 h-[250px] x-sm:h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-[280px] x-sm:w-[350px] sm:w-[600px] md:w-[700px] lg:w-[800px]'>
				<Image src='/gifs/not-found.gif' alt='page not found' fill loading='lazy' />
			</div>

			<div className='flex flex-col gap-1 md:gap-4 w-full justify-center items-center text-center'>
				<h2 className='font-semibold text-3xl x-sm:text-4xl md:text-5xl tracking-wide transition-1000'>
					Not Found
				</h2>
				<p className='text-sm x-sm:text-base md:text-xl transition-1000'>
					The page you looking is not here!
				</p>
			</div>

			<Button
				variant='default'
				className='mt-10 font-normal capitalize text-sm md:text-lg py-5 md:py-6 px-6 md:px-10 transition-1000 rounded-sm'
				asChild
			>
				<Link href='/home'>Return to the Home page</Link>
			</Button>
		</section>
	);
}
