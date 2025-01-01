const dateFormatter = new Intl.DateTimeFormat(undefined, { dateStyle: 'medium' });

export function formatDate(date: Date) {
	return dateFormatter.format(date);
}
