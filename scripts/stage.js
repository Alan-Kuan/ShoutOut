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
