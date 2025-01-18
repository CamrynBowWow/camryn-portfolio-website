'use client';

/* eslint-disable  @typescript-eslint/no-explicit-any */

import { Form, FormControl } from '@/components/ui/form';
import { projectFormSchema } from '@/schema/project';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import FileUploader from '@/components/FileUploader';
import Link from 'next/link';
import { SelectItem } from '@/components/ui/select';
import { PROJECT_CATEGORY, PROJECT_STATUS } from '@/data/constants';
import CustomFormField, { FormFieldType } from '@/components/CustomFormField';
import { addProject, updateProject } from '@/server/actions/project';
import { useToast } from '@/hooks/use-toast';
import { redirect } from 'next/navigation';
import { ProjectContent } from '@/types';

type ProjectFormProps = {
	projectData?: ProjectContent;
};

export default function ProjectForm({ projectData }: ProjectFormProps) {
	const { toast } = useToast();

	const form = useForm<z.infer<typeof projectFormSchema>>({
		resolver: zodResolver(projectFormSchema),
		defaultValues: {
			name: projectData?.name ?? '',
			description: projectData?.description ?? '',
			reason: projectData?.reason ?? '',
			techStack: projectData?.techStack ?? '',
			creationDate: projectData?.creationDate ? new Date(projectData.creationDate) : new Date(),
			finishDate: projectData?.finishDate ? new Date(projectData.finishDate) : new Date(),
			image: projectData?.image ?? '',
			githubLink: projectData?.githubLink ?? '',
			activeLink: projectData?.activeLink ?? '',
			category: projectData?.category ?? PROJECT_CATEGORY[0],
			status: projectData?.status ?? PROJECT_STATUS[0],
		},
	});

	async function onSubmit(values: z.infer<typeof projectFormSchema>) {
		const action = projectData == null ? addProject : updateProject.bind(null, projectData.id);

		const data = await action(values);

		if (data?.error) {
			form.setError('root', {
				message:
					projectData == null
						? 'There was an error Adding the Project'
						: 'There was an error updating the Project',
			});
		} else {
			toast({
				variant: 'default',
				title:
					projectData == null ? 'Added Project Successfully!' : 'Project Updated Successfully!',
			});
			redirect('/NoNoShouldNotBeOnPage');
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-8 sm:gap-6'>
				<CustomFormField
					fieldType={FormFieldType.INPUT}
					control={form.control}
					name='name'
					label='Project Name'
				/>
				<CustomFormField
					fieldType={FormFieldType.TEXTAREA}
					control={form.control}
					name='description'
					label='Project Description'
					formDescription='What the project is used for and what features it does. It is also possible to use normal HTML to style the text. Also make sure to use <br> twice when separating paragraphs.'
				/>

				<div className='flex flex-col md:flex-row gap-5'>
					<CustomFormField
						fieldType={FormFieldType.TEXTAREA}
						control={form.control}
						name='reason'
						label='Project Reason'
						formItemStyling='flex-1'
					/>
					<CustomFormField
						fieldType={FormFieldType.TEXTAREA}
						control={form.control}
						name='techStack'
						label='Tech Stack Used'
						formItemStyling='flex-1'
						formDescription={
							<>
								Separate each tech with <span className='font-bold'>&#39; , &#39;</span> / comma
							</>
						}
					/>
				</div>

				<div className='flex flex-col sm:flex-row gap-6 sm:gap-10'>
					<CustomFormField
						fieldType={FormFieldType.DATE_PICKER}
						control={form.control}
						name='creationDate'
						label='Project Creation Date'
						formItemStyling='flex-1'
					/>
					<CustomFormField
						fieldType={FormFieldType.DATE_PICKER}
						control={form.control}
						name='finishDate'
						label='Project Finished Date'
						formItemStyling='flex-1'
					/>
				</div>

				<div>
					<CustomFormField
						fieldType={FormFieldType.SKELETON}
						control={form.control}
						name='image'
						label='Project Front Page Image'
						renderSkeleton={(field: any) => (
							<FormControl>
								<FileUploader files={field.value} onChange={field.onChange} />
							</FormControl>
						)}
					/>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-6'>
					<CustomFormField
						fieldType={FormFieldType.SELECT}
						control={form.control}
						name='category'
						label='Project Category'
						placeholder='Select Project Category'
						formDescription={
							<>
								Used to show if project was <span className='font-semibold'>Personal</span> or from
								doing a <span className='font-semibold'>Tutorial</span> video.
							</>
						}
					>
						{PROJECT_CATEGORY.map((value) => (
							<SelectItem value={value} key={value}>
								{value}
							</SelectItem>
						))}
					</CustomFormField>

					<CustomFormField
						fieldType={FormFieldType.SELECT}
						control={form.control}
						name='status'
						label='Project Status'
						placeholder='Select Project Status'
						formDescription='Used to show at what state the Project is in.'
					>
						{PROJECT_STATUS.map((value) => (
							<SelectItem value={value} key={value}>
								{value}
							</SelectItem>
						))}
					</CustomFormField>

					<CustomFormField
						fieldType={FormFieldType.INPUT}
						control={form.control}
						name='githubLink'
						label='Link to Project on GitHub'
					/>
					<CustomFormField
						fieldType={FormFieldType.INPUT}
						control={form.control}
						name='activeLink'
						label='Link to Live Active Project'
					/>
				</div>

				<div className='flex justify-end gap-5'>
					<Button
						variant='outline'
						className='duration-700 hover:bg-gray-300'
						disabled={form.formState.isSubmitting}
						asChild
					>
						<Link href='/NoNoShouldNotBeOnPage'>Cancel</Link>
					</Button>
					<Button variant='success' disabled={form.formState.isSubmitting} type='submit'>
						{form.formState.isSubmitting ? 'Submitting...' : projectData ? 'Update' : 'Add'}
					</Button>
				</div>
			</form>
		</Form>
	);
}
