const form = document.getElementById('form');
const subscribeEmail = document.getElementById('subscribe-email');
const subscribeButton = document.getElementById('subscribe-button');

form.addEventListener('submit', () => {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    
    alert(`User ${name} with email ${email} for subject ${subject} successfully registered`);
});

subscribeButton.addEventListener('click', () => {
    const email = subscribeEmail.value.trim();

    
});