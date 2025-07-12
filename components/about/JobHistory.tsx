import { db } from '@/drizzle/db';
import { JobContent } from '@/types';
import JobCard from './JobCard';

export default async function JobHistory() {
	const data: JobContent[] = await db.query.JobHistoryTable.findMany();

	if (!data || data.length === 0) {
		return null;
	}

	return (
		<div className='flex flex-col gap-8 w-full max-w-5xl'>
			{data.map((value, index) => (
				<JobCard key={index} jobData={value} />
			))}
		</div>
	);
}
