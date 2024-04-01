"use strict";

if (window.innerWidth < 365) {
    let currentIndex = 1;
    const participantsCardsCard = document.querySelectorAll('.participants__cards_card');

    function changeDiv() {
        participantsCardsCard.forEach(participantsCardsCard => {
            participantsCardsCard.style.display = 'none';
        });
        participantsCardsCard[currentIndex].style.display = 'block';
        currentIndex = (currentIndex + 1) % divs.length;
    }

    setInterval(changeDiv, 4000);
}