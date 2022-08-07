function setMsg(msg_text) {
    document.querySelector('#stage .msg').textContent = msg_text;
}

function startMsg(msg_text) {
    setMsg(msg_text);
    fadeIn('.panel-btn-container .control-btn');
    document.querySelectorAll('#more-card .control-btn').forEach(btn => {
        btn.disabled = false;
    });

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
    ticker.style.animationPlayState = 'running';

    document.querySelectorAll('.play-pause-btn i').forEach(icon => {
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    });
}

function pauseMsg() {
    let ticker = document.querySelector('#stage .ticker');
    ticker.style.animationPlayState = 'paused';

    document.querySelectorAll('.play-pause-btn i').forEach(icon => {
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    });
}
