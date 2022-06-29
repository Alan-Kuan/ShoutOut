function setMsg(msg_text) {
    document.querySelector('#stage .msg').textContent = msg_text;
}

function playMsg() { 
    let msg = document.querySelector('#stage .msg');
    msg.style.transition = null;
    msg.style.marginLeft = '1920px';
    let width = msg.offsetWidth;
    let time = width / 384;
    msg.style.transition = `margin-left ${time}s`;
    msg.style.transitionTimingFunction = 'linear';
    msg.style.marginLeft = `-${ width }px`;
    setTimeout(playMsg, time * 1000);
}

/*
    Input
*/

document.querySelector('#msg-form').addEventListener('submit', e => { 
    e.preventDefault();
    let msg_text = document.querySelector('#msg-form .text-field').value;
    setMsg(msg_text);
    playMsg();
});

document.querySelector('#delete-btn').addEventListener('click', () => {
    document.querySelector('#msg-form .text-field').value = '';
});

/*
    Maximize and unmaximize the stage.
*/

document.querySelector('#close').addEventListener('click', () => {  
    maximizeStage();
});

document.querySelector('#show-panel').addEventListener('click', () => { 
    unmaximizeStage();
});

document.querySelector('#stage').addEventListener('touchend', () => { 
    unmaximizeStage();
});

function maximizeStage() {
    document.querySelector('#panel').classList.remove('slide-in');
    document.querySelector('#panel').classList.add('slide-out');
    document.querySelector('#stage').classList.add('maximized');
    document.querySelector('#show-panel').classList.add('show');
}

function unmaximizeStage() {
    document.querySelector('#panel').classList.remove('slide-out');
    document.querySelector('#panel').classList.add('slide-in');
    document.querySelector('#stage').classList.remove('maximized');
    document.querySelector('#show-panel').classList.remove('show');
}
