const form = document.getElementById('form');

const subscribeEmail = document.getElementById('subscribe-email');
const subscribeButton = document.getElementById('subscribe-button');

const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');

const loadMoreButton = document.getElementById('load-more-button');

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

loadMoreButton.addEventListener('click', () => {
    
});