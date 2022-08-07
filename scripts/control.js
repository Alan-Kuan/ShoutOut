/*
    Play/Pause/Stop Control
*/

document.querySelectorAll('.play-pause-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        let icon = btn.querySelector('i');
        if (icon.classList.contains('fa-play')) {
            playMsg();
        } else {
            pauseMsg();
        }
    });
});

document.querySelectorAll('.stop-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        fadeOut('.panel-btn-container .control-btn');
        document.querySelectorAll('#more-card .control-btn').forEach(btn => {
            btn.disabled = true;
        });
        setMsg('');
    });
});
