const REGEX_RULES = {
	username: /^[a-zA-Z0-9]{6,}$/,
	email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
	country: /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/,
	zipcode: /^\d{5}(-\d{4})?$/,
	password: /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/,
};

const ERROR_MESSAGES = {
	username:
		'Username must be at least 6 characters long, and include at a number, capital letter, and symbol.',
	email: 'Enter a valid email address (*@*.*).',
	country: 'Enter a valid country.',
	zipcode: 'Enter your zip code in the form of 5 numbers.',
	password:
		'Password must be at least 8 characters long, and include a number,  and include at a number, capital letter, and symbol.',
	'confirm-password': 'Passwords must match',
};

const inputs = document.querySelectorAll('input');
inputs.forEach(function (currentNode) {
	currentNode.addEventListener('blur', validateInput);
});

const submitButton = document.querySelector('button');
submitButton.addEventListener('click', submitForm);

function submitForm(event) {
	console.log(event.target.value);
}

function validateInput(event) {
	const inputNode = event.target;
	const inputName = inputNode.name;
	const inputValue = inputNode.value;
	console.log(inputValue);
	console.log(inputName);
	let isValid;

	switch (inputName) {
		case 'username':
			isValid = REGEX_RULES.username.test(inputValue);
			break;
		case 'email':
			isValid = REGEX_RULES.email.test(inputValue);
			break;
		case 'country':
			isValid = REGEX_RULES.country.test(inputValue);
			break;
		case 'zipcode':
			isValid = REGEX_RULES.zipcode.test(inputValue);
			break;
		case 'password':
			isValid = REGEX_RULES.password.test(inputValue);
			break;
		case 'confirm-password':
			isValid = inputValue === inputNode.previousElementSibling.value;
			break;
	}

	if (inputValue) {
		if (isValid) {
			stylizeValidInput(inputNode);
		} else {
			stylizeInvalidInput(inputNode);
		}
	} else {
		return isValid;
	}
}

function stylizeValidInput(node) {
	node.nextElementSibling.innerText = '';
	node.classList.remove('invalid-input');
	node.classList.add('valid-input');
}

function stylizeInvalidInput(node) {
	node.nextElementSibling.innerText = ERROR_MESSAGES[node.name];
	node.classList.remove('valid-input');
	node.classList.add('invalid-input');
}
