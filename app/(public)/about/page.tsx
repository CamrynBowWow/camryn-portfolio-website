import Content from '@/components/about/Content';
import TechStack from '@/components/about/TechStack';
import {
	MainContent,
	LanguagesContent,
	FrameworksContent,
	OtherContent,
	OrmsContent,
	LibrariesContent,
	DatabasesContent,
} from '@/content/about';

export default function AboutPage() {
	return (
		<section className='container flex flex-col gap-10'>
			<Content main={MainContent} />
			<TechStack stack={LanguagesContent} />
			<TechStack stack={FrameworksContent} />
			<TechStack stack={DatabasesContent} />
			<TechStack stack={LibrariesContent} />
			<TechStack stack={OrmsContent} />
			<TechStack stack={OtherContent} />
		</section>
	);
}
