///////////////////////////////// PSEUDO DATABASE /////////////////////////////////

// We have written our database here in two ways, but due to the difficulty of working with the first method, the second method is used during the project.

// let allProducts ={

//     headphone:{

//         earphone:[
//             {id: 1, 
//             title: 'T29P TWS Bluetooth Earphone', 
//             price: 1000000, img1:'./assets/images/products/headphone/earphone/T29P TWS Bluetooth Earphone/T29P TWS Bluetooth Earphone1.jpg', 
//             img2:'./assets/images/products/headphone/earphone/T29P TWS Bluetooth Earphone/T29P TWS Bluetooth Earphone2.jpg', 
//             img3:'./assets/images/products/headphone/earphone/T29P TWS Bluetooth Earphone/T29P TWS Bluetooth Earphone3.jpg', 
//             count: 1, 
//             address: 'T29P-TWS-Bluetooth-Earphone',},

//             {id: 2, 
//             title: 'T36 TWS Stereo Earbuds', 
//             price: 1200000, 
//             img1:'./assets/images/products/headphone/earphone/T36 TWS Stereo Earbuds/T36 TWS Stereo Earbuds1.jpg', 
//             img2:'./assets/images/products/headphone/earphone/T36 TWS Stereo Earbuds/T36 TWS Stereo Earbuds2.jpg', 
//             img3:'./assets/images/products/headphone/earphone/T36 TWS Stereo Earbuds/T36 TWS Stereo Earbuds3.jpg', 
//             count: 1,
//             address: 'T36-TWS-Stereo-Earbuds',},

//             {id: 3, 
//             title: 'T55 Bluetooth Earphone', 
//             price: 990000, 
//             img1:'./assets/images/products/headphone/earphone/T55 Bluetooth Earphone/T55 Bluetooth Earphone1.jpg', 
//             img2:'./assets/images/products/headphone/earphone/T55 Bluetooth Earphone/T55 Bluetooth Earphone2.jpg', 
//             img3:'./assets/images/products/headphone/earphone/T55 Bluetooth Earphone/T55 Bluetooth Earphone3.jpg', 
//             count: 1,
//             address: 'T55-Bluetooth-Earphone',},


//             {id: 4, 
//             title: 'T55 Bluetooth Earphone', 
//             price: 1500000, img1:'./assets/images/products/headphone/earphone/TA3 TWS ANC Earbuds/TA3 TWS ANC Earbuds1.jpg', 
//             img2:'./assets/images/products/headphone/earphone/TA3 TWS ANC Earbuds/TA3 TWS ANC Earbuds2.jpg', 
//             count: 1,
//             address: 'TA3-TWS-ANC-Earbuds',},
//         ],

//         gaming:[
//             {id: 5, 
//             title: 'A710BL Bluetooth Headset', 
//             price: 9500000, 
//             img1:'./assets/images/products/headphone/gaming/A710BL Bluetooth Headset/A710BL Bluetooth Headset1.jpg', 
//             img2:'./assets/images/products/headphone/gaming/A710BL Bluetooth Headset/A710BL Bluetooth Headset2.jpg', 
//             img3:'./assets/images/products/headphone/gaming/A710BL Bluetooth Headset/A710BL Bluetooth Headset3.jpg', 
//             count: 1, 
//             address: 'A710BL-Bluetooth-Headset',},

//             {id: 6, 
//             title: 'ES-770i Bluetooth Headset', 
//             price: 2100000, 
//             img1:'./assets/images/products/headphone/gaming/ES-770i Bluetooth Headset/ES-770i Bluetooth Headset1.jpg', 
//             img2:'./assets/images/products/headphone/gaming/ES-770i Bluetooth Headset/ES-770i Bluetooth Headset2.jpg', 
//             count: 1, 
//             address: 'ES-770i-Bluetooth-Headset',},
//         ],
//     },

//     speaker:{

//         protable:[
//             {id: 7, 
//             title: 'Y280 Bluetooth Speaker', 
//             price: 1800000, 
//             img1:'./assets/images/products/speaker/portable/Y280 Bluetooth Speaker/Y280 Bluetooth Speaker1.jpg', 
//             img2:'./assets/images/products/speaker/portable/Y280 Bluetooth Speaker/Y280 Bluetooth Speaker2.jpg', 
//             img3:'./assets/images/products/speaker/portable/Y280 Bluetooth Speaker/Y280 Bluetooth Speaker3.jpg', 
//             count: 1,
//             address: 'Y28-Bluetooth-Speaker',},

//             {id: 8, 
//             title: 'Y668 Bluetooth Speaker', 
//             price: 1700000, 
//             img1:'./assets/images/products/speaker/portable/Y668 Bluetooth Speaker/Y668 Bluetooth Speaker1.jpg', 
//             img2:'./assets/images/products/speaker/portable/Y668 Bluetooth Speaker/Y668 Bluetooth Speaker2.jpg', 
//             img3:'./assets/images/products/speaker/portable/Y668 Bluetooth Speaker/Y668 Bluetooth Speaker3.jpg', 
//             count: 1,
//             address: 'Y668-Bluetooth-Speaker',},

//             {id: 9, 
//             title: 'Y669 Bluetooth Speaker', 
//             price: 2500000, 
//             img1:'./assets/images/products/speaker/portable/Y669 Bluetooth Speaker/Y669 Bluetooth Speaker1.jpg', 
//             img2:'./assets/images/products/speaker/portable/Y669 Bluetooth Speaker/Y669 Bluetooth Speaker2.jpg', 
//             img3:'./assets/images/products/speaker/portable/Y669 Bluetooth Speaker/Y669 Bluetooth Speaker3.jpg', 
//             count: 1,
//             address: 'Y669-Bluetooth-Speaker',},
//         ],

//         sandbar:[
//             {id: 10, 
//             title: 'Y999 Bluetooth Speaker', 
//             price: 3200000, 
//             img1:'./assets/images/products/speaker/sandbar/Y999 Bluetooth Speaker/Y999 Bluetooth Speaker1.jpg', 
//             img2:'./assets/images/products/speaker/sandbar/Y999 Bluetooth Speaker/Y999 Bluetooth Speaker2.jpg', 
//             img3:'./assets/images/products/speaker/sandbar/Y999 Bluetooth Speaker/Y999 Bluetooth Speaker3.jpg', 
//             count: 1, 
//             address: 'Y999-Bluetooth-Speaker',},
//         ],
//     },
// };

// second way

let allProducts =[
        {id: 1, 
        title: 'T29P TWS Bluetooth Earphone', 
        price: 1000000, img1:'./assets/images/products/headphone/earphone/T29P TWS Bluetooth Earphone/T29P TWS Bluetooth Earphone1.jpg', 
        img2:'./assets/images/products/headphone/earphone/T29P TWS Bluetooth Earphone/T29P TWS Bluetooth Earphone2.jpg', 
        img3:'./assets/images/products/headphone/earphone/T29P TWS Bluetooth Earphone/T29P TWS Bluetooth Earphone3.jpg', 
        count: 1, 
        address: 'T29P-TWS-Bluetooth-Earphone',
        category: 'هدفون',
        subCategory: 'ایرفون',},

        {id: 2, 
        title: 'T36 TWS Stereo Earbuds', 
        price: 1200000, 
        img1:'./assets/images/products/headphone/earphone/T36 TWS Stereo Earbuds/T36 TWS Stereo Earbuds1.jpg', 
        img2:'./assets/images/products/headphone/earphone/T36 TWS Stereo Earbuds/T36 TWS Stereo Earbuds2.jpg', 
        img3:'./assets/images/products/headphone/earphone/T36 TWS Stereo Earbuds/T36 TWS Stereo Earbuds3.jpg', 
        count: 1,
        address: 'T36-TWS-Stereo-Earbuds',
        category: 'هدفون',
        subCategory: 'ایرفون',},

        {id: 3, 
        title: 'T55 Bluetooth Earphone', 
        price: 990000, 
        img1:'./assets/images/products/headphone/earphone/T55 Bluetooth Earphone/T55 Bluetooth Earphone1.jpg', 
        img2:'./assets/images/products/headphone/earphone/T55 Bluetooth Earphone/T55 Bluetooth Earphone2.jpg', 
        img3:'./assets/images/products/headphone/earphone/T55 Bluetooth Earphone/T55 Bluetooth Earphone3.jpg', 
        count: 1,
        address: 'T55-Bluetooth-Earphone',
        category: 'هدفون',
        subCategory: 'ایرفون',},


        {id: 4, 
        title: 'T55 Bluetooth Earphone', 
        price: 1500000, img1:'./assets/images/products/headphone/earphone/TA3 TWS ANC Earbuds/TA3 TWS ANC Earbuds1.jpg', 
        img2:'./assets/images/products/headphone/earphone/TA3 TWS ANC Earbuds/TA3 TWS ANC Earbuds2.jpg', 
        count: 1,
        address: 'TA3-TWS-ANC-Earbuds',
        category: 'هدفون',
        subCategory: 'ایرفون',},


        {id: 5, 
        title: 'A710BL Bluetooth Headset', 
        price: 9500000, 
        img1:'./assets/images/products/headphone/gaming/A710BL Bluetooth Headset/A710BL Bluetooth Headset1.jpg', 
        img2:'./assets/images/products/headphone/gaming/A710BL Bluetooth Headset/A710BL Bluetooth Headset2.jpg', 
        img3:'./assets/images/products/headphone/gaming/A710BL Bluetooth Headset/A710BL Bluetooth Headset3.jpg', 
        count: 1, 
        address: 'A710BL-Bluetooth-Headset',
        category: 'هدفون',
        subCategory: 'گیمینگ',},


        {id: 6, 
        title: 'ES-770i Bluetooth Headset', 
        price: 2100000, 
        img1:'./assets/images/products/headphone/gaming/ES-770i Bluetooth Headset/ES-770i Bluetooth Headset1.jpg', 
        img2:'./assets/images/products/headphone/gaming/ES-770i Bluetooth Headset/ES-770i Bluetooth Headset2.jpg', 
        count: 1, 
        address: 'ES-770i-Bluetooth-Headset',
        category: 'هدفون',
        subCategory: 'گیمینگ',},


        {id: 7, 
        title: 'Y280 Bluetooth Speaker', 
        price: 1800000, 
        img1:'./assets/images/products/speaker/portable/Y280 Bluetooth Speaker/Y280 Bluetooth Speaker1.jpg', 
        img2:'./assets/images/products/speaker/portable/Y280 Bluetooth Speaker/Y280 Bluetooth Speaker2.jpg', 
        img3:'./assets/images/products/speaker/portable/Y280 Bluetooth Speaker/Y280 Bluetooth Speaker3.jpg', 
        count: 1,
        address: 'Y28-Bluetooth-Speaker',
        category: 'اسپیکر',
        subCategory: 'قابل حمل',},

        {id: 8, 
        title: 'Y668 Bluetooth Speaker', 
        price: 1700000, 
        img1:'./assets/images/products/speaker/portable/Y668 Bluetooth Speaker/Y668 Bluetooth Speaker1.jpg', 
        img2:'./assets/images/products/speaker/portable/Y668 Bluetooth Speaker/Y668 Bluetooth Speaker2.jpg', 
        img3:'./assets/images/products/speaker/portable/Y668 Bluetooth Speaker/Y668 Bluetooth Speaker3.jpg', 
        count: 1,
        address: 'Y668-Bluetooth-Speaker',
        category: 'اسپیکر',
        subCategory: 'قابل حمل',},

        {id: 9, 
        title: 'Y669 Bluetooth Speaker', 
        price: 2500000, 
        img1:'./assets/images/products/speaker/portable/Y669 Bluetooth Speaker/Y669 Bluetooth Speaker1.jpg', 
        img2:'./assets/images/products/speaker/portable/Y669 Bluetooth Speaker/Y669 Bluetooth Speaker2.jpg', 
        img3:'./assets/images/products/speaker/portable/Y669 Bluetooth Speaker/Y669 Bluetooth Speaker3.jpg', 
        count: 1,
        address: 'Y669-Bluetooth-Speaker',
        category: 'اسپیکر',
        subCategory: 'قابل حمل',},

        {id: 10, 
        title: 'Y999 Bluetooth Speaker', 
        price: 3200000, 
        img1:'./assets/images/products/speaker/sandbar/Y999 Bluetooth Speaker/Y999 Bluetooth Speaker1.jpg', 
        img2:'./assets/images/products/speaker/sandbar/Y999 Bluetooth Speaker/Y999 Bluetooth Speaker2.jpg', 
        img3:'./assets/images/products/speaker/sandbar/Y999 Bluetooth Speaker/Y999 Bluetooth Speaker3.jpg', 
        count: 1, 
        address: 'Y999-Bluetooth-Speaker',
        category: 'اسپیکر',
        subCategory: 'ساندبار',},
]












// SPEAKER PREVIEW SECTION

let productPreviewHeadphone = document.querySelector("#product-preview-headphone")
let gamingProductLoadSpeed = 1800

allProducts.headphone.gaming.forEach(function(gamingProduct){

    gamingProductLoadSpeed = gamingProductLoadSpeed - 400

    productPreviewHeadphone.insertAdjacentHTML('afterbegin','<div class="col product__card" data-aos="fade-up" data-aos-duration="'+ gamingProductLoadSpeed +'"><div class="product__card__content"><div class="product__card__img"><a href="./product.html?id=' + gamingProduct.id + '"><span class="product__card__img__discount-label">10%</span><img class="product-img" width="400" height="400" src="'+ gamingProduct.img1 +'" alt="" loading="lazy"></a></div><div class="product__card__title"><a href="./product.html?id=' + gamingProduct.id + '"class="product__card__title--text">'+ gamingProduct.title +'</a></div><div class="product__card__prices"><bdi class="product__card__new-price"> <span>تومان</span>'+ gamingProduct.price +'</bdi><bdi class="product__card__previous-price"> <span>تومان</span> 14,700,000 &nbsp;</bdi></div><div class="product__card__footer"><a href="" class="product__card__footer__cart-btn"><svg class="product__card__footer__cart-btn--animation" width="25px" height="25px" viewBox="0 0 32 32"><circle style="fill:none;stroke:#FEF200;stroke-width:2;stroke-miterlimit:10;" cx="22" cy="24" r="2"></circle><circle style="fill:none;stroke:#FEF200;stroke-width:2;stroke-miterlimit:10;" cx="13" cy="24" r="2"></circle><path style="fill:#FEF200;stroke:#FEF200;" d="M10.998,10l0.497,2h13.65l-1.909,7H11.781L9.159,8.515C8.937,7.625,8.137,7,7.219,7H5C4.448,7,4,7.448,4,8c0,0.552,0.448,1,1,1h2.219l2.621,10.485c0.223,0.89,1.023,1.515,1.94,1.515h11.455c0.902,0,1.692-0.604,1.93-1.474L27.764,10H10.998z"></path></svg></a><a href="" class="product__card__footer__like-btn"><svg fill="#DC3545" width="20px" height="20px" viewBox="0 0 32 32"><path class="bentblocks_een" d="M21.081,6C23.752,6.031,26,8.766,26,12c0,5.106-6.47,10.969-10.001,13.593C12.466,22.974,6,17.12,6,12c0-3.234,2.248-5.969,4.918-6C13.586,6.175,13.926,6.801,16,8.879C18.069,6.806,18.418,6.173,21.081,6M20.911,4.006L20.912,4C18.993,4,17.259,4.785,16,6.048C14.741,4.785,13.007,4,11.088,4l0.001,0.006C7.044,3.936,4,7.719,4,12c0,8,11.938,16,11.938,16h0.124C16.062,28,28,20,28,12C28,7.713,24.951,3.936,20.911,4.006z"></path></svg></a></div></div>')
})


let earphoneProductCounter = 0
let earphoneProductLoadSpeed = 1400

allProducts.headphone.earphone.forEach(function(earphoneProduct){
    if(earphoneProductCounter >= 3){
        return
    }
    earphoneProductLoadSpeed = earphoneProductLoadSpeed + 400

    productPreviewHeadphone.insertAdjacentHTML('beforeend','<div class="col product__card" data-aos="fade-up" data-aos-duration="'+ earphoneProductLoadSpeed +'"><div class="product__card__content"><div class="product__card__img"><a href="./product.html?id=' + earphoneProduct.id + '"><span class="product__card__img__discount-label">10%</span><img class="product-img" width="400" height="400" src="'+ earphoneProduct.img1 +'" alt="" loading="lazy"></a></div><div class="product__card__title"><a href="./product.html?id=' + earphoneProduct.id + '" class="product__card__title--text">'+ earphoneProduct.title +'</a></div><div class="product__card__prices"><bdi class="product__card__new-price"> <span>تومان</span>'+ earphoneProduct.price +'</bdi><bdi class="product__card__previous-price"> <span>تومان</span> 14,700,000 &nbsp;</bdi></div><div class="product__card__footer"><a href="" class="product__card__footer__cart-btn"><svg class="product__card__footer__cart-btn--animation" width="25px" height="25px" viewBox="0 0 32 32"><circle style="fill:none;stroke:#FEF200;stroke-width:2;stroke-miterlimit:10;" cx="22" cy="24" r="2"></circle><circle style="fill:none;stroke:#FEF200;stroke-width:2;stroke-miterlimit:10;" cx="13" cy="24" r="2"></circle><path style="fill:#FEF200;stroke:#FEF200;" d="M10.998,10l0.497,2h13.65l-1.909,7H11.781L9.159,8.515C8.937,7.625,8.137,7,7.219,7H5C4.448,7,4,7.448,4,8c0,0.552,0.448,1,1,1h2.219l2.621,10.485c0.223,0.89,1.023,1.515,1.94,1.515h11.455c0.902,0,1.692-0.604,1.93-1.474L27.764,10H10.998z"></path></svg></a><a href="" class="product__card__footer__like-btn"><svg fill="#DC3545" width="20px" height="20px" viewBox="0 0 32 32"><path class="bentblocks_een" d="M21.081,6C23.752,6.031,26,8.766,26,12c0,5.106-6.47,10.969-10.001,13.593C12.466,22.974,6,17.12,6,12c0-3.234,2.248-5.969,4.918-6C13.586,6.175,13.926,6.801,16,8.879C18.069,6.806,18.418,6.173,21.081,6M20.911,4.006L20.912,4C18.993,4,17.259,4.785,16,6.048C14.741,4.785,13.007,4,11.088,4l0.001,0.006C7.044,3.936,4,7.719,4,12c0,8,11.938,16,11.938,16h0.124C16.062,28,28,20,28,12C28,7.713,24.951,3.936,20.911,4.006z"></path></svg></a></div></div>')

    earphoneProductCounter++
});




// Set the another img for cards by hover

let productCardImg = document.querySelectorAll('.product-img');

productCardImg.forEach(function(img){

    let orgSrc = img.src;



    let newSrc = orgSrc.length
    img.addEventListener('mouseenter',function(){
            // img.src = newSrc
            console.log(newSrc[x])
        });
        
    img.addEventListener('mouseleave',function(){
            img.src = orgSrc
    });
        console.log(newSrc[x])
});


