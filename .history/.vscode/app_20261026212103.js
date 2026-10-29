const form = document.getElementById('form');
const subscribeEmail = document.getElementById('subscribe-email');
const subscribeButton = document.getElementById('subscribe-button');

form.addEventListener('submit', () => {
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;
    
    alert(`User ${name} with email ${email} for subject ${subject} successfully registered`);
});

subscribeButton.addEventListener('click', () => {
    const email = subscribeEmail.value
});