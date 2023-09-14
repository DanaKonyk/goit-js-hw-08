import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const emailEl = form.querySelector('input[name="email"]');
const messageEl = form.querySelector('textarea');

const localStorageKey = "feedback-form-state";

form.addEventListener('input',throttle(onTextInput, 500));
form.addEventListener('submit', onFormSubmit);


function onTextInput() {
    
const formData = {
    email: emailEl.value,
    message: messageEl.value,
};
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
};

function onFormSubmit(e) {
    e.preventDefault();
    const formData = {
        email: emailEl.value,
        message: messageEl.value,
    };
    console.log(formData);

    form.reset();
    localStorage.removeItem(localStorageKey);

};
    
function onFormReload() {
  const  savedData = localStorage.getItem(localStorageKey);
    if (savedData) {
        const formData = JSON.parse(savedData);
        emailEl.value = formData.email ?? '';
        messageEl.value = formData.message ?? '';
    }
};

onFormReload();

