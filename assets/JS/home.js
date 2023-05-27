let $ = document;

let openLoginNav= $.querySelector('#open-login-nav');
let closeLoginNav = $.querySelector('#close-login-nav');
let sideNavLogin = $.querySelector('.sideNav__login');
let openCartNav= $.querySelector('#open-cart-nav');
let closeCartNav = $.querySelector('#close-cart-nav');
let sideNavCart = $.querySelector('.sideNav__cart');

let layer = $.querySelector('#layer');

// Open/Close the login nav

openLoginNav.addEventListener('click',openLoginNavHandeler);
function openLoginNavHandeler (){
    sideNavLogin.classList.add("open__sideNav__login");
    layer.classList.add("sideNav__layer--active");
};

closeLoginNav.addEventListener('click',closeLoginNavHandeler);
function closeLoginNavHandeler (){
    sideNavLogin.classList.remove("open__sideNav__login");
    layer.classList.remove("sideNav__layer--active");
};

// Open/Close the cart nav

openCartNav.addEventListener('click',openCartNavHandeler);
function openCartNavHandeler (){
    sideNavCart.classList.add("open__sideNav__cart");
    layer.classList.add("sideNav__layer--active");
};

closeCartNav.addEventListener('click',closeCartNavHandeler);
function closeCartNavHandeler (){
    sideNavCart.classList.remove("open__sideNav__cart");
    layer.classList.remove("sideNav__layer--active");
};
