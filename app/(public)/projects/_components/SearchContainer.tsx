'use client';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { DATE_SEARCH, PROJECT_CATEGORY_SEARCH, PROJECT_STATUS_SEARCH } from '@/data/constants';
import { searchSchema } from '@/schema/search';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import CustomSearchSelect from './CustomSearchSelect';

type SearchContainerProps = {
	handleFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	applyFormFilters: (filters: { category: string; status: string; dateOrder: string }) => void;
};

export default function SearchContainer({
	handleFilterChange,
	applyFormFilters,
}: SearchContainerProps) {
	const form = useForm<z.infer<typeof searchSchema>>({
		resolver: zodResolver(searchSchema),
		defaultValues: {
			category: 'all',
			status: 'all',
			dateOrder: 'newest',
		},
	});

	async function onSubmit() {
		const values: z.infer<typeof searchSchema> = form.getValues();

		applyFormFilters({
			category: values.category as string,
			status: values.status as string,
			dateOrder: values.dateOrder as string,
		});
	}

	async function onReset() {
		form.reset({
			category: 'all',
			status: 'all',
			dateOrder: 'newest',
		});

		applyFormFilters({
			category: 'all',
			status: 'all',
			dateOrder: 'newest',
		});
	}

	return (
		<div className='pb-16 lg:pb-12 flex lg:flex-row flex-col justify-between lg:items-end items-start gap-6 x-sm:gap-8'>
			<Input
				placeholder='Search by Project Name...'
				className='max-w-xs text-xs px-2 md:px-3'
				onChange={handleFilterChange}
			/>

			<Form {...form}>
				<form
					onChange={form.handleSubmit(onSubmit)}
					onSubmit={form.handleSubmit(onReset)}
					className='flex justify-center x-sm:justify-start items-end gap-6 flex-wrap md:flex-nowrap'
				>
					<CustomSearchSelect
						control={form.control}
						name='category'
						label='Project Category'
						array={PROJECT_CATEGORY_SEARCH}
					/>

					<CustomSearchSelect
						control={form.control}
						name='status'
						label='Project Status'
						array={PROJECT_STATUS_SEARCH}
					/>

					<CustomSearchSelect
						control={form.control}
						name='dateOrder'
						label='Order By'
						array={DATE_SEARCH}
					/>

					<div className='ml-0 lg:ml-3 flex items-center w-[135px] lg:w-auto x-sm:justify-start justify-end'>
						<Button
							variant='default'
							disabled={form.formState.isSubmitting}
							size='sm'
							type='submit'
						>
							Reset
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
}
