function hide(selector) {
    let items = document.querySelectorAll(selector);
    items.forEach(item => {
        item.style.visibility = 'hidden';
        item.classList.remove('fade-in');
    });
}

function show(selector) {
    let items = document.querySelectorAll(selector);
    items.forEach(item => {
        item.style.visibility = 'visible';
        item.classList.remove('fade-out');
    });
}

function fadeOut(selector) {
    let items = document.querySelectorAll(selector);
    items.forEach(item => {
        item.classList.add('fade-out');
        item.classList.remove('fade-in');
    });
}

function fadeIn(selector) {
    let items = document.querySelectorAll(selector);
    items.forEach(item => {
        item.style.visibility = 'visible';
        item.classList.add('fade-in');
        item.classList.remove('fade-out');
    });
}

function slideIn(selector) {
    let items = document.querySelectorAll(selector);
    items.forEach(item => {
        item.classList.add('slide-in');
        item.classList.remove('slide-out');
    });
}

function slideOut(selector) {
    let items = document.querySelectorAll(selector);
    items.forEach(item => {
        item.classList.add('slide-out');
        item.classList.remove('slide-in');
    });
}
