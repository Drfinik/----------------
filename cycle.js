"use strict";
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



// const btn1 = document.querySelector('.participants__top_nav-btn1');
// const btn2 = document.querySelector('.participants__top_nav-btn2');
// const navValue = document.querySelector('.participants__top_nav-value');
// let count = 1;
// btn1.addEventListener('click', () => {
//     if (count <= 5) {
//         count++;
//         navValue.textContent = count;
//         btn2.removeAttribute('disabled');
//         btn2.style.backgroundColor = 'black';
//         btn2.style.border = '1px solid black';
//     } else {
//         btn1.setAttribute('disabled', 'true');
//         btn1.style.backgroundColor = '#ccc';
//         btn1.style.border = '1px solid #ccc';

//     }
// });
// btn2.addEventListener('click', () => {
//     if (count >= 2) {
//         count--;
//         navValue.textContent = count;
//         btn1.removeAttribute('disabled');
//         btn1.style.backgroundColor = 'black';
//         btn1.style.border = '1px solid black';
//     } else {
//         btn2.setAttribute('disabled', 'true');
//         btn2.style.backgroundColor = '#ccc';
//         btn2.style.border = '1px solid #ccc';
//     }
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const participantsCardsCard = document.querySelectorAll(".participants__cards_card");
//     const visibleCards = [participantsCardsCard[0], participantsCardsCard[1], participantsCardsCard[2]];
//     let currentIndex = 0;

//     function updateCarousel() {
//         visibleCards.forEach((card, index) => {
//             card.style.order = index;
//         });
//     }

//     setInterval(() => {
//         currentIndex = (currentIndex + 1) % participantsCardsCard.length;
//         const nextCard = participantsCardsCard[currentIndex];
//         const removedCard = visibleCards.shift();
//         visibleCards.push(nextCard);

//         // Update order of visible cards
//         updateCarousel();

//         // Update classes
//         removedCard.classList.remove("active");
//         nextCard.classList.add("active");
//     }, 4000);
// });




