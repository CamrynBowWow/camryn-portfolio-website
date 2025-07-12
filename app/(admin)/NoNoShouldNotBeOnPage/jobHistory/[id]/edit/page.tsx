'use server';

import JobForm from '../../_components/JobForm';
import { db } from '@/drizzle/db';

type JobPageParams = Promise<{ id: string }>;

const JobEditPage = async ({ params }: { params: JobPageParams }) => {
	const { id } = await params;

	const jobData = await db.query.JobHistoryTable.findFirst({
		where: ({ id: jobId }, { eq }) => eq(jobId, id),
	});

	return (
		<div className='w-full'>
			<JobForm jobData={jobData} />
		</div>
	);
};

export default JobEditPage;
