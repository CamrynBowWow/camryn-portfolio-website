'use client';

import { Form } from '@/components/ui/form';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import CustomFormField, { FormFieldType } from '@/components/CustomFormField';
import { useToast } from '@/hooks/use-toast';
import { redirect } from 'next/navigation';
import { Job } from '@/types';
import { jobFormSchema } from '@/schema/job';
import { addJob, updateJob } from '@/server/actions/jobs';

type JobFormProps = {
	jobData?: Job;
};

export default function JobForm({ jobData }: JobFormProps) {
	const { toast } = useToast();

	const form = useForm<z.infer<typeof jobFormSchema>>({
		resolver: zodResolver(jobFormSchema),
		defaultValues: {
			jobTitle: jobData?.jobTitle ?? '',
			company: jobData?.company ?? '',
			techStack: jobData?.techStack ?? '',
			jobDuties: jobData?.jobDuties ?? '',
			startedDate: jobData?.startedDate ? new Date(jobData.startedDate) : new Date(),
			endedDate: jobData?.endedDate ? new Date(jobData.endedDate) : new Date(),
		},
	});

	async function onSubmit(values: z.infer<typeof jobFormSchema>) {
		const action = jobData == null ? addJob : updateJob.bind(null, jobData.id);

		const data = await action(values);

		if (data?.error) {
			form.setError('root', {
				message:
					jobData == null
						? 'There was an error Adding the Job History'
						: 'There was an error updating the Job History',
			});
		} else {
			toast({
				variant: 'default',
				title:
					jobData == null ? 'Added Job History Successfully!' : 'Job History Updated Successfully!',
			});
			redirect('/NoNoShouldNotBeOnPage');
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-8 sm:gap-6'>
				<div className='flex flex-col md:flex-row gap-5'>
					<CustomFormField
						fieldType={FormFieldType.INPUT}
						control={form.control}
						name='jobTitle'
						label='Job Title'
						formItemStyling='flex-1'
					/>
					<CustomFormField
						fieldType={FormFieldType.INPUT}
						control={form.control}
						name='company'
						label='Company Worked At/Worked For'
						formItemStyling='flex-1'
					/>
				</div>

				<CustomFormField
					fieldType={FormFieldType.TEXTAREA}
					control={form.control}
					name='jobDuties'
					label='Job Duties'
					formDescription='What was your role and what actions or duties did you prefer at your work place. It is also possible to use normal HTML to style the text. Also make sure to use <br> twice when separating paragraphs, but only once after </ul> tag. Styling is done to <h3>, <b>, <ul> tags when displayed on Project Page. For lists use <ul> and <li> tags. For headers use <h3> tags.'
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

				<div className='flex flex-col sm:flex-row gap-6 sm:gap-10'>
					<CustomFormField
						fieldType={FormFieldType.DATE_PICKER}
						control={form.control}
						name='startedDate'
						label='Company Start Date'
						formItemStyling='flex-1'
					/>
					<CustomFormField
						fieldType={FormFieldType.DATE_PICKER}
						control={form.control}
						name='endedDate'
						label='Company End Date'
						formItemStyling='flex-1'
						datePickerEmpty={true}
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
						{form.formState.isSubmitting ? 'Submitting...' : jobData ? 'Update' : 'Add'}
					</Button>
				</div>
			</form>
		</Form>
	);
}
