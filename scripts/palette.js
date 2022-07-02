/*
    Color Palette
*/

document.querySelector('#palette-btn').addEventListener('click', () => { 
    let palette = document.querySelector('#palette');
    if (palette.classList.contains('slide-in')) {
        palette.classList.add('slide-out');
        palette.classList.remove('slide-in');
    } else {
        palette.classList.add('slide-in');
        palette.classList.remove('slide-out');
    }
});
