'use client';

import { Button } from '@/components/ui/button';
import { formatDateMedium } from '@/lib/formatters';
import { ProjectContent } from '@/types';
import { ColumnDef } from '@tanstack/react-table';
import { Edit } from 'lucide-react';
import { ArrowUpDown } from 'lucide-react';
import Link from 'next/link';
import DeleteDialog from './DeleteDialog';

export const columns: ColumnDef<ProjectContent>[] = [
	{
		accessorKey: 'id',
	},
	{
		accessorKey: 'name',
		header: 'Project Name',
	},
	{
		accessorKey: 'githubLink',
		header: 'Github Link',
		cell: ({ row }) =>
			row.getValue('githubLink') && (
				<Link
					className='underline-offset-[5px] underline text-sky-400 hover:text-purple-500 duration-300'
					href={row.getValue('githubLink')}
				>
					{row.getValue('name')}
				</Link>
			),
	},
	{
		accessorKey: 'activeLink',
		header: 'Link To Live Project',
		cell: ({ row }) =>
			row.getValue('githubLink') && (
				<Link
					className='underline-offset-[5px] underline text-sky-400 hover:text-purple-500 duration-300'
					href={row.getValue('activeLink')}
				>
					Live Project Link
				</Link>
			),
	},
	{
		accessorKey: 'category',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					className='hover:bg-sky-100/50 duration-300 text-xs md:text-sm [&_svg]:size-3 md:[&_svg]:size-4'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Category
					<ArrowUpDown className='ml-2 h-4 w-4' />
				</Button>
			);
		},
		cell: ({ row }) => <p className='capitalize'>{row.getValue('category')}</p>,
	},
	{
		accessorKey: 'status',
		header: 'Status',
		cell: ({ row }) => <p className='capitalize'>{row.getValue('status')}</p>,
	},
	{
		accessorKey: 'createdAt',
		header: 'DB Inserted',
		cell: ({ row }) => <p>{formatDateMedium(row.getValue('createdAt'))}</p>,
	},
	{
		accessorKey: 'updatedAt',
		header: 'DB Updated',
		cell: ({ row }) => <p>{formatDateMedium(row.getValue('updatedAt'))}</p>,
	},
	{
		accessorKey: 'deleteEdit',
		header: '',
		cell: ({ row }) => (
			<div className='flex gap-3 justify-center'>
				<DeleteDialog id={row.getValue('id')} />
				<Button size='sm' variant='secondary' asChild>
					<Link href={`/NoNoShouldNotBeOnPage/${row.getValue('id')}/edit`}>
						<Edit />
					</Link>
				</Button>
			</div>
		),
	},
];
