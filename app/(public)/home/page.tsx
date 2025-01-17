import ProfileLinks from '@/components/about/ProfileLinks';
import TechStack from '@/components/about/TechStack';
import { LanguagesContent, MainContent } from '@/content/about';
import Title from './_components/Title';

export default function Home() {
	return (
		<section className='container flex flex-col gap-16 md:gap-24 lg:gap-36'>
			<Title />

			<div className='flex flex-col gap-2 items-center text-center'>
				<h1 className='about-title mb-2'>{MainContent.title}</h1>
				<p className='default-paragraph'>{MainContent.startingPoint}</p>
				<p className='default-paragraph'>{MainContent.experience}</p>
				<p className='default-paragraph'>{MainContent.bestChoice}</p>
				<ProfileLinks className='mt-4' />
			</div>

			<TechStack stack={LanguagesContent} />
		</section>
	);
}
