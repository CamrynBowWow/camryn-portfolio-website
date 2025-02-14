'use client';

/* eslint-disable  @typescript-eslint/no-explicit-any */

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Control } from 'react-hook-form';
import { DATE_SEARCH, PROJECT_CATEGORY_SEARCH, PROJECT_STATUS_SEARCH } from '@/data/constants';

type SearchTypeString =
	| typeof PROJECT_CATEGORY_SEARCH
	| typeof PROJECT_STATUS_SEARCH
	| typeof DATE_SEARCH;

interface CustomSearchSelectProps {
	control: Control<any>;
	name: string;
	label?: string;

	array: SearchTypeString;
}

export default function CustomSearchSelect({
	control,
	name,
	label,

	array,
}: CustomSearchSelectProps) {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className='flex flex-col gap-1 lg:gap-2 items-start space-y-0'>
					<FormLabel className='ml-[3px] text-pretty text-[14px] 2xl:text-[14px] font-normal tracking-tight text-gray-600'>
						{label}
					</FormLabel>

					<Select onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
						<FormControl>
							<SelectTrigger className='capitalize w-[135px] 2xl:w-[170px] text-xs 2xl:text-[14px] gap-2 h-8 pr-1 pl-2 2xl:py-4'>
								<SelectValue />
							</SelectTrigger>
						</FormControl>
						<SelectContent className='capitalize'>
							{array.map((value) => (
								<SelectItem className='text-xs 2xl:text-[14px]' value={value} key={value}>
									{value}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</FormItem>
			)}
		/>
	);
}
