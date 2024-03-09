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

//Categories Slider Styles

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

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
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


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 5,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',

    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 4,
        },
        1140: {
            slidesPerView: 5,
        }

    },

  });
