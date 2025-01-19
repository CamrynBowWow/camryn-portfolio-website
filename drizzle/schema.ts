import { PROJECT_CATEGORY, PROJECT_STATUS } from '@/data/constants';
import { date, pgEnum, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const projectCategoryEnum = pgEnum('projectCategory', PROJECT_CATEGORY);
export const projectStatusEnum = pgEnum('projectStatus', PROJECT_STATUS);

export const CodeProjectTable = pgTable('codeProject', {
	id: uuid('id').primaryKey().defaultRandom(),
	name: text('name').notNull(),
	description: text('description').notNull(),
	reason: text('reason').notNull(),
	techStack: text('techStack').notNull(),
	creationDate: date('creationDate').notNull(),
	finishDate: date('finishDate'),
	image: text('image').notNull(),
	githubLink: text('githubLink'),
	activeLink: text('activeLink'),
	category: projectCategoryEnum('category').notNull(),
	status: projectStatusEnum('status').notNull(),
	createdAt: timestamp('createdAt').notNull().defaultNow(),
	updatedAt: timestamp('updatedAt', { withTimezone: true })
		.notNull()
		.defaultNow()
		.$onUpdate(() => new Date()),
});
