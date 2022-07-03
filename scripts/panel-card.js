function toggleCard(card) {
    if (card.classList.contains('slide-in')) {
        slideOut(card);
    } else {
        slideIn(card);

        document.querySelectorAll('.panel-card').forEach(other => {
            if (!other.isEqualNode(card) && other.classList.contains('slide-in'))
                slideOut(other)
        });

        document.querySelectorAll('.panel-btn').forEach(other => {
            if (other.classList.contains('selected'))
                other.classList.remove('selected');
        });
    }
}

function closeAllCards() {
    document.querySelectorAll('.panel-card').forEach(card => {
        if (!card.classList.contains('slide-in'))
            return;
        slideOut(card)
    });

    document.querySelectorAll('.panel-btn').forEach(btn => {
        if (btn.classList.contains('selected'))
            btn.classList.remove('selected');
    });
}

document.querySelectorAll('.panel-card-btn').forEach(btn => {
    btn.addEventListener('click', () => { 
        let card = btn.previousElementSibling.firstElementChild;
        toggleCard(card);

        if (btn.classList.contains('selected'))
            btn.classList.remove('selected');
        else
            btn.classList.add('selected');
    });
});
