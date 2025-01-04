'use server';

import { db } from '@/drizzle/db';
import { CodeProjectTable } from '@/drizzle/schema';
import { projectFormSchema } from '@/schema/project';
import { z } from 'zod';

export async function addProject(
	unsafeData: z.infer<typeof projectFormSchema>
): Promise<{ error: boolean } | undefined> {
	const { success, data } = projectFormSchema.safeParse(unsafeData);

	if (!success) {
		return { error: true };
	}

	await db.insert(CodeProjectTable).values({
		name: data.name,
		description: data.description,
		reason: data.reason,
		techStack: data.techStack,
		creationDate: data.creationDate.toISOString(),
		finishDate: data.finishDate?.toISOString(),
		image: data.image,
		githubLink: data.githubLink,
		activeLink: data.activeLink,
		category: data.category,
		status: data.status,
	});
}
