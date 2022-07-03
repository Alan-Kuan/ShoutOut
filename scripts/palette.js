/*
    Color Palette
*/

function selectBlock(block) {
    document.querySelectorAll('.color').forEach(block => {
        if (!block.classList.contains('selected'))
            return;
        block.classList.remove('selected');
    });
    block.classList.add('selected');
}

document.querySelector('#palette-btn').addEventListener('click', () => { 
    toggleCard('#palette');
});

document.querySelectorAll('.color').forEach(item => {
    item.addEventListener('click', e => {
        let selected_block = e.target;
        if (selected_block.classList.contains('selected'))
            return;

        let color = window.getComputedStyle(selected_block).getPropertyValue('background-color');
        document.querySelector(':root').style.setProperty('--theme-color', color);
        selectBlock(selected_block);
    });
});

document.querySelector('#color-picker').addEventListener('input', e => {
    let color = e.target.value;
    document.querySelector(':root').style.setProperty('--theme-color', color);
    document.querySelector(':root').style.setProperty('--color-free', color);

    let selected_block = document.querySelector('.color-free');
    selectBlock(selected_block);
});
