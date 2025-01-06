import { PROJECT_CATEGORY, PROJECT_STATUS } from '@/data/constants';

declare type AboutContent = {
	title: string;
	startingPoint: string;
	experience: string;
	passion: string;
	bestChoice: string;
	excitedReason: string;
	mainImage: string;
};

declare type TechStackContent = {
	title: string;
	content: {
		name: string;
		image: RefAttributes<SVGSVGElement>;
	}[];
};

declare type ProjectContent = {
	id: string;
	name: string;
	description: string;
	reason: string;
	techStack: string;
	creationDate: string;
	finishDate: string | null;
	image: string;
	githubLink: string | null;
	activeLink: string | null;
	category: (typeof PROJECT_CATEGORY)[number];
	status: (typeof PROJECT_STATUS)[number];
	createdAt: Date;
	updatedAt: Date;
};
