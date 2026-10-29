const form = document.getElementById('form');
const subscribeEmail

form.addEventListener('submit', () => {
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;
    
    alert(`User ${name} with email ${email} for subject ${subject} successfully registered`);
});

