import TooltipWrapper from '@/components/TooltipWrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import { JobDataTable } from './jobDataTable';
import { jobColumns } from './jobColumns';
import { db } from '@/drizzle/db';

const JobSection = async () => {
	const data = await db.query.JobHistoryTable.findMany();

	return (
		<section className='py-10 flex flex-col gap-3 x-sm:gap-4'>
			<div className='admin-title-container'>
				<h2 className='admin-h2'>Job Table</h2>
				<TooltipWrapper description='Add New Job'>
					<Button asChild>
						<Link href='NoNoShouldNotBeOnPage/jobHistory/add'>Add Job</Link>
					</Button>
				</TooltipWrapper>
			</div>

			<JobDataTable columns={jobColumns} data={data} />
		</section>
	);
};

export default JobSection;
