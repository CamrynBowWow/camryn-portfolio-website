import { AboutContent, CertificateContent, CertificationContent, TechStackContent } from '@/types';

export const MainContent: AboutContent = {
	title: 'Camryn Bowden',
	startingPoint:
		'A passionate developer with a strong enthusiasm for programming. Driven by a desire to learn and grow continually, I am always eager to explore new technologies and deepen my understanding of programming concepts. I thrive on expanding my skill set, mastering new languages, and tackling challenges to elevate my expertise.',
	experience:
		'I have been programming for several years, continuously expanding my knowledge and refining my skills. With a year of professional experience in software development, I am adept at learning new tech stacks and building upon my existing expertise. I hold a Bachelor of Science in Information Technology (Software Engineering) and a Higher Certificate in Information Systems (Software Development), which have provided me with a strong foundation in the field.',
	passion:
		'My passion for gaming initially inspired my journey into programming, fuelled by a desire to create games of my own. This curiosity quickly grew into a deep love for programming, as I discovered and embraced the diverse and fascinating aspects of the field.',
	bestChoice:
		"I possess relentless determination and a 'no-surrender' attitude. I firmly believe that any problem can be solved with focus, perseverance, and the right mindset.",
	excitedReason:
		'I have always been fascinated by the excitement of exploring new programming languages their similarities, unique nuances, and distinctive features. Learning something new in the programming world is a constant source of joy, especially as I uncover how each language differs from and complements others.',
	mainImage: '/SadDoggo.png',
};

export const LanguagesContent: TechStackContent = {
	title: 'Programming Languages',
	content: [
		{
			name: 'C#',
			image: '/assets/languages/cSharp.svg',
		},
		{
			name: 'CSS',
			image: '/assets/languages/css.svg',
		},
		// {
		// 	name: 'C++',
		// 	image: '/assets/languages/cPlusPlus.svg',
		// },
		{
			name: 'JavaScript',
			image: '/assets/languages/javaScript.svg',
		},
		// {
		// 	name: 'Java',
		// 	image: '/assets/languages/java.svg',
		// },
		// {
		// 	name: 'PHP',
		// 	image: '/assets/languages/php.svg',
		// },
		{
			name: 'TypeScript',
			image: '/assets/languages/typeScript.svg',
		},
		{
			name: 'HTML',
			image: '/assets/languages/html.svg',
		},
		// {
		// 	name: 'Rust',
		// 	image: '/assets/languages/rust.svg',
		// },
		// {
		// 	name: 'Python',
		// 	image: '/assets/languages/python.svg',
		// },
	],
};

export const FrameworksContent: TechStackContent = {
	title: 'Frameworks',
	content: [
		{
			name: 'Angular',
			image: 'assets/frameworks/angular.svg',
		},
		{
			name: 'Blazor',
			image: 'assets/frameworks/blazor.svg',
		},
		{
			name: '.NET Core',
			image: 'assets/frameworks/dotnetcore.svg',
		},
		{
			name: 'Fastify',
			image: 'assets/frameworks/fastify.svg',
		},
		// {
		// 	name: 'Flutter',
		// 	image: 'assets/frameworks/flutter.svg',
		// },
		{
			name: 'Next.js',
			image: 'assets/frameworks/nextjs.svg',
		},
		{
			name: 'React',
			image: 'assets/frameworks/react.svg',
		},
		// {
		// 	name: 'Svelte',
		// 	image: 'assets/frameworks/svelte.svg',
		// },
		{
			name: 'TailwindCSS',
			image: 'assets/frameworks/tailwindcss.svg',
		},
	],
};

export const DatabasesContent: TechStackContent = {
	title: 'Databases',
	content: [
		{
			name: 'Appwrite',
			image: 'assets/databases/appwrite.svg',
		},
		{
			name: 'Firebase',
			image: 'assets/databases/firebase.svg',
		},
		{
			name: 'MongoDB',
			image: 'assets/databases/mongoDb.svg',
		},
		{
			name: 'MySQL',
			image: 'assets/databases/mysql.svg',
		},
		{
			name: 'PostgreSQL',
			image: 'assets/databases/postgresSql.svg',
		},
		{
			name: 'SQL',
			image: 'assets/databases/sql.svg',
		},
		// {
		// 	name: 'SQLite',
		// 	image: 'assets/databases/sqLite.svg',
		// },
		{
			name: 'Supabase',
			image: 'assets/databases/supabase.svg',
		},
		{
			name: 'PlanetScale',
			image: 'assets/databases/planetscale-seeklogo.svg',
		},
		{
			name: 'Neon',
			image: 'assets/databases/neon-logomark-light-color.svg',
		},
	],
};

export const LibrariesContent: TechStackContent = {
	title: 'Libraries',
	content: [
		// {
		// 	name: 'Bootstrap',
		// 	image: 'assets/libraries/bootstrap.svg',
		// },
		{
			name: 'Framer Motion',
			image: 'assets/libraries/framerMotion.svg',
		},
		// {
		// 	name: 'Material UI',
		// 	image: 'assets/libraries/materialUi.svg',
		// },
		{
			name: 'Socket.IO',
			image: 'assets/libraries/socketio.svg',
		},
		{
			name: 'Three.js',
			image: 'assets/libraries/threejs.svg',
		},
		{
			name: 'Shadcn/ui',
			image: 'assets/libraries/shadcn-ui-seeklogo.svg',
		},
	],
};

export const OrmsContent: TechStackContent = {
	title: 'ORMs',
	content: [
		{
			name: 'Mongoose',
			image: 'assets/orms/mongoose.svg',
		},
		{
			name: 'Prisma',
			image: 'assets/orms/prisma.svg',
		},
		{
			name: 'Drizzle',
			image: 'assets/orms/drizzle.svg',
		},
	],
};

export const OtherContent: TechStackContent = {
	title: 'Others',
	content: [
		// {
		// 	name: 'Docker',
		// 	image: 'assets/docker.svg',
		// },
		{
			name: 'Figma',
			image: 'assets/figma.svg',
		},
		{
			name: 'Git',
			image: 'assets/git.svg',
		},
		// {
		// 	name: 'GitHub',
		// 	image: 'assets/github.svg',
		// },
		// {
		// 	name: 'GraphQL',
		// 	image: 'assets/graphql.svg',
		// },
		{
			name: 'Node.js',
			image: 'assets/nodejs.svg',
		},
		{
			name: 'Nodemon',
			image: 'assets/nodemon.svg',
		},
		// {
		// 	name: 'Oracle',
		// 	image: 'assets/oracle.svg',
		// },
		{
			name: 'Sass',
			image: 'assets/sass.svg',
		},
		// {
		// 	name: 'WooCommerce',
		// 	image: 'assets/woocommerce.svg',
		// },
		// {
		// 	name: 'WordPress',
		// 	image: 'assets/wordpress.svg',
		// },
		{
			name: 'Cloudflare',
			image: 'assets/cloudflare.svg',
		},
		{
			name: 'Sentry',
			image: 'assets/sentry.svg',
		},
		{
			name: 'Expo',
			image: 'assets/expo.svg',
		},
	],
};

export const profileContent: { site: string; link: string; image: string; tooltip: string }[] = [
	{
		site: 'Github',
		link: 'https://github.com/CamrynBowWow',
		image: 'assets/github.svg',
		tooltip: 'Link to my Github',
	},
	{
		site: 'Linkedin',
		link: 'https://www.linkedin.com/in/camryn-b-a38a9233b/',
		image: 'assets/linkedin.svg',
		tooltip: 'Link to my Linkedin',
	},
];

export const codeDamnCertificates: CertificationContent = {
	title: 'CodeDamn Certificates',
	content: [
		{
			name: 'Learn Tailwind CSS 3 - A utility-first CSS framework',
			date: '30 December 2021',
			image: '/assets/certificates/tailwindCSS3.jpg',
		},
		{
			name: 'JavaScript Under The Hood',
			date: '07 December 2022',
			image: '/assets/certificates/JavaScriptUnderHood.jpg',
		},
		{
			name: 'Learn Next.js 11 - Build Modern Next.js Applications',
			date: '28 November 2022',
			image: '/assets/certificates/ModernNextjs.jpg',
		},
		{
			name: 'Advanced Next.js Concepts',
			date: '02 December 2022',
			image: '/assets/certificates/AdvancedNextjs.jpg',
		},
		{
			name: 'Learn the basics of web - Internet fundamentals',
			date: '22 November 2022',
			image: '/assets/certificates/InternetFundamentals.jpg',
		},
		{
			name: 'CI/CD With GitHub Actions',
			date: '10 January 2022',
			image: '/assets/certificates/githubActions.jpg',
		},
		{
			name: 'Learn Advanced HTML and CSS Concepts',
			date: '18 March 2025',
			image: '/assets/certificates/learnAdvancedHTMLCSSConcepts.jpg',
		},
		// {
		// 	name: 'Learn React 18 for free',
		// 	date: 'December 27th, 2022 11:56:32 PM',
		// 	image: '/assets/certificates/React18.jpg',
		// },
		// {
		// 	name: 'Ultimate React Template Course',
		// 	date: 'February 25th, 2024 01:04:36 AM',
		// 	image: '/assets/certificates/ReactTemplate.jpg',
		// },
	],
};

export const uniCertificates: CertificateContent = {
	title: 'Academics',
	content: [
		{
			uni: 'Eduvos',
			qualificationName: 'Higher Certificate in Information Systems (Software Development)',
			dateRange: '2020 - 2021',
		},
		{
			uni: 'Eduvos',
			qualificationName: 'Bachelor of Science in Information Technology (Software Engineering)',
			dateRange: '2021 - 2024',
		},
	],
};
