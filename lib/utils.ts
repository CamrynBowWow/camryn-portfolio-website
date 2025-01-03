import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

export const convertFileToBase64 = (file: File): Promise<string> => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();

		reader.onloadend = () => {
			resolve(reader.result as string); // The Base64 string will be available in `reader.result`
		};

		reader.onerror = reject;

		reader.readAsDataURL(file); // This will convert the file to a Base64 string
	});
};
