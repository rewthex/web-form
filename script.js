import { REGEX_RULES, ERROR_MESSAGES } from './constants.js';

const inputs = document.querySelectorAll('input');
inputs.forEach(function (currentNode) {
	currentNode.addEventListener('blur', stylizeInput);
});

const submitButton = document.querySelector('button');
submitButton.addEventListener('click', submitForm);

function submitForm(event) {
	const signupForm = document.querySelector('.signup-form');
	let isValidForm = true;

	inputs.forEach(function (currentNode) {
		if (!isInputValid(currentNode)) {
			invalidForm(signupForm);
			isValidForm = false;
		}
	});

	if (isValidForm) {
		validForm(signupForm);
	}
}

function validForm(signupForm) {
	signupForm.classList.remove('invalid-signup-form');
	signupForm.classList.add('valid-signup-form');
}

function invalidForm(signupForm) {
	signupForm.classList.remove('valid-signup-form');
	signupForm.classList.add('invalid-signup-form');
}

function stylizeInput(event) {
	const inputNode = event.target;
	if (isInputValid(inputNode)) {
		inputNode.nextElementSibling.innerText = '';
		inputNode.classList.remove('invalid-input');
		inputNode.classList.add('valid-input');
	} else {
		inputNode.nextElementSibling.innerText = ERROR_MESSAGES[inputNode.name];
		inputNode.classList.remove('valid-input');
		inputNode.classList.add('invalid-input');
	}
}

function isInputValid(node) {
	const inputName = node.name;
	const inputValue = node.value;
	if (!inputValue) return false;

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
			isValid = inputValue === document.getElementById('password').value;
			break;
	}

	return isValid;
}
