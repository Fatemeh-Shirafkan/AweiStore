let $ = document;

let openLoginNav = $.querySelector('#open-login-nav');
let closeLoginNav = $.querySelector('#close-login-nav');
let sideNavLogin = $.querySelector('.sideNav__login');

let openCartNav = $.querySelector('#open-cart-nav');
let closeCartNav = $.querySelector('#close-cart-nav');
let sideNavCart = $.querySelector('.sideNav__cart');

let headerDropDownMenu = $.querySelectorAll('.menu__box__items__dropdown');

let layer = $.querySelector('.layer');

let productCardImg = $.querySelectorAll('.product-img');

let menu = $.querySelector('#menu-row');
let scrollValue = null;


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


// Set the layer for bg (hover dropdown menu)

headerDropDownMenu.forEach(function(items){
    items.addEventListener('mouseenter',function(){
        layer.classList.add("dropdown__menu__layer--active");
    });

    items.addEventListener('mouseleave',function(){
        layer.classList.remove("dropdown__menu__layer--active");
    });
});


// Set the another img for cards by hover

productCardImg.forEach(function(img){

    let orgSrc = img.src;
    let newSrc = './assets/images/photo2.jpg';

    img.addEventListener('mouseenter',function(){
        img.src = newSrc
    });

    img.addEventListener('mouseleave',function(){
        img.src = orgSrc
    });
});


// Fixing the menu to the top with scroll

window.addEventListener('scroll',function(){

    if($.documentElement.scrollTop > 158){
        menu.style.position = 'fixed';
    }else{
        menu.style.position = 'inherit';  
    };
    
    if($.documentElement.scrollTop > 158){

        if($.documentElement.scrollTop > scrollValue){
            menu.style.top = '-80px';
        }else {
            menu.style.top = '0';
        }; 
    }
        scrollValue = $.documentElement.scrollTop;
    });
    

///////////////////////////////// PSEUDO DATABASE /////////////////////////////////

let allProducts ={

    headphone:{

        earphone:[
            {id: 1, title: 'T29P TWS Bluetooth Earphone', price: 1000000, img1:'./assets/images/products/headphone/earphone/T29P TWS Bluetooth Earphone/T29P TWS Bluetooth Earphone1.jpg', img2:'./assets/images/products/headphone/earphone/T29P TWS Bluetooth Earphone/T29P TWS Bluetooth Earphone2.jpg', img3:'./assets/images/products/headphone/earphone/T29P TWS Bluetooth Earphone/T29P TWS Bluetooth Earphone3.jpg', count: 1, },

            {id: 2, title: 'T36 TWS Stereo Earbuds', price: 1200000, img1:'./assets/images/products/headphone/earphone/T36 TWS Stereo Earbuds/T36 TWS Stereo Earbuds1.jpg', img2:'./assets/images/products/headphone/earphone/T36 TWS Stereo Earbuds/T36 TWS Stereo Earbuds2.jpg', img3:'./assets/images/products/headphone/earphone/T36 TWS Stereo Earbuds/T36 TWS Stereo Earbuds3.jpg', count: 1,},

            {id: 3, title: 'T55 Bluetooth Earphone', price: 990000, img1:'./assets/images/products/headphone/earphone/T55 Bluetooth Earphone/T55 Bluetooth Earphone1.jpg', img2:'./assets/images/products/headphone/earphone/T55 Bluetooth Earphone/T55 Bluetooth Earphone2.jpg', img3:'./assets/images/products/headphone/earphone/T55 Bluetooth Earphone/T55 Bluetooth Earphone3.jpg', count: 1,},

            {id: 4, title: 'T55 Bluetooth Earphone', price: 1500000, img1:'./assets/images/products/headphone/earphone/TA3 TWS ANC Earbuds/TA3 TWS ANC Earbuds1.jpg', img2:'./assets/images/products/headphone/earphone/TA3 TWS ANC Earbuds/TA3 TWS ANC Earbuds2.jpg', count: 1,},
        ],

        gaming:[
            {id: 1, title: 'A710BL Bluetooth Headset', price: 9500000, img1:'./assets/images/products/headphone/gaming/A710BL Bluetooth Headset/A710BL Bluetooth Headset1.jpg', img2:'./assets/images/products/headphone/gaming/A710BL Bluetooth Headset/A710BL Bluetooth Headset2.jpg', img3:'./assets/images/products/headphone/gaming/A710BL Bluetooth Headset/A710BL Bluetooth Headset3.jpg', count: 1, },

            {id: 2, title: 'ES-770i Bluetooth Headset', price: 2100000, img1:'./assets/images/products/headphone/gaming/ES-770i Bluetooth Headset/ES-770i Bluetooth Headset1.jpg', img2:'./assets/images/products/headphone/gaming/ES-770i Bluetooth Headset/ES-770i Bluetooth Headset2.jpg', count: 1, },
        ],
    },

    speaker:{

        protable:[
            {id: 1, title: 'Y280 Bluetooth Speaker', price: 1800000, img1:'./assets/images/products/speaker/protable/Y280 Bluetooth Speaker/Y280 Bluetooth Speaker1.jpg', img2:'./assets/images/products/speaker/protable/Y280 Bluetooth Speaker/Y280 Bluetooth Speaker2.jpg', img3:'./assets/images/products/speaker/protable/Y280 Bluetooth Speaker/Y280 Bluetooth Speaker3.jpg', count: 1,},

            {id: 2, title: 'Y668 Bluetooth Speaker', price: 1700000, img1:'./assets/images/products/speaker/protable/Y668 Bluetooth Speaker/Y668 Bluetooth Speaker1.jpg', img2:'./assets/images/products/speaker/protable/Y668 Bluetooth Speaker/Y668 Bluetooth Speaker2.jpg', img3:'./assets/images/products/speaker/protable/Y668 Bluetooth Speaker/Y668 Bluetooth Speaker3.jpg', count: 1,},

            {id: 3, title: 'Y669 Bluetooth Speaker', price: 2500000, img1:'./assets/images/products/speaker/protable/Y669 Bluetooth Speaker/Y669 Bluetooth Speaker1.jpg', img2:'./assets/images/products/speaker/protable/Y669 Bluetooth Speaker/Y669 Bluetooth Speaker2.jpg', img3:'./assets/images/products/speaker/protable/Y669 Bluetooth Speaker/Y669 Bluetooth Speaker3.jpg', count: 1,},
        ],

        sandbar:[
            {id: 1, title: 'Y999 Bluetooth Speaker', price: 3200000, img1:'./assets/images/products/speaker/sandbar/Y999 Bluetooth Speaker/Y999 Bluetooth Speaker1.jpg', img2:'./assets/images/products/speaker/sandbar/Y999 Bluetooth Speaker/Y999 Bluetooth Speaker2.jpg', img3:'./assets/images/products/speaker/sandbar/Y999 Bluetooth Speaker/Y999 Bluetooth Speaker3.jpg', count: 1,},
        ],
    },

};










