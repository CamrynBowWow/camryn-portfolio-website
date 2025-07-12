'use client';

import { Button } from '@/components/ui/button';
import { formatDateTimeStamp } from '@/lib/formatters';
import { Job } from '@/types';
import { ColumnDef } from '@tanstack/react-table';
import { Edit } from 'lucide-react';
import Link from 'next/link';
import TooltipWrapper from '@/components/TooltipWrapper';
import DeleteJobDialog from './DeleteJobDialog';

export const jobColumns: ColumnDef<Job>[] = [
	{
		accessorKey: 'id',
	},
	{
		accessorKey: 'jobTitle',
		header: 'Job Title',
	},
	{
		accessorKey: 'company',
		header: 'Company',
	},
	{
		accessorKey: 'startedDate',
		header: 'Start Date',
		cell: ({ row }) => <p>{row.getValue('startedDate')}</p>,
	},
	{
		accessorKey: 'endedDate',
		header: 'End Date',
		cell: ({ row }) => <p>{row.getValue('endedDate') ?? 'Currently At'}</p>,
	},
	{
		accessorKey: 'createdAt',
		header: 'DB Inserted',
		cell: ({ row }) => <p>{formatDateTimeStamp(row.getValue('createdAt'))}</p>,
	},
	{
		accessorKey: 'updatedAt',
		header: 'DB Updated',
		cell: ({ row }) => <p>{formatDateTimeStamp(row.getValue('updatedAt'))}</p>,
	},
	{
		accessorKey: 'deleteEdit',
		header: '',
		cell: ({ row }) => (
			<div className='flex gap-3 justify-center'>
				<DeleteJobDialog id={row.getValue('id')} />

				<TooltipWrapper description='Edit Job' delayDuration={200}>
					<Button size='sm' variant='secondary' asChild>
						<Link href={`/NoNoShouldNotBeOnPage/jobHistory/${row.getValue('id')}/edit`}>
							<Edit />
						</Link>
					</Button>
				</TooltipWrapper>
			</div>
		),
	},
];
