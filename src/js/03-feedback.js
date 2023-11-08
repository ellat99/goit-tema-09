const formElem = document.querySelector('.feedback-form');
const inputElem = document.querySelector('.feedback-form input');
const textareaElem = document.querySelector('.feedback-form textarea');
const submitBtn = document.querySelector('.feedback-form button');

window.addEventListener('load', () => {
  const savedData = localStorage.getItem('feedback-form-state');
  const savedObj = JSON.parse(savedData);
  if (savedObj === null) {
    return;
  }
  input.value = savedObj.email;
  textarea.value = savedObj.message;
});

form.addEventListener(
  'input',
  throttle(() => {
    const elementsSaved = { email: input.value, message: textarea.value };
    localStorage.setItem('feedback-form-state', JSON.stringify(elementsSaved));
  }, 500)
);

buttonSubmit.addEventListener('click', event => {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  console.log('email: ', input.value);
  console.log('message: ', textarea.value);
  form.reset();
});
