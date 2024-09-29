export const REGEX_RULES = {
	username: /^[a-zA-Z0-9]{6,}$/,
	email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
	country: /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/,
	zipcode: /^\d{5}(-\d{4})?$/,
	password: /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/,
};

export const ERROR_MESSAGES = {
	username:
		'Username must contain 6 characters and consist of letters and numbers.',
	email: 'Enter a valid email address (eg. name@email.com).',
	country: 'Enter a valid country.',
	zipcode: 'Enter your zip code in the form of 5 numbers.',
	password:
		'Password must contain 8 characters and at least one of the following: a number, capital letter, and symbol.',
	'confirm-password': 'Passwords must match',
};