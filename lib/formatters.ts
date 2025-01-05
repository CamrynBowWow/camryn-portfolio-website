const dateFormatter = new Intl.DateTimeFormat(undefined, { dateStyle: 'long' });

export function formatDate(date: Date) {
	return dateFormatter.format(date);
}
