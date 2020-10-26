const revealId = 'reveal';
const emailId = 'email';
const emailAddress = 'YW5qdWxha2FydW5hcmF0aG5lQGdtYWlsLmNvbQ==';

document.getElementById(revealId).onclick = () => {
    document.getElementById(emailId).innerText = atob(emailAddress);
}