function toggleCard(selector) {
    let card = document.querySelector(selector);
    if (card.classList.contains('slide-in')) {
        slideOut(card);
    } else {
        slideIn(card);

        document.querySelectorAll('.panel-card').forEach(other => {
            if (other.isEqualNode(card) || !other.classList.contains('slide-in'))
                return;
            slideOut(other)
        });
    }
}

function closeAllCards() {
    document.querySelectorAll('.panel-card').forEach(card => {
        if (!card.classList.contains('slide-in'))
            return;
        slideOut(card)
    });
}
