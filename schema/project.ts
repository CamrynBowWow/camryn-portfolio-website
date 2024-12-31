import { PROJECT_CATEGORY, PROJECT_STATUS } from '@/data/constants';
import { z } from 'zod';

export const projectFormSchema = z.object({
	name: z.string(),
	description: z.string(),
	reason: z.string(),
	techStack: z.string(),
	creationDate: z.date(),
	finishDate: z.date(),
	image: z.custom<File[]>(),
	githubLink: z.string(),
	activeLink: z.string(),
	category: z.enum(PROJECT_CATEGORY),
	status: z.enum(PROJECT_STATUS),
});
