function setMsg(msg_text) {
    document.querySelector('#stage .msg').textContent = msg_text;
}

function playMsg() { 
    let ticker = document.querySelector('#stage .ticker');
    let play_pause = document.querySelector('#play-pause i');
    ticker.style.animationPlayState = 'running';
    play_pause.classList.remove('fa-play');
    play_pause.classList.add('fa-pause');
}

function pauseMsg() { 
    let ticker = document.querySelector('#stage .ticker');
    let play_pause = document.querySelector('#play-pause i');
    ticker.style.animationPlayState = 'paused';
    play_pause.classList.add('fa-play');
    play_pause.classList.remove('fa-pause');
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
    let field = document.querySelector('#msg-form .text-field');
    field.value = '';
    field.focus();
});

/*
    Play/Pause Control
*/

document.querySelector('#play-pause').addEventListener('click', e => { 
    if (e.target.classList.contains('fa-play'))
        playMsg();
    else
        pauseMsg();
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
