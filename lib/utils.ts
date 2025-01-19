import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { formatInTimeZone, getTimezoneOffset } from 'date-fns-tz';

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

export function makeIOSLocalTimeStamp() {
	const result = getTimezoneOffset('Africa/Johannesburg');

	return new Date(new Date().getTime() + result);
}

export function makeIOSLocalDateString(date: Date | undefined) {
	if (date === undefined) {
		return '';
	}

	const newDate = formatInTimeZone(date, 'Africa/Johannesburg', 'yyyy-MM-dd');
	return newDate;
}
