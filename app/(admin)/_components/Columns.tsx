'use client';

import { Button } from '@/components/ui/button';
import { formatDateMedium } from '@/lib/formatters';
import { ProjectContent } from '@/types';
import { ColumnDef } from '@tanstack/react-table';
import { Edit, Trash2 } from 'lucide-react';
import Link from 'next/link';

export const columns: ColumnDef<ProjectContent>[] = [
	{
		accessorKey: 'name',
		header: 'Project Name',
	},
	{
		accessorKey: 'githubLink',
		header: 'Github Link',
		cell: ({ row }) =>
			row.getValue('githubLink') && (
				<Link href={row.getValue('githubLink')}>{row.getValue('name')}</Link>
			),
	},
	{
		accessorKey: 'activeLink',
		header: 'Link To Live Project',
		cell: ({ row }) =>
			row.getValue('githubLink') && (
				<Link href={row.getValue('activeLink')}>Live Project Link</Link>
			),
	},
	{
		accessorKey: 'category',
		header: 'Category',
	},
	{
		accessorKey: 'status',
		header: 'Status',
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
				<Button size='sm' variant='destructive'>
					<Trash2 />
				</Button>
				<Button size='sm' variant='secondary' asChild>
					<Link href='/NoNoShouldNotBeOnPage/edit'>
						<Edit />
					</Link>
				</Button>
			</div>
		),
	},
];
