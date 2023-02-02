// form validation
const form = document.querySelector('form');
const email = document.querySelector('#email');
const errorMessage = document.querySelector('#errMsg');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailLowerCase = email.value;
  if (emailLowerCase.toLowerCase() === emailLowerCase) {
    form.submit();
  } else {
    errorMessage.textContent = 'Please enter email in lowercase!';
    errorMessage.style.color = '#ff0000';
  }
});