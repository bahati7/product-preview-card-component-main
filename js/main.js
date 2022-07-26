// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    // origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.main__card__img, .main__card__text`, {
    origin:'top',
    interval: 200
})