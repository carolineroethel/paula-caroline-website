const form = document.getElementById('contactForm');
const messageDiv = document.getElementById('form-message');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const comment = document.getElementById('comment').value.trim();

    let errors = [];

    if (name === '') errors.push('Bitte Name eingeben.');
    if (email === '') errors.push('Bitte Email eingeben.');
    if (comment === '') errors.push('Bitte eine Nachricht eingeben.');

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i;
    if (email !== '' && !emailPattern.test(email)) errors.push('Bitte eine gültige Email-Adresse eingeben.');

    if (comment.length > 0 && comment.length < 10) errors.push('Die Nachricht sollte mindestens 10 Zeichen haben.');

    if (errors.length > 0) {
        messageDiv.innerHTML = errors.join('<br>');
        messageDiv.classList.remove('success');
        messageDiv.classList.add('error');
    } else {
        messageDiv.innerHTML = 'Vielen Dank! Deine Nachricht wurde erfolgreich gesendet!';
        messageDiv.classList.remove('error');
        messageDiv.classList.add('success');
        form.reset();
    }
});
