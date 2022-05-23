let showMore = document.querySelector('.show-more');
let cardsWrapperMore = document.querySelector('.cards-wrapper-more');
let cards = document.querySelector('#cards');

showMore.onclick = function () {
    gsap.to(cardsWrapperMore, {
        display: "flex",
        opacity: 1,
        duration: 1,
    });

    gsap.to(cards, {
        margin: 0,
    });

    showMore.remove();
}