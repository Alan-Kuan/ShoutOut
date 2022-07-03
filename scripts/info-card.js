const encoded = 'a3Vhbmhhb2FuQGdtYWlsLmNvbQ==';
const decoded = atob(encoded);

let email = document.querySelector('#email');
email.textContent = decoded;
email.href = `mailto:${ decoded }`;
