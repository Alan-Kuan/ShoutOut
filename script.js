document.querySelector('#msg-form').addEventListener('submit', (event) => { 
    event.preventDefault();
    let msg_text = document.querySelector('#msg-form .text-field').value;
    setMsg(msg_text);
    playMsg();
});

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
    Maximize and unmaximize the stage.
*/

document.querySelector('#close').addEventListener('click', (event) => {  
    maximizeStage();
});

document.querySelector('#show-panel').addEventListener('click', (event) => { 
    unmaximizeStage();
});

document.querySelector('#stage').addEventListener('touchend', (evnet) => { 
    unmaximizeStage();
});

function maximizeStage() {
    document.querySelector('#panel').classList.add('hide');
    document.querySelector('#stage').classList.add('maximized');
    document.querySelector('#show-panel').classList.add('show');
}

function unmaximizeStage() {
    document.querySelector('#panel').classList.remove('hide');
    document.querySelector('#stage').classList.remove('maximized');
    document.querySelector('#show-panel').classList.remove('show');
}
