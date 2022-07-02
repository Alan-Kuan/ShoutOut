/*
    Maximize and unmaximize the stage.
*/

document.querySelector('#close-btn').addEventListener('click', () => {  
    maximizeStage();
});

document.querySelector('#show-panel-btn').addEventListener('click', () => { 
    unmaximizeStage();
});

document.querySelector('#stage').addEventListener('touchend', () => { 
    unmaximizeStage();
});

function maximizeStage() {
    slideOut('#panel-container');
    if (document.querySelector('#palette').classList.contains('slide-in'))
        slideOut('#palette');
    document.querySelector('#stage').classList.add('maximized');
    document.querySelector('#show-panel-btn').classList.add('show');
}

function unmaximizeStage() {
    slideIn('#panel-container');
    document.querySelector('#stage').classList.remove('maximized');
    document.querySelector('#show-panel-btn').classList.remove('show');
}
