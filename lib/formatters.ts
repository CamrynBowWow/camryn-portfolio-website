const longDateFormatter = new Intl.DateTimeFormat(undefined, { dateStyle: 'long' });

const mediumDateFormatter = new Intl.DateTimeFormat(undefined, { dateStyle: 'medium' });

const timeStampDateFormatter = new Intl.DateTimeFormat(undefined, {
	dateStyle: 'medium',
	timeStyle: 'long',
	hourCycle: 'h23',
});

const monthYearFormatter = new Intl.DateTimeFormat(undefined, {
	month: 'long',
	year: 'numeric',
});

export function formatDateLong(date: Date) {
	return longDateFormatter.format(date);
}

export function formatDateMedium(date: Date) {
	return mediumDateFormatter.format(date);
}

export function formatDateTimeStamp(date: Date) {
	return timeStampDateFormatter.format(date);
}

export function formatText(text: string) {
	return text.replace(/[-_ ]/g, ' ');
}

export function formatMonthYear(date: Date) {
	return monthYearFormatter.format(date);
}
