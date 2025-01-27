'use client';

/* eslint-disable  @typescript-eslint/no-explicit-any */

import { Control } from 'react-hook-form';
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Button } from './ui/button';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Calendar } from './ui/calendar';
import { formatDateLong } from '@/lib/formatters';
import { Select, SelectContent, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { useState } from 'react';

export enum FormFieldType {
	INPUT = 'input',
	TEXTAREA = 'textarea',
	DATE_PICKER = 'datePicker',
	SELECT = 'select',
	SKELETON = 'skeleton',
}

interface CustomProps {
	control: Control<any>;
	fieldType: FormFieldType;
	name: string;
	label?: string;
	placeholder?: string;
	formItemStyling?: string;
	formDescription?: string | React.ReactNode;
	datePickerEmpty?: boolean;
	children?: React.ReactNode;
	renderSkeleton?: (field: unknown) => React.ReactNode;
}

export default function CustomFormField(props: CustomProps) {
	const { control, fieldType, name, label, formDescription, formItemStyling } = props;

	return fieldType === FormFieldType.DATE_PICKER ? (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<Popover>
					<FormItem className={formItemStyling}>
						<RenderInput field={field} props={props} />
						<FormMessage className='text-red-400' />
					</FormItem>
				</Popover>
			)}
		/>
	) : (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className={formItemStyling}>
					<FormLabel>{label}</FormLabel>

					<RenderInput field={field} props={props} />

					<FormMessage className='text-red-400' />

					{formDescription && (
						<FormDescription className='form-description-mobile'>{formDescription}</FormDescription>
					)}
				</FormItem>
			)}
		/>
	);
}

function RenderInput({ field, props }: { field: any; props: CustomProps }) {
	const { fieldType, label, placeholder, renderSkeleton, datePickerEmpty } = props;

	const [isCheckboxChecked, setIsCheckboxChecked] = useState<boolean>(false);

	switch (fieldType) {
		case FormFieldType.INPUT:
			return (
				<FormControl>
					<Input placeholder={placeholder} {...field} value={field.value || ''} />
				</FormControl>
			);
		case FormFieldType.TEXTAREA:
			return (
				<FormControl>
					<Textarea placeholder={placeholder} {...field} />
				</FormControl>
			);
		case FormFieldType.DATE_PICKER:
			return (
				<>
					<FormLabel>{label}</FormLabel>
					<PopoverTrigger asChild>
						<FormControl>
							<Button
								variant='outline'
								className={cn(
									'pl-3 font-normal flex w-full',
									!field.value && 'text-muted-foreground'
								)}
							>
								{field.value ? formatDateLong(field.value) : <span>Pick Date</span>}

								<CalendarIcon />
							</Button>
						</FormControl>
					</PopoverTrigger>
					<PopoverContent className='w-auto' align='center'>
						<Calendar
							mode='single'
							selected={field.value}
							onSelect={(date) => {
								setIsCheckboxChecked(false);
								field.onChange(date);
							}}
							initialFocus
						/>
					</PopoverContent>
					{datePickerEmpty && (
						<div className='flex items-center space-x-2 pl-[2px] pt-1'>
							<Checkbox
								id='emptyDate'
								checked={isCheckboxChecked}
								onCheckedChange={(checked) => {
									const isChecked = checked === true;
									setIsCheckboxChecked(isChecked);
									const newValue = isChecked ? '' : new Date();
									field.onChange(newValue);
								}}
							/>
							<label htmlFor='emptyDate' className='form-description-mobile'>
								If there is no finish date.
							</label>
						</div>
					)}
				</>
			);
		case FormFieldType.SKELETON:
			return renderSkeleton ? renderSkeleton(field) : null;
		case FormFieldType.SELECT:
			return (
				<>
					<Select onValueChange={field.onChange} defaultValue={field.value}>
						<FormControl>
							<SelectTrigger className='capitalize'>
								<SelectValue placeholder={placeholder} />
							</SelectTrigger>
						</FormControl>
						<SelectContent className='capitalize'>{props.children}</SelectContent>
					</Select>
				</>
			);
		default:
			return null;
	}
}
