'use server';

import { db } from '@/drizzle/db';
import { CodeProjectTable } from '@/drizzle/schema';
import { makeIOSLocalDateString } from '@/lib/utils';
import { projectFormSchema } from '@/schema/project';
import { eq } from 'drizzle-orm';
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
		creationDate: makeIOSLocalDateString(data.creationDate),
		finishDate: data.finishDate?.toISOString(),
		image: data.image,
		githubLink: data.githubLink,
		activeLink: data.activeLink,
		category: data.category,
		status: data.status,
	});
}

export async function updateProject(
	id: string,
	unsafeData: z.infer<typeof projectFormSchema>
): Promise<{ error: boolean } | undefined> {
	const { success, data } = projectFormSchema.safeParse(unsafeData);

	if (!success || id == null) {
		return { error: true };
	}

	const { rowCount } = await db
		.update(CodeProjectTable)
		.set({
			name: data.name,
			description: data.description,
			reason: data.reason,
			techStack: data.techStack,
			creationDate: data.creationDate.toLocaleDateString(),
			finishDate: data.finishDate?.toLocaleDateString(),
			image: data.image,
			githubLink: data.githubLink,
			activeLink: data.activeLink,
			category: data.category,
			status: data.status,
		})
		.where(eq(CodeProjectTable.id, id));

	if (rowCount === 0) {
		return { error: true };
	}
}

export async function deleteProject(id: string): Promise<{ error: boolean } | undefined> {
	if (id == null) {
		return { error: true };
	}

	await db.delete(CodeProjectTable).where(eq(CodeProjectTable.id, id));
}
