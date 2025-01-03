import { PROJECT_CATEGORY, PROJECT_STATUS } from '@/data/constants';
import { z } from 'zod';

export const projectFormSchema = z.object({
	name: z.string().min(1, 'Required'),
	description: z.string().min(1, 'Required'),
	reason: z.string().min(1, 'Required'),
	techStack: z.string().min(1, 'Required'),
	creationDate: z
		.date({ required_error: 'Creation Date is required' })
		.max(new Date(), 'Creation Date should not be older than current date.'),
	finishDate: z
		.date({ required_error: 'Finish Date is required' })
		.max(new Date(), 'Finish date should not be older than current date.')
		.optional(),
	image: z
		.string()
		.regex(/^data:image\/(png|jpg|jpeg|gif|svg\+xml);base64,/, 'Invalid image format'),
	githubLink: z.string().optional(),
	activeLink: z.string().optional(),
	category: z.enum(PROJECT_CATEGORY),
	status: z.enum(PROJECT_STATUS),
});
