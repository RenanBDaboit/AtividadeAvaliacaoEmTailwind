const form = document.getElementById('form');

form.addEventListener('submit', () => {
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;
    
    alert(`Usuário ${name} com email ${email} da matéria ${}  cadastrado com sucesso`)
});