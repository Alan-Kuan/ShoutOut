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

document.querySelectorAll('.color').forEach(item => {
    item.addEventListener('click', e => {
        let color_block = e.target;
        if (color_block.classList.contains('selected'))
            return;

        let color = window.getComputedStyle(color_block).getPropertyValue('background-color');
        document.querySelector(':root').style.setProperty('--theme-color', color);

        document.querySelectorAll('.color').forEach(block => {
            if (!block.classList.contains('selected'))
                return;
            block.classList.remove('selected');
        });
        color_block.classList.add('selected');
    });
});
