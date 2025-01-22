import ProfileLinks from '@/components/about/ProfileLinks';
import TechStack from '@/components/about/TechStack';
import { LanguagesContent, MainContent } from '@/content/about';
import Title from './_components/Title';
import Content from './_components/Content';

export default function Home() {
	return (
		<section className='container flex flex-col gap-12 md:gap-20 lg:gap-36'>
			<Title />

			<div className='flex flex-col gap-2 items-center text-center'>
				<h1 className='about-title mb-2'>{MainContent.title}</h1>
				<p className='default-paragraph'>{MainContent.startingPoint}</p>
				<p className='default-paragraph'>{MainContent.experience}</p>
				<p className='default-paragraph'>{MainContent.bestChoice}</p>
				<ProfileLinks className='mt-4' />
			</div>

			<Content />

			<TechStack stack={LanguagesContent} />
		</section>
	);
}
