const longDateFormatter = new Intl.DateTimeFormat(undefined, { dateStyle: 'long' });

const mediumDateFormatter = new Intl.DateTimeFormat(undefined, { dateStyle: 'medium' });

export function formatDateLong(date: Date) {
	return longDateFormatter.format(date);
}

export function formatDateMedium(date: Date) {
	return mediumDateFormatter.format(date);
}

export function formatText(text: string) {
	return text.replace(/[-_ ]/g, ' ');
}
