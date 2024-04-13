if (window.innerWidth < 376) {
    const cards = document.querySelectorAll('.carousel-card');
    const prevBtn = document.querySelector('.carousel-prev-btn');
    const nextBtn = document.querySelector('.carousel-next-btn');
    const indicators = document.querySelectorAll('.stages__nav-indicator-item');
    let currentCardIndex = 0;
    let currentIndicatorIndex = 0;


    function showCard(cardIndex) {
        cards.forEach(card => {
            card.style.display = 'none';
        });
        cards[cardIndex].style.display = 'flex';
    }
    prevBtn.addEventListener('click', () => {
        if (currentCardIndex >= 1) {
            currentCardIndex--;
            showCard(currentCardIndex);
            nextBtn.removeAttribute('disabled');
        } else {
            prevBtn.setAttribute('disabled', 'true');
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentCardIndex <= 3) {
            currentCardIndex++;
            showCard(currentCardIndex);
            prevBtn.removeAttribute('disabled');
        } else {
            nextBtn.setAttribute('disabled', 'true');

        }

    });
    showCard(0);

    function showIndicator(indicatorIndex) {
        indicators.forEach(indicator => {
            indicator.style.background = 'rgb(217, 217, 217)';
        });
        indicators[indicatorIndex].style.background = 'rgb(49, 49, 49)';
    };
    prevBtn.addEventListener('click', () => {
        if (currentIndicatorIndex >= 1) {
            currentIndicatorIndex--;
            showIndicator(currentIndicatorIndex);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndicatorIndex <= 3) {
            currentIndicatorIndex++;
            showIndicator(currentIndicatorIndex);
        }
    });

    showIndicator(0);
}
