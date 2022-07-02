/*
    Play/Pause/Stop Control
*/

document.querySelector('#play-pause-btn').addEventListener('click', e => { 
    if (e.target.classList.contains('fa-play'))
        playMsg();
    else
        pauseMsg();
});

document.querySelector('#stop-btn').addEventListener('click', () => { 
    fadeOut('.control-btn');
    setMsg('');
});
