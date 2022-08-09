function unselectCurrentSelectedBtn() {
    document.querySelectorAll('.panel-btn').forEach(btn => {
        if (btn.classList.contains('selected'))
            btn.classList.remove('selected');
    });
}

function toggleCard(card) {
    if (card.classList.contains('slide-in')) {
        slideOut(card);
    } else {
        slideIn(card);

        document.querySelectorAll('.panel-card').forEach(other => {
            if (!other.isEqualNode(card) && other.classList.contains('slide-in'))
                slideOut(other)
        });

        unselectCurrentSelectedBtn();
    }
}

function closeAllCards() {
    document.querySelectorAll('.panel-card').forEach(card => {
        if (!card.classList.contains('slide-in'))
            return;
        slideOut(card)
    });

    unselectCurrentSelectedBtn();
}

document.querySelectorAll('.panel-card-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        let ref = btn.dataset.ref;
        let card = document.querySelector(`#${ ref }-card`);
        toggleCard(card);

        document.querySelectorAll(`.${ ref }-btn`).forEach(target_btn => {
            if (target_btn.classList.contains('selected'))
                target_btn.classList.remove('selected');
            else
                target_btn.classList.add('selected');
        });
    });
});

// Only appears when the display width is no more than 1024 px
document.querySelectorAll('.panel-card-close').forEach(btn => {
    btn.addEventListener('click', () => {
        let card = btn.parentElement;
        toggleCard(card);
        unselectCurrentSelectedBtn();
    });
});
