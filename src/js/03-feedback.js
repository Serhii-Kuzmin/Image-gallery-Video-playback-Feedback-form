// import throttle from 'lodash/throttle';

// const feedbackForm = document.querySelector('.feedback-form');
// const emailInput = feedbackForm.querySelector('input[name="email"]');
// const messageInput = feedbackForm.querySelector('textarea[name="message"]');
// const localStorageKey = 'feedback-form-state';

// emailInput.addEventListener('input', throttle(onInput, 500));
// messageInput.addEventListener('input', throttle(onInput, 500));

// function onInput() {
//   const formData = {
//     email: emailInput.value,
//     message: messageInput.value,
//   };
//   localStorage.setItem(localStorageKey, JSON.stringify(formData));
// }

// const savedData = localStorage.getItem(localStorageKey);
// if (savedData) {
//   const formData = JSON.parse(savedData);
//   emailInput.value = formData.email;
//   messageInput.value = formData.message;
// }

// feedbackForm.addEventListener('submit', onSubmit);

// function onSubmit(event) {
//   event.preventDefault();

//   const formData = {
//     email: emailInput.value,
//     message: messageInput.value,
//   };
//   console.log(formData);

//   localStorage.removeItem(localStorageKey);
// }

//_______________________________________

import throttle from 'lodash/throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');
const storageKey = 'feedback-form-state';

// Отримайте дані з локального сховища та заповніть поля форми, якщо вони є
const storedData = localStorage.getItem(storageKey);

if (storedData) {
  try {
    const { email, message } = JSON.parse(storedData);
    emailInput.value = email;
    messageTextarea.value = message;
  } catch (error) {
    console.error('Error parsing stored data:', error);
  }
}

// Відстежування події input і збереження даних в локальному сховищі
form.addEventListener('input', throttle(() => {
  const dataToStore = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem(storageKey, JSON.stringify(dataToStore));
}, 500));

// Під час сабміту форми очистити локальне сховище
form.addEventListener('submit', () => {
  localStorage.removeItem(storageKey);

  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };

  console.log('Form data submitted:', formData);
});




