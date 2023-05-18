document.addEventListener('DOMContentLoaded', () => {
    const carouselItems = document.querySelectorAll('.carousel')
    M.Carousel.init(carouselItems, {
        duration: 150,
        indicators: true
    })
});