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
    

// HEADPHONE PREVIEW SECTION

let headphoneProductPreview = document.querySelector('#product-preview-headphone');
let headphonePreviewCounter = 0;
let headphonePreviewLoadSpeed = 3000; 

let headphonePreview = [];

headphonePreview = allProducts.filter (function(product){
    if(headphonePreviewCounter >= 5){
        return
    }
    headphonePreviewCounter++
    return product.category == 'هدفون'
});
console.log(headphonePreview);
headphonePreview.forEach(function(product){

    headphonePreviewLoadSpeed = headphonePreviewLoadSpeed - 400

    if(product.discount == 0){
        headphoneProductPreview.insertAdjacentHTML('afterbegin','<div class="col product__card aos-init aos-animate" data-aos="fade-up" data-aos-duration="'+ headphonePreviewLoadSpeed +'"><div class="product__card__content"><div class="product__card__img"><a href="./product.html?id=' + product.address + '" class="parent-discount-label"><img class="product-img-front" width="400" height="400" src="'+ product.images[0] +'" alt="product img" loading="lazy"><img class="product-img-back" width="400" height="400" src="'+ product.images[1] +'" alt="product img" loading="lazy"></a></div><div class="product__card__title"><a href="./product.html?id=' + product.address + '"class="product__card__title--text">'+ product.title +'</a></div><div class="product__card__prices"><bdi class="product__card__new-price"> <span>تومان</span>'+ priceConversion(product.price) +'</bdi></div><div class="product__card__footer"><a href="" class="product__card__footer__cart-btn"><svg class="product__card__footer__cart-btn--animation" width="25px" height="25px" viewBox="0 0 32 32"><circle style="fill:none;stroke:#FEF200;stroke-width:2;stroke-miterlimit:10;" cx="22" cy="24" r="2"></circle><circle style="fill:none;stroke:#FEF200;stroke-width:2;stroke-miterlimit:10;" cx="13" cy="24" r="2"></circle><path style="fill:#FEF200;stroke:#FEF200;" d="M10.998,10l0.497,2h13.65l-1.909,7H11.781L9.159,8.515C8.937,7.625,8.137,7,7.219,7H5C4.448,7,4,7.448,4,8c0,0.552,0.448,1,1,1h2.219l2.621,10.485c0.223,0.89,1.023,1.515,1.94,1.515h11.455c0.902,0,1.692-0.604,1.93-1.474L27.764,10H10.998z"></path></svg></a><a href="" class="product__card__footer__like-btn"><svg fill="#DC3545" width="20px" height="20px" viewBox="0 0 32 32"><path class="bentblocks_een" d="M21.081,6C23.752,6.031,26,8.766,26,12c0,5.106-6.47,10.969-10.001,13.593C12.466,22.974,6,17.12,6,12c0-3.234,2.248-5.969,4.918-6C13.586,6.175,13.926,6.801,16,8.879C18.069,6.806,18.418,6.173,21.081,6M20.911,4.006L20.912,4C18.993,4,17.259,4.785,16,6.048C14.741,4.785,13.007,4,11.088,4l0.001,0.006C7.044,3.936,4,7.719,4,12c0,8,11.938,16,11.938,16h0.124C16.062,28,28,20,28,12C28,7.713,24.951,3.936,20.911,4.006z"></path></svg></a></div></div>');   
    }else{
        headphoneProductPreview.insertAdjacentHTML('afterbegin','<div class="col product__card aos-init aos-animate" data-aos="fade-up" data-aos-duration="'+ headphonePreviewLoadSpeed +'"><div class="product__card__content"><div class="product__card__img"><a href="./product.html?id=' + product.address + '" class="parent-discount-label"><span class="product__card__img__discount-label">'+ product.discount +'%</span><img class="product-img-front" width="400" height="400" src="'+ product.images[0] +'" alt="product img" loading="lazy"><img class="product-img-back" width="400" height="400" src="'+ product.images[1] +'" alt="product img" loading="lazy"></a></div><div class="product__card__title"><a href="./product.html?id=' + product.address + '"class="product__card__title--text">'+ product.title +'</a></div><div class="product__card__prices"><bdi class="product__card__new-price"> <span>تومان</span>'+ percentage(product) +'</bdi><bdi class="product__card__previous-price"> <span>تومان</span>'+ priceConversion(product.price) +'</bdi></div><div class="product__card__footer"><a href="" class="product__card__footer__cart-btn"><svg class="product__card__footer__cart-btn--animation" width="25px" height="25px" viewBox="0 0 32 32"><circle style="fill:none;stroke:#FEF200;stroke-width:2;stroke-miterlimit:10;" cx="22" cy="24" r="2"></circle><circle style="fill:none;stroke:#FEF200;stroke-width:2;stroke-miterlimit:10;" cx="13" cy="24" r="2"></circle><path style="fill:#FEF200;stroke:#FEF200;" d="M10.998,10l0.497,2h13.65l-1.909,7H11.781L9.159,8.515C8.937,7.625,8.137,7,7.219,7H5C4.448,7,4,7.448,4,8c0,0.552,0.448,1,1,1h2.219l2.621,10.485c0.223,0.89,1.023,1.515,1.94,1.515h11.455c0.902,0,1.692-0.604,1.93-1.474L27.764,10H10.998z"></path></svg></a><a href="" class="product__card__footer__like-btn"><svg fill="#DC3545" width="20px" height="20px" viewBox="0 0 32 32"><path class="bentblocks_een" d="M21.081,6C23.752,6.031,26,8.766,26,12c0,5.106-6.47,10.969-10.001,13.593C12.466,22.974,6,17.12,6,12c0-3.234,2.248-5.969,4.918-6C13.586,6.175,13.926,6.801,16,8.879C18.069,6.806,18.418,6.173,21.081,6M20.911,4.006L20.912,4C18.993,4,17.259,4.785,16,6.048C14.741,4.785,13.007,4,11.088,4l0.001,0.006C7.044,3.936,4,7.719,4,12c0,8,11.938,16,11.938,16h0.124C16.062,28,28,20,28,12C28,7.713,24.951,3.936,20.911,4.006z"></path></svg></a></div></div>');   
    }
});

// SPEAKER PREVIEW SECTION 

let spaekerProductPreview = document.querySelector('#product-preview-speaker');
let speakerPreviewLoadSpeed = 600; 
let speakerPreview = [];

speakerPreview = allProducts.filter (function(product){
    return product.category == 'اسپیکر'
});

speakerPreview.forEach(function(product){

    speakerPreviewLoadSpeed = speakerPreviewLoadSpeed + 400
    if(product.discount == 0){
        spaekerProductPreview.insertAdjacentHTML('afterbegin','<div class="col product__card aos-init aos-animate" data-aos="fade-up" data-aos-duration="'+ speakerPreviewLoadSpeed +'"><div class="product__card__content"><div class="product__card__img"><a href="./product.html?id=' + product.address + '" class="parent-discount-label"><img class="product-img-front" width="400" height="400" src="'+ product.images[0] +'" alt="product img" loading="lazy"><img class="product-img-back" width="400" height="400" src="'+ product.images[1] +'" alt="product img" loading="lazy"></a></div><div class="product__card__title"><a href="./product.html?id=' + product.address + '"class="product__card__title--text">'+ product.title +'</a></div><div class="product__card__prices"><bdi class="product__card__new-price"> <span>تومان</span>'+ priceConversion(product.price) +'</bdi></div><div class="product__card__footer"><a href="" class="product__card__footer__cart-btn"><svg class="product__card__footer__cart-btn--animation" width="25px" height="25px" viewBox="0 0 32 32"><circle style="fill:none;stroke:#FEF200;stroke-width:2;stroke-miterlimit:10;" cx="22" cy="24" r="2"></circle><circle style="fill:none;stroke:#FEF200;stroke-width:2;stroke-miterlimit:10;" cx="13" cy="24" r="2"></circle><path style="fill:#FEF200;stroke:#FEF200;" d="M10.998,10l0.497,2h13.65l-1.909,7H11.781L9.159,8.515C8.937,7.625,8.137,7,7.219,7H5C4.448,7,4,7.448,4,8c0,0.552,0.448,1,1,1h2.219l2.621,10.485c0.223,0.89,1.023,1.515,1.94,1.515h11.455c0.902,0,1.692-0.604,1.93-1.474L27.764,10H10.998z"></path></svg></a><a href="" class="product__card__footer__like-btn"><svg fill="#DC3545" width="20px" height="20px" viewBox="0 0 32 32"><path class="bentblocks_een" d="M21.081,6C23.752,6.031,26,8.766,26,12c0,5.106-6.47,10.969-10.001,13.593C12.466,22.974,6,17.12,6,12c0-3.234,2.248-5.969,4.918-6C13.586,6.175,13.926,6.801,16,8.879C18.069,6.806,18.418,6.173,21.081,6M20.911,4.006L20.912,4C18.993,4,17.259,4.785,16,6.048C14.741,4.785,13.007,4,11.088,4l0.001,0.006C7.044,3.936,4,7.719,4,12c0,8,11.938,16,11.938,16h0.124C16.062,28,28,20,28,12C28,7.713,24.951,3.936,20.911,4.006z"></path></svg></a></div></div>');
    }else{
        spaekerProductPreview.insertAdjacentHTML('afterbegin','<div class="col product__card aos-init aos-animate" data-aos="fade-up" data-aos-duration="'+ speakerPreviewLoadSpeed +'"><div class="product__card__content"><div class="product__card__img"><a href="./product.html?id=' + product.address + '" class="parent-discount-label"><span class="product__card__img__discount-label">'+ product.discount +'%</span><img class="product-img-front" width="400" height="400" src="'+ product.images[0] +'" alt="product img" loading="lazy"><img class="product-img-back" width="400" height="400" src="'+ product.images[1] +'" alt="product img" loading="lazy"></a></div><div class="product__card__title"><a href="./product.html?id=' + product.address + '"class="product__card__title--text">'+ product.title +'</a></div><div class="product__card__prices"><bdi class="product__card__new-price"> <span>تومان</span>'+ percentage(product) +'</bdi><bdi class="product__card__previous-price"> <span>تومان</span>'+ priceConversion(product.price) +'</bdi></div><div class="product__card__footer"><a href="" class="product__card__footer__cart-btn"><svg class="product__card__footer__cart-btn--animation" width="25px" height="25px" viewBox="0 0 32 32"><circle style="fill:none;stroke:#FEF200;stroke-width:2;stroke-miterlimit:10;" cx="22" cy="24" r="2"></circle><circle style="fill:none;stroke:#FEF200;stroke-width:2;stroke-miterlimit:10;" cx="13" cy="24" r="2"></circle><path style="fill:#FEF200;stroke:#FEF200;" d="M10.998,10l0.497,2h13.65l-1.909,7H11.781L9.159,8.515C8.937,7.625,8.137,7,7.219,7H5C4.448,7,4,7.448,4,8c0,0.552,0.448,1,1,1h2.219l2.621,10.485c0.223,0.89,1.023,1.515,1.94,1.515h11.455c0.902,0,1.692-0.604,1.93-1.474L27.764,10H10.998z"></path></svg></a><a href="" class="product__card__footer__like-btn"><svg fill="#DC3545" width="20px" height="20px" viewBox="0 0 32 32"><path class="bentblocks_een" d="M21.081,6C23.752,6.031,26,8.766,26,12c0,5.106-6.47,10.969-10.001,13.593C12.466,22.974,6,17.12,6,12c0-3.234,2.248-5.969,4.918-6C13.586,6.175,13.926,6.801,16,8.879C18.069,6.806,18.418,6.173,21.081,6M20.911,4.006L20.912,4C18.993,4,17.259,4.785,16,6.048C14.741,4.785,13.007,4,11.088,4l0.001,0.006C7.044,3.936,4,7.719,4,12c0,8,11.938,16,11.938,16h0.124C16.062,28,28,20,28,12C28,7.713,24.951,3.936,20.911,4.006z"></path></svg></a></div></div>');
    };
});

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