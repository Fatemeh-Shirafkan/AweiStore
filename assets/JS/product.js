///////////////////////////////// PSEUDO DATABASE /////////////////////////////////

let allProducts =[
    {id: 1, 
    title: 'T29P TWS Bluetooth Earphone', 
    price: 1000000, 
    images:['./assets/images/products/headphone/earphone/T29PTWSBluetoothEarphone/T29PTWSBluetoothEarphone1.jpg','./assets/images/products/headphone/earphone/T29PTWSBluetoothEarphone/T29PTWSBluetoothEarphone2.jpg','./assets/images/products/headphone/earphone/T29PTWSBluetoothEarphone/T29PTWSBluetoothEarphone3.jpg',],
    count: 1, 
    address: 'T29P-TWS-Bluetooth-Earphone',
    category: 'هدفون',
    subCategory: 'ایرفون',
    discount: 0,},

    {id: 2, 
    title: 'T36 TWS Stereo Earbuds', 
    price: 1200000, 
    images:['./assets/images/products/headphone/earphone/T36TWSStereoEarbuds/T36TWSStereoEarbuds1.jpg','./assets/images/products/headphone/earphone/T36TWSStereoEarbuds/T36TWSStereoEarbuds2.jpg','./assets/images/products/headphone/earphone/T36TWSStereoEarbuds/T36TWSStereoEarbuds3.jpg',],
    count: 1,
    address: 'T36-TWS-Stereo-Earbuds',
    category: 'هدفون',
    subCategory: 'ایرفون',
    discount: 0,},

    {id: 3, 
    title: 'T55 Bluetooth Earphone', 
    price: 990000, 
    images:['./assets/images/products/headphone/earphone/T55BluetoothEarphone/T55BluetoothEarphone1.jpg','./assets/images/products/headphone/earphone/T55BluetoothEarphone/T55BluetoothEarphone2.jpg','./assets/images/products/headphone/earphone/T55BluetoothEarphone/T55BluetoothEarphone3.jpg',],
    count: 1,
    address: 'T55-Bluetooth-Earphone',
    category: 'هدفون',
    subCategory: 'ایرفون',
    discount: 0,},

    {id: 4, 
    title: 'T55 Bluetooth Earphone', 
    price: 1500000, 
    images:['./assets/images/products/headphone/earphone/TA3TWSANCEarbuds/TA3TWSANCEarbuds1.jpg','./assets/images/products/headphone/earphone/TA3TWSANCEarbuds/TA3TWSANCEarbuds2.jpg',],
    count: 1,
    address: 'TA3-TWS-ANC-Earbuds',
    category: 'هدفون',
    subCategory: 'ایرفون',
    discount: 40,},

    {id: 5, 
    title: 'A710BL Bluetooth Headset', 
    price: 9500000, 
    images:['./assets/images/products/headphone/gaming/A710BLBluetoothHeadset/A710BLBluetoothHeadset1.jpg','./assets/images/products/headphone/gaming/A710BLBluetoothHeadset/A710BLBluetoothHeadset2.jpg','./assets/images/products/headphone/gaming/A710BLBluetoothHeadset/A710BLBluetoothHeadset3.jpg',],
    count: 1, 
    address: 'A710BL-Bluetooth-Headset',
    category: 'هدفون',
    subCategory: 'گیمینگ',
    discount: 20,},

    {id: 6, 
    title: 'ES-770i Bluetooth Headset', 
    price: 2100000, 
    images:['./assets/images/products/headphone/gaming/ES-770iBluetoothHeadset/ES-770iBluetoothHeadset1.jpg','./assets/images/products/headphone/gaming/ES-770iBluetoothHeadset/ES-770iBluetoothHeadset2.jpg',],
    count: 1, 
    address: 'ES-770i-Bluetooth-Headset',
    category: 'هدفون',
    subCategory: 'گیمینگ',
    discount: 0,},

    {id: 7, 
    title: 'Y280 Bluetooth Speaker', 
    price: 1800000, 
    images:['./assets/images/products/speaker/portable/Y280BluetoothSpeaker/Y280BluetoothSpeaker1.jpg','./assets/images/products/speaker/portable/Y280BluetoothSpeaker/Y280BluetoothSpeaker2.jpg','./assets/images/products/speaker/portable/Y280BluetoothSpeaker/Y280BluetoothSpeaker3.jpg',],
    count: 1,
    address: 'Y28-Bluetooth-Speaker',
    category: 'اسپیکر',
    subCategory: 'قابل-حمل',
    discount: 0,},

    {id: 8, 
    title: 'Y668 Bluetooth Speaker', 
    price: 1700000, 
    images:['./assets/images/products/speaker/portable/Y668BluetoothSpeaker/Y668BluetoothSpeaker1.jpg','./assets/images/products/speaker/portable/Y668BluetoothSpeaker/Y668BluetoothSpeaker2.jpg','./assets/images/products/speaker/portable/Y668BluetoothSpeaker/Y668BluetoothSpeaker3.jpg',],
    count: 1,
    address: 'Y668-Bluetooth-Speaker',
    category: 'اسپیکر',
    subCategory: 'قابل-حمل',
    discount: 22,},

    {id: 9, 
    title: 'Y669 Bluetooth Speaker', 
    price: 2500000, 
    images:['./assets/images/products/speaker/portable/Y669BluetoothSpeaker/Y669BluetoothSpeaker1.jpg', './assets/images/products/speaker/portable/Y669BluetoothSpeaker/Y669BluetoothSpeaker2.jpg', './assets/images/products/speaker/portable/Y669BluetoothSpeaker/Y669BluetoothSpeaker3.jpg', ],
    count: 1,
    address: 'Y669-Bluetooth-Speaker',
    category: 'اسپیکر',
    subCategory: 'قابل-حمل',
    discount: 18,},

    {id: 10, 
    title: 'Y330 Bluetooth Speaker', 
    price: 2500000, 
    images:['./assets/images/products/speaker/portable/Y330BluetoothSpeaker/Y330BluetoothSpeaker1.jpg','./assets/images/products/speaker/portable/Y330BluetoothSpeaker/Y330BluetoothSpeaker2.jpg', './assets/images/products/speaker/portable/Y330BluetoothSpeaker/Y330BluetoothSpeaker3.jpg',  ],
    count: 1,
    address: 'Y330-Bluetooth-Speaker',
    category: 'اسپیکر',
    subCategory: 'قابل-حمل',
    discount: 0,},    

    {id: 11, 
    title: 'Y999 Bluetooth Speaker', 
    price: 3200000, 
    images:['./assets/images/products/speaker/sandbar/Y999BluetoothSpeaker/Y999BluetoothSpeaker1.jpg','./assets/images/products/speaker/sandbar/Y999BluetoothSpeaker/Y999BluetoothSpeaker2.jpg', './assets/images/products/speaker/sandbar/Y999BluetoothSpeaker/Y999BluetoothSpeaker3.jpg', ],
    count: 1, 
    address: 'Y999-Bluetooth-Speaker',
    category: 'اسپیکر',
    subCategory: 'ساندبار',
    discount: 30,},
];

// GET URL LOCATION

let locationSearch = location.search;
let locationSearchParams = new URLSearchParams(locationSearch);
let userIDParam = locationSearchParams.get('id');

// FIND THE PRODUCT

let targetProduct;

targetProduct = allProducts.find(function(product){
    return product.address == userIDParam
});

// CHANGE THE BRIDCRUMB OF PAGE ACCORDING TO THE ADDRESS

let breadCrumbCategory = document.querySelector('#breadCrumb-category');
let breadCrumbSubCategory = document.querySelector('#breadCrumb-subCategory');
let breadCrumbTargetProduct = document.querySelector('#breadCrumb-targetProduct');

breadCrumbCategory.innerHTML = "/ " + (targetProduct.category);
breadCrumbSubCategory.innerHTML ="/ " + (targetProduct.subCategory).replace('-',' ');
breadCrumbTargetProduct.innerHTML ="/ " + targetProduct.title;

breadCrumbCategory.setAttribute("href","./store.html?id=" + targetProduct.category );
breadCrumbSubCategory.setAttribute("href","./store.html?id=" + targetProduct.subCategory );

// CHANGE THE TITLE

let productTitle = document.querySelector('.product__title');
productTitle.innerHTML = targetProduct.title


// PRODUCT IMG HOVER FEATURE 

let productImgBox = document.querySelector('.product__img');
let productImg = document.querySelector('.product__img img');
let addProductInterest = document.querySelector('.add__product__interest');
let addProductInterestIcon = document.querySelector('.add__product__interest__icon');
productImg.src = targetProduct.images[0]

productImgBox.addEventListener('mousemove', function(event){
    productImg.style.transform = 'scale(2)';
    productImg.style.transformOrigin = `${event.offsetX}px ${event.offsetY}px`;
});

productImgBox.addEventListener('mouseleave', function(){
    productImg.style.transform = "scale(1)";
    productImg.style.transformOrigin = "center center";
});

addProductInterest.addEventListener('click', function(){
    addProductInterestIcon.classList.toggle('add__product__interest-active');
});

// ADD PRICE FOR PRODUCT

let productBox = document.querySelector('.product__price');

if(targetProduct.discount == 0){
    productBox.insertAdjacentHTML('afterbegin','<bdi class="product__price-new">' + priceConversion(targetProduct.price) + ' &nbsp;<span class="">تومان</span></bdi>');
}else{
    productBox.insertAdjacentHTML('afterbegin','<del class="product__price-old">' + priceConversion(targetProduct.price) + '&nbsp;<span class="">تومان</span></del><bdi class="product__price-new">' + percentage(targetProduct) + ' &nbsp;<span class="">تومان</span></bdi>');
};

// CALCULATE THE PERCENTAGE

function percentage(product){
    let finalPrice = product.price * product.discount / 100
    finalPrice += ''
    return finalPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// SET , BETWEEN PRICES

function priceConversion(number){
    number += ''
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// ADD IMAGES PRODUCT TO DOM

let productImages = document.querySelector('.product__imgages');

targetProduct.images.forEach(function(img){
    productImages.insertAdjacentHTML('afterbegin','<div class="col-3 product__img__item"><img src="' + img + '" alt="" loading="lazy"></div>');
});

// SET ONCLICK FOR PRODUCT IMAGES

let productImagesItems = document.querySelectorAll('.product__img__item');

productImagesItems.forEach(function(item){
    item.addEventListener('click',function(event){
        productImg.src = event.target.src
    })
});

// TOGGLE TAB OF COMMENTS & DESCRIPTION

let tabBtns = document.querySelectorAll(".tab__wrapper__list__item");
let contents = document.querySelectorAll(".content__wrapper");
let activeBtn = null;
let activeContent = null;

for(let i = 0 ;i < tabBtns.length; i++){

    tabBtns[i].addEventListener("click", function(){
        activeBtn = document.querySelector(".active.tab__wrapper__list__item");
        activeContent = document.querySelector(".active.content__wrapper");
        activeBtn.classList.remove("active");
        activeContent.classList.remove("active");
        tabBtns[i].classList.add("active");
        contents[i].classList.add("active");
    })
};

// RALATED PRODUCT

let counter = 0;
let relatedProduct ;

relatedProduct = allProducts.filter(function(product){
    return targetProduct.category == product.category; 
});

let ralatedProductBox = document.querySelector('.related__product__box');

relatedProduct.forEach(function(product){

    if(counter == 5){
        return
    }
    counter++

    if(product.discount == 0){
        noDiscountProduct(product);
    }else{
        discountProduct(product);
    };
});

function noDiscountProduct(product){
    ralatedProductBox.insertAdjacentHTML('afterbegin','<div class="col product__card aos-init aos-animate" data-aos="fade-up" data-aos-duration="1500"><div class="product__card__content"><div class="product__card__img"><a href="./product.html?id=' + product.address + '" class="parent-discount-label"><img class="product-img-front" width="400" height="400" src="'+ product.images[0] +'" alt="product img" loading="lazy"><img class="product-img-back" width="400" height="400" src="'+ product.images[1] +'" alt="product img" loading="lazy"></a></div><div class="product__card__title"><a href="./product.html?id=' + product.address + '"class="product__card__title--text">'+ product.title +'</a></div><div class="product__card__prices"><bdi class="product__card__new-price"> <span>تومان</span>'+ priceConversion(product.price) +'</bdi></div><div class="product__card__footer"><a href="" class="product__card__footer__cart-btn"><svg class="product__card__footer__cart-btn--animation" width="25px" height="25px" viewBox="0 0 32 32"><circle style="fill:none;stroke:#FEF200;stroke-width:2;stroke-miterlimit:10;" cx="22" cy="24" r="2"></circle><circle style="fill:none;stroke:#FEF200;stroke-width:2;stroke-miterlimit:10;" cx="13" cy="24" r="2"></circle><path style="fill:#FEF200;stroke:#FEF200;" d="M10.998,10l0.497,2h13.65l-1.909,7H11.781L9.159,8.515C8.937,7.625,8.137,7,7.219,7H5C4.448,7,4,7.448,4,8c0,0.552,0.448,1,1,1h2.219l2.621,10.485c0.223,0.89,1.023,1.515,1.94,1.515h11.455c0.902,0,1.692-0.604,1.93-1.474L27.764,10H10.998z"></path></svg></a><a href="" class="product__card__footer__like-btn"><svg fill="#DC3545" width="20px" height="20px" viewBox="0 0 32 32"><path class="bentblocks_een" d="M21.081,6C23.752,6.031,26,8.766,26,12c0,5.106-6.47,10.969-10.001,13.593C12.466,22.974,6,17.12,6,12c0-3.234,2.248-5.969,4.918-6C13.586,6.175,13.926,6.801,16,8.879C18.069,6.806,18.418,6.173,21.081,6M20.911,4.006L20.912,4C18.993,4,17.259,4.785,16,6.048C14.741,4.785,13.007,4,11.088,4l0.001,0.006C7.044,3.936,4,7.719,4,12c0,8,11.938,16,11.938,16h0.124C16.062,28,28,20,28,12C28,7.713,24.951,3.936,20.911,4.006z"></path></svg></a></div></div>');
};

function discountProduct(product){
    ralatedProductBox.insertAdjacentHTML('afterbegin','<div class="col product__card aos-init aos-animate" data-aos="fade-up" data-aos-duration="1500"><div class="product__card__content"><div class="product__card__img"><a href="./product.html?id=' + product.address + '" class="parent-discount-label"><span class="product__card__img__discount-label">'+ product.discount +'%</span><img class="product-img-front" width="400" height="400" src="'+ product.images[0] +'" alt="product img" loading="lazy"><img class="product-img-back" width="400" height="400" src="'+ product.images[1] +'" alt="product img" loading="lazy"></a></div><div class="product__card__title"><a href="./product.html?id=' + product.address + '"class="product__card__title--text">'+ product.title +'</a></div><div class="product__card__prices"><bdi class="product__card__new-price"> <span>تومان</span>'+ percentage(product) +'</bdi><bdi class="product__card__previous-price"> <span>تومان</span>'+ priceConversion(product.price) +'</bdi></div><div class="product__card__footer"><a href="" class="product__card__footer__cart-btn"><svg class="product__card__footer__cart-btn--animation" width="25px" height="25px" viewBox="0 0 32 32"><circle style="fill:none;stroke:#FEF200;stroke-width:2;stroke-miterlimit:10;" cx="22" cy="24" r="2"></circle><circle style="fill:none;stroke:#FEF200;stroke-width:2;stroke-miterlimit:10;" cx="13" cy="24" r="2"></circle><path style="fill:#FEF200;stroke:#FEF200;" d="M10.998,10l0.497,2h13.65l-1.909,7H11.781L9.159,8.515C8.937,7.625,8.137,7,7.219,7H5C4.448,7,4,7.448,4,8c0,0.552,0.448,1,1,1h2.219l2.621,10.485c0.223,0.89,1.023,1.515,1.94,1.515h11.455c0.902,0,1.692-0.604,1.93-1.474L27.764,10H10.998z"></path></svg></a><a href="" class="product__card__footer__like-btn"><svg fill="#DC3545" width="20px" height="20px" viewBox="0 0 32 32"><path class="bentblocks_een" d="M21.081,6C23.752,6.031,26,8.766,26,12c0,5.106-6.47,10.969-10.001,13.593C12.466,22.974,6,17.12,6,12c0-3.234,2.248-5.969,4.918-6C13.586,6.175,13.926,6.801,16,8.879C18.069,6.806,18.418,6.173,21.081,6M20.911,4.006L20.912,4C18.993,4,17.259,4.785,16,6.048C14.741,4.785,13.007,4,11.088,4l0.001,0.006C7.044,3.936,4,7.719,4,12c0,8,11.938,16,11.938,16h0.124C16.062,28,28,20,28,12C28,7.713,24.951,3.936,20.911,4.006z"></path></svg></a></div></div>');
};

// DESCRIPTION TITLE

let descriptionTitle = document.querySelector('.content__wrapper__description__feature');
descriptionTitle.innerHTML = targetProduct.title;

////////////////////////////////////// ADD PRODUCT TO CART //////////////////////////////////////

let addProductBtn = document.querySelector('.add__product__cart');
let sideNavcartEmptyAlert = document.querySelector('.sideNav__cart__empty-cart');
let sideNavCartBox = document.querySelector('.sideNav__cart__list');
let sideNavCartBoxList = document.querySelector('.sideNav__cart__list__ul');
let cartCounterLabel = document.querySelector('#product-counter');
let productCount = document.querySelector('.product__count');
let productArray = [];
let duplicateItem ;

addProductBtn.addEventListener('click',function(event){
    event.preventDefault();
    targetProduct.count = productCount.value;
    productArray.push(targetProduct);
    setLocalItems(productArray);
});

// Set Products In Localstorage

function setLocalItems (productArray){
    localStorage.setItem('cart',JSON.stringify(productArray));
    checkArray(productArray)
};

// Check Empty Array

function checkArray(productArray){

    duplicateItemHandeler (productArray)
    
    if(productArray.length == 0){
        localStorage.clear();
        emptyAlert();
    }else{
        cartGenerator();
    };
};

// Check Duplicate Item
// this section is for when the user click twice on the buy button of a product

function duplicateItemHandeler (productArray){

    duplicateItem = productArray.filter(function(product){
        return targetProduct.id == product.id
    });

    if(duplicateItem.length >= 2){
        productArray = productArray.filter(function(product){
            return targetProduct.id !== product.id
        });
        productArray.push(targetProduct);
        setLocalItems (productArray)
    };
};

function emptyAlert(){
    sideNavCartBox.style.display = 'none';
    sideNavcartEmptyAlert.style.display = 'flex';
};

function cartGenerator(){
    sideNavcartEmptyAlert.style.display = 'none';
    sideNavCartBox.style.display = 'block';

    sideNavCartBoxList.innerHTML = "";
    productArray = JSON.parse(localStorage.getItem('cart'));

    // this section shows how many items are in the shopping cart
    cartCounterLabel.innerHTML = productArray.length;

    productArray.forEach(function(product){
        // without discount 

        if(product.discount == 0){
            sideNavCartBoxList.insertAdjacentHTML('afterbegin','<li class="sideNav__cart__list__ul__item"><a href="./product.html?id=' + product.address + '" class="sideNav__cart__list__ul__item__product-img"><img width="90px" height="100px" src="' + product.images[0] + '" alt=""></a><div class="sideNav__cart__list__ul__item__product-info"><a class="sideNav__cart__list__ul__item__product-name" href="./product.html?id=' + product.address + '">' + product.title +'</a><input class="sideNav__cart__list__ul__item__product-quantity" type="number" min="1" max="10" data-id="'+ product.id +'" value="'+ product.count +'"><span class="sideNav__cart__list__ul__item__product-price"><bdi>' + priceConversion(product.price) + '&nbsp;<span class="">تومان</span></bdi></span></div><a href="#" class="sideNav__cart__list__ul__item--remove"><svg class="sideNav__cart__list__ul__item--remove-btn" width="15px" height="15px" viewBox="0 0 24 24" fill="none"><path d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414z" fill="#0D0D0D"/></svg></a></li>');
        }
        // with discount
        else{
            sideNavCartBoxList.insertAdjacentHTML('afterbegin','<li class="sideNav__cart__list__ul__item"><a href="./product.html?id=' + product.address + '" class="sideNav__cart__list__ul__item__product-img"><img width="90px" height="100px" src="' + product.images[0] + '" alt=""></a><div class="sideNav__cart__list__ul__item__product-info"><a class="sideNav__cart__list__ul__item__product-name" href="./product.html?id=' + product.address + '">' + product.title +'</a><input class="sideNav__cart__list__ul__item__product-quantity" type="number" min="1" max="10" data-id="'+ product.id +'" value="'+ product.count +'"><span class="sideNav__cart__list__ul__item__product-price"><bdi>' + percentage(product) + '&nbsp;<span class="">تومان</span></bdi></span></div><a href="#" class="sideNav__cart__list__ul__item--remove"><svg class="sideNav__cart__list__ul__item--remove-btn" width="15px" height="15px" viewBox="0 0 24 24" fill="none"><path d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414z" fill="#0D0D0D"/></svg></a></li>');
        };
        removeProductSideNav(product);
    });
    productCounterSideNavHandeler();
};

// Product Counter of Side Nav

function productCounterSideNavHandeler(){
    let productCounterSideNav = document.querySelectorAll('.sideNav__cart__list__ul__item__product-quantity');
    
    productCounterSideNav.forEach(function(item){
        item.addEventListener('change',function(event){
            changeCounter(event.target.dataset.id ,event.target.value);
        });
    });

    function changeCounter (productID ,productCountValue){

        productArray.forEach(function(product){
            if( product.id == productID){
                product.count = productCountValue;
            }
        });
        setLocalItems (productArray);
    };  
};

// Remove items from sideNav list

function removeProductSideNav(product){
    let sideNavReemoveBTN = document.querySelector('.sideNav__cart__list__ul__item--remove-btn');

    sideNavReemoveBTN.addEventListener('click',function(){
        removeItemHandeler(product.id)
    });
};

function removeItemHandeler(productID){
    productArray = productArray.filter(function(product){
        return product.id !== productID;
    });
    setLocalItems (productArray);
};



// LOAD HANDELER

window.addEventListener('load',loadHandeler);
function loadHandeler(productArray){

    productArray = JSON.parse(localStorage.getItem('cart'));

    if(!productArray){
        emptyAlert();
    }else{
        cartGenerator();
    };
};