import { PROJECT_CATEGORY, PROJECT_STATUS } from '@/data/constants';

declare interface AboutContent {
	title: string;
	startingPoint: string;
	experience: string;
	passion: string;
	bestChoice: string;
	excitedReason: string;
	mainImage: string;
}

declare type TechStackContent = {
	title: string;
	content: {
		name: string;
		image: RefAttributes<SVGSVGElement>;
	}[];
};

declare type CertificationContent = {
	title: string;
	content: {
		name: string;
		date: string;
		image: IframeHTMLAttributes<HTMLIFrameElement>;
	}[];
};

declare type CertificateContent = {
	title: string;
	content: {
		uni: string;
		qualificationName: string;
		dateRange: string;
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
	credit: string | null;
	creditLink: string | null;
	createdAt: Date;
	updatedAt: Date;
};

declare type Job = {
	id: string;
	jobTitle: string;
	company: string | null;
	techStack: string;
	jobDuties: string | null;
	startedDate: string;
	endedDate: string | null;
	createdAt: Date;
	updatedAt: Date;
};

declare type JobContent = {
	jobTitle: string;
	company: string | null;
	techStack: string;
	jobDuties: string | null;
	startedDate: string;
	endedDate: string | null;
};
