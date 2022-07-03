/*
    Maximize and unmaximize the stage.
*/

function maximizeStage() {
    slideOut('#panel-container');
    closeAllCards();
    document.querySelector('#stage').classList.add('maximized');
    document.querySelector('#show-panel-btn').classList.add('show');
}

function unmaximizeStage() {
    slideIn('#panel-container');
    document.querySelector('#stage').classList.remove('maximized');
    document.querySelector('#show-panel-btn').classList.remove('show');
}

document.querySelector('#close-btn').addEventListener('click', () => {  
    maximizeStage();
});

document.querySelector('#show-panel-btn').addEventListener('click', () => { 
    unmaximizeStage();
});

document.querySelector('#stage').addEventListener('touchend', () => { 
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
