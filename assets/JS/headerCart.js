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

////////////////////////////////////// ADD PRODUCT TO CART //////////////////////////////////////

let sideNavcartEmptyAlert = document.querySelector('.sideNav__cart__empty-cart');
let sideNavCartBox = document.querySelector('.sideNav__cart__list');
let sideNavCartBoxList = document.querySelector('.sideNav__cart__list__ul');
let cartCounterLabel = document.querySelector('#product-counter');
let sideNavTotalPriceBox = document.querySelector('.sideNav__cart__list__total-price span');
let productsArray = [];

// Set Products In Localstorage

function setLocalItems(productsArray){
    localStorage.setItem('cart',JSON.stringify(productsArray));
    checkArray(productsArray)
};

// Check Empty Array

function checkArray(productsArray){

    
    if(productsArray.length == 0){
        cartCounterLabel.innerHTML = 0
        localStorage.clear();
        emptyAlert();
    }else{
        cardGenerator();
    };
};

// Alert For Empty Array

function emptyAlert(){
    sideNavCartBox.style.display = 'none';
    sideNavcartEmptyAlert.style.display = 'flex';
};

// Cart Generator

function cardGenerator(){
    sideNavcartEmptyAlert.style.display = 'none';
    sideNavCartBox.style.display = 'block';

    sideNavCartBoxList.innerHTML = "";
    productsArray = JSON.parse(localStorage.getItem('cart'));

    // this section shows how many items are in the shopping cart
    cartCounterLabel.innerHTML = productsArray.length;

    productsArray.forEach(function(product){
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
    productCounterHandeler();
    calcTotalPrice ();
};

// Calculate The Percentage

function percentage(product){
    let finalPrice = product.price * product.discount / 100
    finalPrice += ''
    return finalPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Set , Between Prices

function priceConversion(number){
    number += ''
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Calc Total Price

function calcTotalPrice () {
    let totalPriceValue = 0;
    let discountProduct = 0;
    let noDiscountProduct = 0;
    productsArray = JSON.parse(localStorage.getItem('cart'));

    productsArray.forEach(function(product){
        if(product.discount == 0){
            noDiscountProduct += Number(product.count) * product.price;            
        }else{
            discountProduct += Number(product.count) * (product.price * product.discount / 100)
        }
    });
    totalPriceValue = discountProduct + noDiscountProduct;
    sideNavTotalPriceBox.innerHTML = ''
    sideNavTotalPriceBox.insertAdjacentHTML('afterbegin','<bdi>'+ priceConversion(totalPriceValue) +'&nbsp;<span class="">تومان</span></bdi>');
};

// Product Counter Of Side Nav

function productCounterHandeler(){
    let productCounter = document.querySelectorAll('.sideNav__cart__list__ul__item__product-quantity');
    
    productCounter.forEach(function(item){
        item.addEventListener('change',function(event){
            changeCounter(event.target.dataset.id ,event.target.value);
        });
    });

    function changeCounter (productID ,productCountValue){

        productsArray.forEach(function(product){
            if( product.id == productID){
                product.count = productCountValue;
            }
        });
        setLocalItems(productsArray);
    };  
};

// Remove Items From SideNav List

function removeProductSideNav(product){
    let sideNavRemoveBTN = document.querySelector('.sideNav__cart__list__ul__item--remove-btn');

    sideNavRemoveBTN.addEventListener('click',function(){
        removeItemHandeler(product.id)
    });
};
function removeItemHandeler(productID){
    productsArray = productsArray.filter(function(product){
        return product.id !== productID;
    });
    setLocalItems(productsArray);
};

// Load Handeler

window.addEventListener('load',loadHandeler);
function loadHandeler(productsArray){

    productsArray = JSON.parse(localStorage.getItem('cart'));

    if(!productsArray){
        emptyAlert();
    }else{
        cardGenerator();
    };
};