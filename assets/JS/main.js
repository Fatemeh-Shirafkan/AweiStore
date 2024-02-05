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

headphonePreview.forEach(function(product){

    headphonePreviewLoadSpeed = headphonePreviewLoadSpeed - 400

    if(product.discount == 0){
        headphoneProductPreview.insertAdjacentHTML('afterbegin','<div class="col product__card aos-init aos-animate" data-aos="fade-up" data-aos-duration="'+ headphonePreviewLoadSpeed +'"><div class="product__card__content"><div class="product__card__img"><a href="./product.html?id=' + product.address + '" class="parent-discount-label"><img class="product-img-front" width="400" height="400" src="'+ product.images[0] +'" alt="product img" loading="lazy"><img class="product-img-back" width="400" height="400" src="'+ product.images[1] +'" alt="product img" loading="lazy"></a></div><div class="product__card__title"><a href="./product.html?id=' + product.address + '"class="product__card__title--text">'+ product.title +'</a></div><div class="product__card__prices"><bdi class="product__card__new-price"> <span>تومان</span>'+ priceConversion(product.price) +'</bdi></div><div class="product__card__footer"><a href="#" class="product__card__footer__cart-btn add-product" data-id="'+ product.id +'" onclick="cartBHandeler(event)"><svg class="product__card__footer__cart-btn--animation" width="25px" height="25px" viewBox="0 0 32 32"><circle style="fill:none;stroke:#AFD22D;stroke-width:2;stroke-miterlimit:10;" cx="22" cy="24" r="2"></circle><circle style="fill:none;stroke:#AFD22D;stroke-width:2;stroke-miterlimit:10;" cx="13" cy="24" r="2"></circle><path style="fill:#AFD22D;stroke:#AFD22D;" d="M10.998,10l0.497,2h13.65l-1.909,7H11.781L9.159,8.515C8.937,7.625,8.137,7,7.219,7H5C4.448,7,4,7.448,4,8c0,0.552,0.448,1,1,1h2.219l2.621,10.485c0.223,0.89,1.023,1.515,1.94,1.515h11.455c0.902,0,1.692-0.604,1.93-1.474L27.764,10H10.998z"></path></svg></a><a href="" class="product__card__footer__like-btn"><svg fill="#DC3545" width="20px" height="20px" viewBox="0 0 32 32"><path class="bentblocks_een" d="M21.081,6C23.752,6.031,26,8.766,26,12c0,5.106-6.47,10.969-10.001,13.593C12.466,22.974,6,17.12,6,12c0-3.234,2.248-5.969,4.918-6C13.586,6.175,13.926,6.801,16,8.879C18.069,6.806,18.418,6.173,21.081,6M20.911,4.006L20.912,4C18.993,4,17.259,4.785,16,6.048C14.741,4.785,13.007,4,11.088,4l0.001,0.006C7.044,3.936,4,7.719,4,12c0,8,11.938,16,11.938,16h0.124C16.062,28,28,20,28,12C28,7.713,24.951,3.936,20.911,4.006z"></path></svg></a></div></div>');
    }else{
        headphoneProductPreview.insertAdjacentHTML('afterbegin','<div class="col product__card aos-init aos-animate" data-aos="fade-up" data-aos-duration="'+ headphonePreviewLoadSpeed +'"><div class="product__card__content"><div class="product__card__img"><a href="./product.html?id=' + product.address + '" class="parent-discount-label"><span class="product__card__img__discount-label">'+ product.discount +'%</span><img class="product-img-front" width="400" height="400" src="'+ product.images[0] +'" alt="product img" loading="lazy"><img class="product-img-back" width="400" height="400" src="'+ product.images[1] +'" alt="product img" loading="lazy"></a></div><div class="product__card__title"><a href="./product.html?id=' + product.address + '"class="product__card__title--text">'+ product.title +'</a></div><div class="product__card__prices"><bdi class="product__card__new-price"> <span>تومان</span>'+ percentage(product) +'</bdi><bdi class="product__card__previous-price"> <span>تومان</span>'+ priceConversion(product.price) +'</bdi></div><div class="product__card__footer"><a href="#" class="product__card__footer__cart-btn add-product" data-id="'+ product.id +'" onclick="cartBHandeler(event)"><svg class="product__card__footer__cart-btn--animation" width="25px" height="25px" viewBox="0 0 32 32"><circle style="fill:none;stroke:#AFD22D;stroke-width:2;stroke-miterlimit:10;" cx="22" cy="24" r="2"></circle><circle style="fill:none;stroke:#AFD22D;stroke-width:2;stroke-miterlimit:10;" cx="13" cy="24" r="2"></circle><path style="fill:#AFD22D;stroke:#AFD22D;" d="M10.998,10l0.497,2h13.65l-1.909,7H11.781L9.159,8.515C8.937,7.625,8.137,7,7.219,7H5C4.448,7,4,7.448,4,8c0,0.552,0.448,1,1,1h2.219l2.621,10.485c0.223,0.89,1.023,1.515,1.94,1.515h11.455c0.902,0,1.692-0.604,1.93-1.474L27.764,10H10.998z"></path></svg></a><a href="" class="product__card__footer__like-btn"><svg fill="#DC3545" width="20px" height="20px" viewBox="0 0 32 32"><path class="bentblocks_een" d="M21.081,6C23.752,6.031,26,8.766,26,12c0,5.106-6.47,10.969-10.001,13.593C12.466,22.974,6,17.12,6,12c0-3.234,2.248-5.969,4.918-6C13.586,6.175,13.926,6.801,16,8.879C18.069,6.806,18.418,6.173,21.081,6M20.911,4.006L20.912,4C18.993,4,17.259,4.785,16,6.048C14.741,4.785,13.007,4,11.088,4l0.001,0.006C7.044,3.936,4,7.719,4,12c0,8,11.938,16,11.938,16h0.124C16.062,28,28,20,28,12C28,7.713,24.951,3.936,20.911,4.006z"></path></svg></a></div></div>'); 
    };
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
        spaekerProductPreview.insertAdjacentHTML('afterbegin','<div class="col product__card aos-init aos-animate" data-aos="fade-up" data-aos-duration="'+ speakerPreviewLoadSpeed +'"><div class="product__card__content"><div class="product__card__img"><a href="./product.html?id=' + product.address + '" class="parent-discount-label"><img class="product-img-front" width="400" height="400" src="'+ product.images[0] +'" alt="product img" loading="lazy"><img class="product-img-back" width="400" height="400" src="'+ product.images[1] +'" alt="product img" loading="lazy"></a></div><div class="product__card__title"><a href="./product.html?id=' + product.address + '"class="product__card__title--text">'+ product.title +'</a></div><div class="product__card__prices"><bdi class="product__card__new-price"> <span>تومان</span>'+ priceConversion(product.price) +'</bdi></div><div class="product__card__footer"><a href="#" class="product__card__footer__cart-btn add-product" data-id="'+ product.id +'" onclick="cartBHandeler(event)"><svg class="product__card__footer__cart-btn--animation" width="25px" height="25px" viewBox="0 0 32 32"><circle style="fill:none;stroke:#AFD22D;stroke-width:2;stroke-miterlimit:10;" cx="22" cy="24" r="2"></circle><circle style="fill:none;stroke:#AFD22D;stroke-width:2;stroke-miterlimit:10;" cx="13" cy="24" r="2"></circle><path style="fill:#AFD22D;stroke:#AFD22D;" d="M10.998,10l0.497,2h13.65l-1.909,7H11.781L9.159,8.515C8.937,7.625,8.137,7,7.219,7H5C4.448,7,4,7.448,4,8c0,0.552,0.448,1,1,1h2.219l2.621,10.485c0.223,0.89,1.023,1.515,1.94,1.515h11.455c0.902,0,1.692-0.604,1.93-1.474L27.764,10H10.998z"></path></svg></a><a href="" class="product__card__footer__like-btn"><svg fill="#DC3545" width="20px" height="20px" viewBox="0 0 32 32"><path class="bentblocks_een" d="M21.081,6C23.752,6.031,26,8.766,26,12c0,5.106-6.47,10.969-10.001,13.593C12.466,22.974,6,17.12,6,12c0-3.234,2.248-5.969,4.918-6C13.586,6.175,13.926,6.801,16,8.879C18.069,6.806,18.418,6.173,21.081,6M20.911,4.006L20.912,4C18.993,4,17.259,4.785,16,6.048C14.741,4.785,13.007,4,11.088,4l0.001,0.006C7.044,3.936,4,7.719,4,12c0,8,11.938,16,11.938,16h0.124C16.062,28,28,20,28,12C28,7.713,24.951,3.936,20.911,4.006z"></path></svg></a></div></div>');
    }else{
        spaekerProductPreview.insertAdjacentHTML('afterbegin','<div class="col product__card aos-init aos-animate" data-aos="fade-up" data-aos-duration="'+ speakerPreviewLoadSpeed +'"><div class="product__card__content"><div class="product__card__img"><a href="./product.html?id=' + product.address + '" class="parent-discount-label"><span class="product__card__img__discount-label">'+ product.discount +'%</span><img class="product-img-front" width="400" height="400" src="'+ product.images[0] +'" alt="product img" loading="lazy"><img class="product-img-back" width="400" height="400" src="'+ product.images[1] +'" alt="product img" loading="lazy"></a></div><div class="product__card__title"><a href="./product.html?id=' + product.address + '"class="product__card__title--text">'+ product.title +'</a></div><div class="product__card__prices"><bdi class="product__card__new-price"> <span>تومان</span>'+ percentage(product) +'</bdi><bdi class="product__card__previous-price"> <span>تومان</span>'+ priceConversion(product.price) +'</bdi></div><div class="product__card__footer"><a href="#" class="product__card__footer__cart-btn add-product" data-id="'+ product.id +'" onclick="cartBHandeler(event)"><svg class="product__card__footer__cart-btn--animation" width="25px" height="25px" viewBox="0 0 32 32"><circle style="fill:none;stroke:#AFD22D;stroke-width:2;stroke-miterlimit:10;" cx="22" cy="24" r="2"></circle><circle style="fill:none;stroke:#AFD22D;stroke-width:2;stroke-miterlimit:10;" cx="13" cy="24" r="2"></circle><path style="fill:#AFD22D;stroke:#AFD22D;" d="M10.998,10l0.497,2h13.65l-1.909,7H11.781L9.159,8.515C8.937,7.625,8.137,7,7.219,7H5C4.448,7,4,7.448,4,8c0,0.552,0.448,1,1,1h2.219l2.621,10.485c0.223,0.89,1.023,1.515,1.94,1.515h11.455c0.902,0,1.692-0.604,1.93-1.474L27.764,10H10.998z"></path></svg></a><a href="" class="product__card__footer__like-btn"><svg fill="#DC3545" width="20px" height="20px" viewBox="0 0 32 32"><path class="bentblocks_een" d="M21.081,6C23.752,6.031,26,8.766,26,12c0,5.106-6.47,10.969-10.001,13.593C12.466,22.974,6,17.12,6,12c0-3.234,2.248-5.969,4.918-6C13.586,6.175,13.926,6.801,16,8.879C18.069,6.806,18.418,6.173,21.081,6M20.911,4.006L20.912,4C18.993,4,17.259,4.785,16,6.048C14.741,4.785,13.007,4,11.088,4l0.001,0.006C7.044,3.936,4,7.719,4,12c0,8,11.938,16,11.938,16h0.124C16.062,28,28,20,28,12C28,7.713,24.951,3.936,20.911,4.006z"></path></svg></a></div></div>');
    };
});

// Add Product to Cart

function cartBHandeler(event){
    checkLocal(event.target.dataset.id)
};

function checkLocal(ID){
    if(productsArray.length !== 0){
        productsArray = JSON.parse(localStorage.getItem('cart'));
        
        checkForDuplicateProduct = productsArray.filter(function(product){
            return product.id == ID;
        });

        if(checkForDuplicateProduct.length >= 1){
            alert('این محصول در سبد خرید شما موجود است.');
        }else{
            addHandeler(ID);
        }
    }else{
        addHandeler(ID);
    }
};

function addHandeler(ID){
    let targtProduct;
    targtProduct = allProducts.find(function(product){
        return ID == product.id;
    });
    productsArray.push(targtProduct);
    setLocalItems(productsArray);
};

