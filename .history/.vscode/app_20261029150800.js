const form = document.getElementById('form');

const subscribeEmail = document.getElementById('subscribe-email');
const subscribeButton = document.getElementById('subscribe-button');

const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');

const grayButtons = document.querySelectorAll('[data-gray-button]');

form.addEventListener('submit', () => {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    
    alert(`User ${name} with email ${email} for subject ${subject} successfully registered`);
});

subscribeButton.addEventListener('click', () => {
    const email = subscribeEmail.value.trim();

    alert(`User with email ${email} sucessfully subscribed`);

    subscribeEmail.value = '';
});

searchButton.addEventListener('click', () => {
    alert('Não foi encontrado nenhum dado sobre isso');

    searchBar.value = '';
});

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

grayButtons.forEach(async function (button) {
    button.addEventListener('click', async function (){
        
    })
    
    button.classList.remove('bg-background-secondary');
    button.classList.add('bg-gray-300');

    await delay(200);

    button.classList.remove('bg-gray-300');
    button.classList.add('bg-background-secondary');
});
