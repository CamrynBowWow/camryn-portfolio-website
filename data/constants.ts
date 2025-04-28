export const PROJECT_CATEGORY = ['tutorial', 'personal', 'freelance'] as const;

export const PROJECT_STATUS = [
	'completed',
	'in progress',
	'started',
	'unavailable',
	'enhancements',
	'cancelled',
] as const;

export const PROJECT_CATEGORY_SEARCH = ['all', ...PROJECT_CATEGORY] as const;

export const PROJECT_STATUS_SEARCH = ['all', ...PROJECT_STATUS] as const;

export const DATE_SEARCH = ['newest', 'oldest'] as const;

export const MAX_FILE_SIZE_MB = 1;
