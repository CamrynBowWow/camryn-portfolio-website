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

export function makeIOSLocalTimeStamp() {
	// const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	// console.log(timeZone, 'yes');
	// console.log(new Date().getTimezoneOffset(), 'here');

	const timezoneOffset = new Date().getTimezoneOffset();
	return new Date(new Date().getTime() - timezoneOffset * 60 * 1000);

	// const result = getTimezoneOffset('Africa/Johannesburg', new Date());

	// return new Date(new Date().getTime() + result);
}

export function makeIOSLocalDateString(date: Date | undefined) {
	if (date === undefined) {
		return '';
	}

	const newDate = formatInTimeZone(date, 'Africa/Johannesburg', 'yyyy-MM-dd');
	return newDate;
}
