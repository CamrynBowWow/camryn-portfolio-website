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
