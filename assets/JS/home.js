let $ = document;

let openLoginNav = $.querySelector('#open-login-nav');
let closeLoginNav = $.querySelector('#close-login-nav');
let sideNavLogin = $.querySelector('.sideNav__login');

let openCartNav = $.querySelector('#open-cart-nav');
let closeCartNav = $.querySelector('#close-cart-nav');
let sideNavCart = $.querySelector('.sideNav__cart');

let headerDropDownMenu = $.querySelectorAll('.menu__box__items__dropdown');

let layer = $.querySelector('.layer');

let productImg = $.querySelectorAll('.product-img');


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


//   Set the layer for bg (hover dropdown menu)

headerDropDownMenu.forEach(function(items){
    items.addEventListener('mouseenter',function(){
        layer.classList.add("dropdown__menu__layer--active");
    });

    items.addEventListener('mouseleave',function(){
        layer.classList.remove("dropdown__menu__layer--active");
    });
});


//   Set the another img for cards by hover

productImg.forEach(function(img){

    let orgSrc = img.src;
    let newSrc = './assets/images/photo2.jpg';

    img.addEventListener('mouseenter',function(){
        img.src = newSrc
    });

    img.addEventListener('mouseleave',function(){
        img.src = orgSrc
    });
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
