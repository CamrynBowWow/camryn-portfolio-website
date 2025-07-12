import { z } from 'zod';

export const jobFormSchema = z
	.object({
		jobTitle: z.string().min(1, 'Required'),
		company: z.string().optional(),
		techStack: z.string().min(1, 'Required'),
		jobDuties: z.string().optional(),
		startedDate: z
			.date({ required_error: 'Started Date is required' })
			.max(new Date(), 'Stared Date should not be older than current date.'),
		endedDate: z
			.union([
				z.date().max(new Date(), 'Ended date should not be older than current date.'),
				z.string().length(0),
			])
			.optional(),
	})
	.refine((data) => !data.endedDate || data.endedDate >= data.startedDate, {
		message: 'Ended date cannot be earlier than started date.',
		path: ['finishDate'],
	});
