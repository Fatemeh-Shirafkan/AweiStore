let $ = document;

let openLoginNav= $.querySelector('#open-login-nav');
let closeLoginNav = $.querySelector('#close-login-nav');
let sideNavLogin = $.querySelector('.sideNav__login');

let openCartNav= $.querySelector('#open-cart-nav');
let closeCartNav = $.querySelector('#close-cart-nav');
let sideNavCart = $.querySelector('.sideNav__cart');


let layer = $.querySelector('#layer');


// Open/Close the login nav

openLoginNav.addEventListener('click', function (){
    sideNavLogin.classList.add("open__sideNav__login");
    layer.classList.add("sideNav__layer--active");
});

closeLoginNav.addEventListener('click', function (){
    sideNavLogin.classList.remove("open__sideNav__login");
    layer.classList.remove("sideNav__layer--active");
});

layer.addEventListener('click', function (){
    sideNavLogin.classList.remove("open__sideNav__login");
    layer.classList.remove("sideNav__layer--active");
});


// Open/Close the cart nav

openCartNav.addEventListener('click', function (){
    sideNavCart.classList.add("open__sideNav__cart");
    layer.classList.add("sideNav__layer--active");
});

closeCartNav.addEventListener('click', function (){
    sideNavCart.classList.remove("open__sideNav__cart");
    layer.classList.remove("sideNav__layer--active");
});

layer.addEventListener('click', function (){
    sideNavCart.classList.remove("open__sideNav__cart");
});


// Header slider

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
