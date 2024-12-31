'use client';

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
} from '@/components/ui/form';
import { projectFormSchema } from '@/schema/project';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { CalendarIcon } from 'lucide-react';
import FileUploader from '@/components/FileUploader';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { PROJECT_CATEGORY, PROJECT_STATUS } from '@/data/constants';

export default function ProjectForm() {
	const form = useForm<z.infer<typeof projectFormSchema>>({
		resolver: zodResolver(projectFormSchema),
	});

	return (
		<Form {...form}>
			<form className='flex flex-col gap-8 sm:gap-6'>
				<FormField
					control={form.control}
					name='name'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Project Name</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='description'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Project Description</FormLabel>
							<FormControl>
								<Textarea {...field} />
							</FormControl>
							<FormDescription className='form-description-mobile'>
								What the project is used for and what features it does.
							</FormDescription>
						</FormItem>
					)}
				/>

				<div className='flex flex-col md:flex-row gap-5'>
					<FormField
						control={form.control}
						name='reason'
						render={({ field }) => (
							<FormItem className='flex-1'>
								<FormLabel className='text-sm'>Project Reason</FormLabel>
								<FormControl>
									<Textarea {...field} />
								</FormControl>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='techStack'
						render={({ field }) => (
							<FormItem className='flex-1'>
								<FormLabel>Tech Stack Used</FormLabel>
								<FormControl>
									<Textarea {...field} />
								</FormControl>
								<FormDescription className='form-description-mobile'>
									Separate each tech with <span className='font-semibold'>' , '</span> / comma
								</FormDescription>
							</FormItem>
						)}
					/>
				</div>

				<div className='flex flex-col sm:flex-row gap-6 sm:gap-10'>
					<FormField
						control={form.control}
						name='creationDate'
						render={({ field }) => (
							<Popover>
								<FormItem className='flex-1'>
									<FormLabel>Project Creation Date</FormLabel>
									<PopoverTrigger asChild>
										<FormControl>
											<Button
												variant='outline'
												className={cn(
													'pl-3 font-normal flex w-full',
													!field.value && 'text-muted-foreground'
												)}
											>
												{<span>Pick a date</span>}
												<CalendarIcon />
											</Button>
										</FormControl>
									</PopoverTrigger>
									<PopoverContent className='w-auto' align='center'>
										<Calendar
											mode='single'
											selected={field.value}
											onSelect={field.onChange}
											initialFocus
										/>
									</PopoverContent>
								</FormItem>
							</Popover>
						)}
					/>
					<FormField
						control={form.control}
						name='finishDate'
						render={({ field }) => (
							<Popover>
								<FormItem className='flex-1'>
									<FormLabel>Project Finished Date</FormLabel>
									<PopoverTrigger asChild>
										<FormControl>
											<Button
												variant='outline'
												className={cn(
													'pl-3 font-normal flex w-full',
													!field.value && 'text-muted-foreground'
												)}
											>
												{<span>Pick a date</span>}
												<CalendarIcon />
											</Button>
										</FormControl>
									</PopoverTrigger>
									<PopoverContent>
										<Calendar
											mode='single'
											selected={field.value}
											onSelect={field.onChange}
											initialFocus
										/>
									</PopoverContent>
								</FormItem>
							</Popover>
						)}
					/>
				</div>

				<div>
					<FormField
						control={form.control}
						name='image'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Project Front Page Image</FormLabel>
								<FormControl>
									<FileUploader files={field.value} onChange={field.onChange} />
								</FormControl>
							</FormItem>
						)}
					/>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-6'>
					<FormField
						control={form.control}
						name='category'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Project Category</FormLabel>
								<FormControl>
									<Select onValueChange={field.onChange} defaultValue={field.value}>
										<FormControl>
											<SelectTrigger className='capitalize'>
												<SelectValue placeholder='Select Project Category' />
											</SelectTrigger>
										</FormControl>
										<SelectContent className='capitalize'>
											{PROJECT_CATEGORY.map((value) => (
												<SelectItem value={value} key={value}>
													{value}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</FormControl>
								<FormDescription className='form-description-mobile'>
									Used to show if project was <span className='font-semibold'>Personal</span> or
									from doing a <span className='font-semibold'>Tutorial</span> video.
								</FormDescription>
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='status'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Project Status</FormLabel>
								<FormControl>
									<Select onValueChange={field.onChange} defaultValue={field.value}>
										<FormControl>
											<SelectTrigger className='capitalize'>
												<SelectValue placeholder='Select Project Status' />
											</SelectTrigger>
										</FormControl>
										<SelectContent className='capitalize'>
											{PROJECT_STATUS.map((value) => (
												<SelectItem value={value} key={value}>
													{value}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</FormControl>
								<FormDescription className='form-description-mobile'>
									Used to show at what state the Project is in.
								</FormDescription>
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='githubLink'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Link to Project on GitHub</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='activeLink'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Link to Live Active Project</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
							</FormItem>
						)}
					/>
				</div>

				<div className='flex justify-end gap-5'>
					<Button variant='outline' className='duration-700 hover:bg-gray-300' asChild>
						<Link href='/NoNoShouldNotBeOnPage'>Cancel</Link>
					</Button>
					<Button variant='success' asChild>
						<Link href='/NoNoShouldNotBeOnPage'>Add</Link>
					</Button>
				</div>
			</form>
		</Form>
	);
}
