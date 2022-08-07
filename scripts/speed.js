/*
    Speed Controler
*/

document.querySelector('#speed').addEventListener('input', e => {
    let speed = e.target.value;
    document.querySelector('#speed-display .value').textContent = speed;

    let width = document.querySelector('#stage .ticker').offsetWidth;
    let msg_duration = width / speed;
    document.querySelector(':root').style.setProperty('--msg-duration', msg_duration + 's');
});
