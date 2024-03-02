var swiper = new Swiper(".headerSlider", {
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".categoriesSlider", {
    slidesPerView: 8,
    spaceBetween: 5,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".categories-pagination",
        clickable: true,
        // dynamicBullets: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 5,
        },
        1024: {
            slidesPerView: 7,
        },
        1140: {
            slidesPerView: 8,
        }

    },
});
