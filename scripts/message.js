function setMsg(msg_text) {
    document.querySelector('#stage .msg').textContent = msg_text;
}

function startMsg(msg_text) {
    setMsg(msg_text);
    fadeIn('.control-btn');

    // reset animation
    let ticker = document.querySelector('#stage .ticker');
    ticker.style.animation = 'none';
    let width = ticker.offsetWidth;  // we need the width, and this can trigger reflow coincidentally
    ticker.style.animation = null;

    let speed = document.querySelector('#speed').value;
    let msg_duration = width / speed;
    document.querySelector(':root').style.setProperty('--msg-duration', msg_duration + 's');
}

function playMsg() { 
    let ticker = document.querySelector('#stage .ticker');
    let play_pause = document.querySelector('#play-pause-btn i');
    ticker.style.animationPlayState = 'running';
    play_pause.classList.remove('fa-play');
    play_pause.classList.add('fa-pause');
}

function pauseMsg() { 
    let ticker = document.querySelector('#stage .ticker');
    let play_pause = document.querySelector('#play-pause-btn i');
    ticker.style.animationPlayState = 'paused';
    play_pause.classList.add('fa-play');
    play_pause.classList.remove('fa-pause');
}
