import { DATE_SEARCH, PROJECT_CATEGORY_SEARCH, PROJECT_STATUS_SEARCH } from '@/data/constants';
import { z } from 'zod';

export const searchSchema = z.object({
	dateOrder: z.enum(DATE_SEARCH).optional(),
	category: z.enum(PROJECT_CATEGORY_SEARCH).optional(),
	status: z.enum(PROJECT_STATUS_SEARCH).optional(),
});
