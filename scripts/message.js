function setMsg(msg_text) {
    document.querySelector('#stage .msg').textContent = msg_text;
}

function startMsg(msg_text) {
    // reset animation
    let ticker = document.querySelector('#stage .ticker');
    ticker.style.animation = 'none';
    ticker.offsetHeight;  // this triggers reflow
    ticker.style.animation = null;

    setMsg(msg_text);
    fadeIn('.control-btn');
    playMsg();
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
