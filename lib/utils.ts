import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function convertFileToBase64(file: File): Promise<string> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();

		reader.onloadend = () => {
			resolve(reader.result as string);
		};

		reader.onerror = reject;

		reader.readAsDataURL(file);
	});
}

export function makeIOSLocalDateString(date: Date | undefined | string) {
	if (date === '' || date === undefined) {
		return '';
	}

	return new Date(date).toLocaleDateString('en-ZA', {
		timeZone: 'Africa/Johannesburg',
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
	});
}
