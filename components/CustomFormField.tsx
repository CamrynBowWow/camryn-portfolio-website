// Maybe use

import { Control } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import Image from 'next/image';
import { Input } from './ui/input';

export enum FormFieldType {
	INPUT = 'input',
	TEXTAREA = 'textarea',
	PHONE_INPUT = ' phoneInput',
	CHECKBOX = 'checkbox',
	DATE_PICKER = 'datePicker',
	SELECT = 'select',
	SKELETON = 'skeleton',
}

interface CustomProps {
	control: Control<any>;
	fieldType: FormFieldType;
	name: string;
	label?: string;
	placeHolder?: string;
	iconSrc?: string;
	iconAlt?: string;
	disabled?: boolean;
	children?: React.ReactNode;
	renderSkeleton?: (field: unknown) => React.ReactNode;
}

export default function CustomFormField(props: CustomProps) {
	const { control, fieldType, name, label } = props;

	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className='flex-1'>
					{fieldType !== FormFieldType.CHECKBOX && label && <FormLabel>{label}</FormLabel>}

					<RenderInput field={field} props={props} />

					<FormMessage className='shad-error' />
				</FormItem>
			)}
		/>
	);
}

function RenderInput({ field, props }: { field: any; props: CustomProps }) {
	const { fieldType, iconSrc, iconAlt, placeholder, showTimeSelect, dateFormat, renderSkeleton } =
		props;

	switch (fieldType) {
		case FormFieldType.INPUT:
			return (
				<div>
					{iconSrc && (
						<Image src={iconSrc} height={24} width={24} alt={iconAlt || 'icon'} className='ml-2' />
					)}

					<FormControl>
						<Input placeholder={placeholder} {...field} />
					</FormControl>
				</div>
			);

		default:
			return null;
	}
}
