/*
    Input
*/

document.querySelector('#msg-form').addEventListener('submit', e => { 
    e.preventDefault();
    let msg_text = document.querySelector('#msg-form .text-field').value;
    startMsg(msg_text);
});

document.querySelector('#delete-btn').addEventListener('click', () => {
    let field = document.querySelector('#msg-form .text-field');
    field.value = '';
    field.focus();
});
