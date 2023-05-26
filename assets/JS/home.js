let $ = document;

let openLoginNav= $.querySelector('#open-login-nav');
let closeLoginNav = $.querySelector('#close-login-nav');
let sideNavLogin = $.querySelector('.sideNav__login');
let layer = $.querySelector('#layer');

console.log(openLoginNav)
console.log(closeLoginNav)
console.log(sideNavLogin )

// Open the login nav

openLoginNav.addEventListener('click',openLoginNavHandeler);
function openLoginNavHandeler (){
    sideNavLogin.classList.add("open__sideNav__login");
    layer.classList.add("sideNav__login__layer--active");
};

// Close the login nav

closeLoginNav.addEventListener('click',closeLoginNavHandeler);
function closeLoginNavHandeler (){
    sideNavLogin.classList.remove("open__sideNav__login");
    layer.classList.remove("sideNav__login__layer--active");
};
