const d = document;

const nameInput = d.getElementById('name-input');
const lastNameInput = d.getElementById('last-name-input');
const emailInput = d.getElementById('email-input');
const passInput = d.getElementById('pass-input');
const submitBtn = d.getElementById('submit-btn');

const errorName = d.getElementById('error-name');
const errorLastName = d.getElementById('error-last-name');
const errorEmail = d.getElementById('error-email');
const errorPass = d.getElementById('error-pass');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(nameInput.value);
  validateForm();
})

const validateForm = () => {
  validateName();
  validateLastName();
  validateEmail();
  validatePass();
}

// HACER FUNCION QUE ESCONDA EL ICONO POR SI MISMA EN LUGAR DE HACER DOS LLAMADAS A NEXTELEMENTSIBLING. EL PARAMETRO SERIA EL ELEMENTO PRIMERO

const addErrorIcon = (errorType) => {
  errorType.nextElementSibling.classList.add('block');
  errorType.nextElementSibling.classList.remove('hidden');
}

const removeErrorIcon = (errorType) => {
  errorType.nextElementSibling.classList.remove('block');
  errorType.nextElementSibling.classList.add('hidden');
}

const validateName = () => {
  if (nameInput.value == '') {
    errorName.innerText = 'First name cannot be empty';
    addErrorIcon(errorName);
    nameInput.classList.add('form__border-error');
  } else if (/^[A-Z\s]+$/i.test(nameInput.value)) {
    errorName.innerText = '';
    removeErrorIcon(errorName);
    nameInput.classList.remove('form__border-error');
    return true
  } else {
    errorName.innerText = 'Wrong format. Letters only';
    addErrorIcon(errorName);
    nameInput.classList.add('form__border-error');
  }
}

const validateLastName = () => {
  if (lastNameInput.value == '') {
    errorLastName.innerText = 'Last name cannot be empty';
    addErrorIcon(errorLastName);
    lastNameInput.classList.add('form__border-error');
  } else if (/^[A-Z\s]+$/i.test(lastNameInput.value)) {
    errorLastName.innerText = '';
    removeErrorIcon(errorLastName);
    lastNameInput.classList.remove('form__border-error');
    return true
  } else {
    errorLastName.innerText = 'Wrong format. Letters only';
    addErrorIcon(errorLastName);
    lastNameInput.classList.add('form__border-error');
  }
}

const validateEmail = () => {
  if (emailInput.value == '') {
    errorEmail.innerText = 'Email cannot be empty';
    addErrorIcon(errorEmail);
    emailInput.classList.add('form__border-error');
  } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
    errorEmail.innerText = '';
    removeErrorIcon(errorEmail);
    emailInput.classList.remove('form__border-error');
    return true
  } else {
    errorEmail.innerText = 'Looks like this is not an email';
    addErrorIcon(errorEmail);
    emailInput.classList.add('form__border-error');
  }
}

const validatePass = () => {
  if (passInput.value == '') {
    errorPass.innerText = 'Password cannot be empty';
    addErrorIcon(errorPass);
    passInput.classList.add('form__border-error');
  } else if (/[0-9A-Z]{8}/i.test(passInput.value)) {
    errorPass.innerText = '';
    removeErrorIcon(errorPass);
    passInput.classList.remove('form__border-error');
    return true
  } else {
    errorPass.innerText = 'Password must be contain al least 8 characters';
    addErrorIcon(errorPass);
    passInput.classList.add('form__border-error');
  }
}