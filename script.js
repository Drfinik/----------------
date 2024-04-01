"use strict";
const isMobile = window.matchMedia("(max-width: 376px)").matches;
if (isMobile) {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.stages__cards_card-carusel');
    const indicators = document.querySelectorAll('.stages__nav_indicator-item');
    const prevBtn = document.getElementById('.stages__nav-btn1');
    const nextBtn = document.getElementById('.stages__nav-btn2');

    showSlide(currentSlide);

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
                indicators[i].style.backgroundColor = 'black';
            } else {
                slide.style.display = 'none';
                indicators[i].style.backgroundColor = '#ccc';
            }
        });
    }
}

const btn1 = document.querySelector('.participants__top_nav-btn1');
const btn2 = document.querySelector('.participants__top_nav-btn2');
const navValue = document.querySelector('.participants__top_nav-value');
let count = 1;
btn1.addEventListener('click', () => {
    if (count <= 5) {
        count++;
        navValue.textContent = count;
        btn2.removeAttribute('disabled');
        btn2.style.backgroundColor = 'black';
        btn2.style.border = '1px solid black';
    } else {
        btn1.setAttribute('disabled', 'true');
        btn1.style.backgroundColor = '#ccc';
        btn1.style.border = '1px solid #ccc';

    }
});
btn2.addEventListener('click', () => {
    if (count >= 2) {
        count--;
        navValue.textContent = count;
        btn1.removeAttribute('disabled');
        btn1.style.backgroundColor = 'black';
        btn1.style.border = '1px solid black';
    } else {
        btn2.setAttribute('disabled', 'true');
        btn2.style.backgroundColor = '#ccc';
        btn2.style.border = '1px solid #ccc';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const participantsCardsCard = document.querySelectorAll(".participants__cards_card");
    const visibleCards = [participantsCardsCard[0], participantsCardsCard[1], participantsCardsCard[2]];
    let currentIndex = 0;

    function updateCarousel() {
        visibleCards.forEach((card, index) => {
            card.style.order = index;
        });
    }

    setInterval(() => {
        currentIndex = (currentIndex + 1) % participantsCardsCard.length;
        const nextCard = participantsCardsCard[currentIndex];
        const removedCard = visibleCards.shift();
        visibleCards.push(nextCard);

        // Update order of visible cards
        updateCarousel();

        // Update classes
        removedCard.classList.remove("active");
        nextCard.classList.add("active");
    }, 4000);
});




