function __getItems(item_like) {
    if (typeof item_like === 'string')
        return document.querySelectorAll(item_like);
    if (item_like instanceof Element)
        return [ item_like ];
    if (item_like instanceof NodeList)
        return item_like;
}

function hide(item_like) {
    let items = __getItems(item_like);
    for (let item of items) {
        item.style.visibility = 'hidden';
        item.classList.remove('fade-in');
    }
}

function show(item_like) {
    let items = __getItems(item_like);
    for (let item of items) {
        item.style.visibility = 'visible';
        item.classList.remove('fade-out');
    }
}

function fadeOut(item_like) {
    let items = __getItems(item_like);
    for (let item of items) {
        item.classList.add('fade-out');
        item.classList.remove('fade-in');
    }
}

function fadeIn(item_like) {
    let items = __getItems(item_like);
    for (let item of items) {
        item.style.visibility = 'visible';
        item.classList.add('fade-in');
        item.classList.remove('fade-out');
    }
}

function slideIn(item_like) {
    let items = __getItems(item_like);
    for (let item of items) {
        item.classList.add('slide-in');
        item.classList.remove('slide-out');
    }
}

function slideOut(item_like) {
    let items = __getItems(item_like);
    for (let item of items) {
        item.classList.add('slide-out');
        item.classList.remove('slide-in');
    }
}
