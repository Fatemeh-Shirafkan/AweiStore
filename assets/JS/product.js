///////////////////////////////// PSEUDO DATABASE /////////////////////////////////

let allProducts =[
    {id: 1, 
    title: 'T29P TWS Bluetooth Earphone', 
    price: 1000000, 
    img1:'./assets/images/products/headphone/earphone/T29PTWSBluetoothEarphone/T29PTWSBluetoothEarphone1.jpg', 
    img2:'./assets/images/products/headphone/earphone/T29PTWSBluetoothEarphone/T29PTWSBluetoothEarphone2.jpg', 
    img3:'./assets/images/products/headphone/earphone/T29PTWSBluetoothEarphone/T29PTWSBluetoothEarphone3.jpg', 
    count: 1, 
    address: 'T29P-TWS-Bluetooth-Earphone',
    category: 'هدفون',
    subCategory: 'ایرفون',
    discount: 0,},

    {id: 2, 
    title: 'T36 TWS Stereo Earbuds', 
    price: 1200000, 
    img1:'./assets/images/products/headphone/earphone/T36TWSStereoEarbuds/T36TWSStereoEarbuds1.jpg', 
    img2:'./assets/images/products/headphone/earphone/T36TWSStereoEarbuds/T36TWSStereoEarbuds2.jpg', 
    img3:'./assets/images/products/headphone/earphone/T36TWSStereoEarbuds/T36TWSStereoEarbuds3.jpg', 
    count: 1,
    address: 'T36-TWS-Stereo-Earbuds',
    category: 'هدفون',
    subCategory: 'ایرفون',
    discount: 0,},

    {id: 3, 
    title: 'T55 Bluetooth Earphone', 
    price: 990000, 
    img1:'./assets/images/products/headphone/earphone/T55BluetoothEarphone/T55BluetoothEarphone1.jpg', 
    img2:'./assets/images/products/headphone/earphone/T55BluetoothEarphone/T55BluetoothEarphone2.jpg', 
    img3:'./assets/images/products/headphone/earphone/T55BluetoothEarphone/T55BluetoothEarphone3.jpg', 
    count: 1,
    address: 'T55-Bluetooth-Earphone',
    category: 'هدفون',
    subCategory: 'ایرفون',
    discount: 0,},

    {id: 4, 
    title: 'T55 Bluetooth Earphone', 
    price: 1500000, 
    img1:'./assets/images/products/headphone/earphone/TA3TWSANCEarbuds/TA3TWSANCEarbuds1.jpg', 
    img2:'./assets/images/products/headphone/earphone/TA3TWSANCEarbuds/TA3TWSANCEarbuds2.jpg', 
    count: 1,
    address: 'TA3-TWS-ANC-Earbuds',
    category: 'هدفون',
    subCategory: 'ایرفون',
    discount: 40,},

    {id: 5, 
    title: 'A710BL Bluetooth Headset', 
    price: 9500000, 
    img1:'./assets/images/products/headphone/gaming/A710BLBluetoothHeadset/A710BLBluetoothHeadset1.jpg', 
    img2:'./assets/images/products/headphone/gaming/A710BLBluetoothHeadset/A710BLBluetoothHeadset2.jpg', 
    img3:'./assets/images/products/headphone/gaming/A710BLBluetoothHeadset/A710BLBluetoothHeadset3.jpg', 
    count: 1, 
    address: 'A710BL-Bluetooth-Headset',
    category: 'هدفون',
    subCategory: 'گیمینگ',
    discount: 20,},

    {id: 6, 
    title: 'ES-770i Bluetooth Headset', 
    price: 2100000, 
    img1:'./assets/images/products/headphone/gaming/ES-770iBluetoothHeadset/ES-770iBluetoothHeadset1.jpg', 
    img2:'./assets/images/products/headphone/gaming/ES-770iBluetoothHeadset/ES-770iBluetoothHeadset2.jpg', 
    count: 1, 
    address: 'ES-770i-Bluetooth-Headset',
    category: 'هدفون',
    subCategory: 'گیمینگ',
    discount: 0,},

    {id: 7, 
    title: 'Y280 Bluetooth Speaker', 
    price: 1800000, 
    img1:'./assets/images/products/speaker/portable/Y280BluetoothSpeaker/Y280BluetoothSpeaker1.jpg', 
    img2:'./assets/images/products/speaker/portable/Y280BluetoothSpeaker/Y280BluetoothSpeaker2.jpg', 
    img3:'./assets/images/products/speaker/portable/Y280BluetoothSpeaker/Y280BluetoothSpeaker3.jpg', 
    count: 1,
    address: 'Y28-Bluetooth-Speaker',
    category: 'اسپیکر',
    subCategory: 'قابل-حمل',
    discount: 0,},

    {id: 8, 
    title: 'Y668 Bluetooth Speaker', 
    price: 1700000, 
    img1:'./assets/images/products/speaker/portable/Y668BluetoothSpeaker/Y668BluetoothSpeaker1.jpg', 
    img2:'./assets/images/products/speaker/portable/Y668BluetoothSpeaker/Y668BluetoothSpeaker2.jpg', 
    img3:'./assets/images/products/speaker/portable/Y668BluetoothSpeaker/Y668BluetoothSpeaker3.jpg', 
    count: 1,
    address: 'Y668-Bluetooth-Speaker',
    category: 'اسپیکر',
    subCategory: 'قابل-حمل',
    discount: 22,},

    {id: 9, 
    title: 'Y669 Bluetooth Speaker', 
    price: 2500000, 
    img1:'./assets/images/products/speaker/portable/Y669BluetoothSpeaker/Y669BluetoothSpeaker1.jpg', 
    img2:'./assets/images/products/speaker/portable/Y669BluetoothSpeaker/Y669BluetoothSpeaker2.jpg', 
    img3:'./assets/images/products/speaker/portable/Y669BluetoothSpeaker/Y669BluetoothSpeaker3.jpg', 
    count: 1,
    address: 'Y669-Bluetooth-Speaker',
    category: 'اسپیکر',
    subCategory: 'قابل-حمل',
    discount: 18,},

    {id: 10, 
    title: 'Y330 Bluetooth Speaker', 
    price: 2500000, 
    img1:'./assets/images/products/speaker/portable/Y330BluetoothSpeaker/Y330BluetoothSpeaker1.jpg', 
    img2:'./assets/images/products/speaker/portable/Y330BluetoothSpeaker/Y330BluetoothSpeaker2.jpg', 
    img3:'./assets/images/products/speaker/portable/Y330BluetoothSpeaker/Y330BluetoothSpeaker3.jpg', 
    count: 1,
    address: 'Y330-Bluetooth-Speaker',
    category: 'اسپیکر',
    subCategory: 'قابل-حمل',
    discount: 0,},    

    {id: 11, 
    title: 'Y999 Bluetooth Speaker', 
    price: 3200000, 
    img1:'./assets/images/products/speaker/sandbar/Y999BluetoothSpeaker/Y999BluetoothSpeaker1.jpg', 
    img2:'./assets/images/products/speaker/sandbar/Y999BluetoothSpeaker/Y999BluetoothSpeaker2.jpg', 
    img3:'./assets/images/products/speaker/sandbar/Y999BluetoothSpeaker/Y999BluetoothSpeaker3.jpg', 
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
productImg.src = targetProduct.img1

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
    productBox.insertAdjacentHTML('afterbegin','<del class="product__price-old">' + percentage(targetProduct) + '&nbsp;<span class="">تومان</span></del><bdi class="product__price-new">' + priceConversion(targetProduct.price) + ' &nbsp;<span class="">تومان</span></bdi>');
};

// CALCULATE THE PERCENTAGE

function percentage(product){
    let finalPrice = product.price * product.discount / 100
    finalPrice += ''
    return finalPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// CREATE , BETWEEN PRICES

function priceConversion(number){
    number += ''
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};


















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