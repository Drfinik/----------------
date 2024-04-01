"use strict";

if (window.innerWidth < 431) {
    let currentIndex = 1;
    const participantsCardsCard = document.querySelectorAll('.participants__cards_card');

    function changeDiv() {
        participantsCardsCard.forEach(element => {
            element.style.display = 'none';
        });
        participantsCardsCard[currentIndex].style.display = 'block';
        currentIndex = (currentIndex + 1) % participantsCardsCard.length;
    }

    setInterval(changeDiv, 4000);
}
