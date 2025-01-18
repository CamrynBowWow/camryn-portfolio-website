import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { formatInTimeZone } from 'date-fns-tz';

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

// Needs fixing when I move to another country
export function makeIOSLocalTimeStamp() {
	// Africa/Johannesburg is UTC+2, so the offset in minutes is 2 * 60
	const johannesburgOffset = 2 * 60; // UTC+2 in minutes

	return new Date(new Date().getTime() + johannesburgOffset * 60 * 1000);
}

export function makeIOSLocalDateString(date: Date | undefined) {
	if (date === undefined) {
		return '';
	}

	const newDate = formatInTimeZone(date, 'Africa/Johannesburg', 'yyyy-MM-dd');
	return newDate;
}
