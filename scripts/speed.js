/*
    Speed Controler
*/

document.querySelector('#speed-btn').addEventListener('click', e => { 
    toggleCard('#speed-card');
    let btn = e.currentTarget;
    if (btn.classList.contains('selected'))
        btn.classList.remove('selected');
    else
        btn.classList.add('selected');
});

document.querySelector('#speed').addEventListener('input', e => { 
    let speed = e.target.value;
    document.querySelector('#speed-display .value').textContent = speed;

    let width = document.querySelector('#stage .ticker').offsetWidth;
    let msg_duration = width / speed;
    document.querySelector(':root').style.setProperty('--msg-duration', msg_duration + 's');
});
