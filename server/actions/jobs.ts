'use server';

import { db } from '@/drizzle/db';
import { JobHistoryTable } from '@/drizzle/schema';
import { makeIOSLocalDateString } from '@/lib/utils';
import { jobFormSchema } from '@/schema/job';
import { eq } from 'drizzle-orm';
import { z } from 'zod';

export async function addJob(
	unsafeData: z.infer<typeof jobFormSchema>
): Promise<{ error: boolean } | undefined> {
	const { success, data } = jobFormSchema.safeParse(unsafeData);

	if (!success) {
		return { error: true };
	}

	await db.insert(JobHistoryTable).values({
		jobTitle: data.jobTitle,
		company: data.company,
		techStack: data.techStack,
		jobDuties: data.jobDuties,
		startedDate: makeIOSLocalDateString(data.startedDate),
		endedDate: data.endedDate === '' ? null : makeIOSLocalDateString(data.endedDate),
	});
}

export async function updateJob(
	id: string,
	unsafeData: z.infer<typeof jobFormSchema>
): Promise<{ error: boolean } | undefined> {
	const { success, data } = jobFormSchema.safeParse(unsafeData);

	if (!success || id == null) {
		return { error: true };
	}

	const { rowCount } = await db
		.update(JobHistoryTable)
		.set({
			jobTitle: data.jobTitle,
			company: data.company,
			techStack: data.techStack,
			jobDuties: data.jobDuties,
			startedDate: makeIOSLocalDateString(data.startedDate!),
			endedDate: data.endedDate === '' ? null : makeIOSLocalDateString(data.endedDate),
		})
		.where(eq(JobHistoryTable.id, id));

	if (rowCount === 0) {
		return { error: true };
	}
}

export async function deleteJob(id: string): Promise<{ error: boolean } | undefined> {
	if (id == null) {
		return { error: true };
	}

	await db.delete(JobHistoryTable).where(eq(JobHistoryTable.id, id));
}
