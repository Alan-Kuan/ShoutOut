/*
    Fullscreen Control
*/

function enterFullscreen() {
    let ele = document.documentElement;
    if (ele.requestFullscreen)
        ele.requestFullscreen();
    // Safari
    else if (ele.webkitRequestFullscreen)
        ele.webkitRequestFullscreen();
    else
        alert('Fullscreen feature is not supported on this browser');
}

function leaveFullscreen() {
    if (document.exitFullscreen)
        document.exitFullscreen();
    // Safari
    else if (document.webkitExitFullscreen)
        document.webkitExitFullscreen();
    else
        alert('Fullscreen feature is not supported on this browser');
}

function onFullScreenChange() {
    let icons = document.querySelectorAll('.fullscreen-btn i');
    // entered fullscreen
    if (document.fullscreenElement || document.webkitFullscreenElement) {
        icons.forEach(icon => {
            icon.classList.remove('fa-up-right-and-down-left-from-center');
            icon.classList.add('fa-down-left-and-up-right-to-center');
        });
    // left fullscreen
    } else {
        icons.forEach(icon => {
            icon.classList.remove('fa-down-left-and-up-right-to-center');
            icon.classList.add('fa-up-right-and-down-left-from-center');
        });
    }
}

document.addEventListener('fullscreenchange', onFullScreenChange);
document.addEventListener('webkitfullscreenchange', onFullScreenChange);

document.querySelectorAll('.fullscreen-btn').forEach(btn => {
    btn.addEventListener('click', e => {
        if (e.target.classList.contains('fa-up-right-and-down-left-from-center'))
            enterFullscreen();
        else
            leaveFullscreen();
    });
});

/*
    Maximize and unmaximize the stage.
*/

function maximizeStage() {
    let stage = document.querySelector('#stage');
    if (stage.classList.contains('maximized'))
        return;
    slideOut('#panel-container');
    closeAllCards();
    stage.classList.add('maximized');
}

function unmaximizeStage() {
    let stage = document.querySelector('#stage');
    if (!stage.classList.contains('maximized'))
        return;
    slideIn('#panel-container');
    stage.classList.remove('maximized');
}

document.querySelector('#close-btn').addEventListener('click', () => {
    maximizeStage();
});

document.querySelector('#stage').addEventListener('click', () => {
    unmaximizeStage();
});

/*
    Hide Idling Cursor
*/

document.querySelector('#stage').addEventListener('mousemove', e => {
    let stage = e.target;

    // clear timer
    const old_timer = stage.getAttribute('timer');
    if (old_timer) {
        clearTimeout(old_timer);
        stage.setAttribute('timer', '');
    }

    // set timer
    const timer = setTimeout(() => {
        stage.setAttribute('timer', '');
        stage.style.cursor = 'none';
    }, 3500);
    stage.setAttribute('timer', timer);

    stage.style.cursor = 'default';
});
