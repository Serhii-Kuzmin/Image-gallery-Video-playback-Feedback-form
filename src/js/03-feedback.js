import throttle from 'lodash/throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');
const storageKey = 'feedback-form-state';


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

form.addEventListener('input', throttle(() => {
  const dataToStore = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem(storageKey, JSON.stringify(dataToStore));
}, 500));


form.addEventListener('submit', () => {
  localStorage.removeItem(storageKey);

  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };

  console.log('Form data submitted:', formData);
});




