'use client';

import TooltipWrapper from '@/components/TooltipWrapper';
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { deleteProject } from '@/server/actions/project';
import { Trash2 } from 'lucide-react';

export default function DeleteProjectDialog({ id }: { id: string }) {
	const { toast } = useToast();

	async function onDelete(id: string) {
		const data = await deleteProject(id);

		if (data?.error) {
			toast({
				variant: 'destructive',
				title: 'An Error has occurred while deleting the project.',
			});
		} else {
			toast({
				variant: 'default',
				title: 'Project was successfully deleted.',
			});
		}
	}

	return (
		<AlertDialog>
			<TooltipWrapper description='Delete Project' delayDuration={200}>
				<AlertDialogTrigger asChild>
					<Button size='sm' variant='destructive'>
						<Trash2 />
					</Button>
				</AlertDialogTrigger>
			</TooltipWrapper>
			<AlertDialogContent>
				<AlertDialogTitle>Delete Project</AlertDialogTitle>
				<AlertDialogDescription>
					Are you sure you want to delete this project? This action cannot be undone.
				</AlertDialogDescription>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction variant='destructive' onClick={async () => onDelete(id)}>
						Delete
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
