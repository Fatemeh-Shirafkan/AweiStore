let cartProductTableCards = document.querySelector('.cart-product-table-cards');
let emptyAlertSection = document.querySelector('.empty__alert__cart-page');
let cartPageItemSection = document.querySelector('.cart-page__items');


// Cart Page Card Handeler

function CartPageCardGenerator(productsArray){

    emptyAlertSection.style.display = 'none';
    cartPageItemSection.style.display = 'block';

    cartProductTableCards.innerHTML = "";

    productsArray.forEach(function(product){

        // Products Without discount
        if(product.discount == 0){
            cartProductTableCards.insertAdjacentHTML('afterbegin','<tr><td class="remove-product"><a href="#"><svg class="remove-product-btn" width="18px" height="18px" viewBox="0 0 24 24" fill="none"><path d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414z" fill="#0D0D0D"></path></svg></a></td><td class="product-img"><div><img width="100px" height="200px" src="' + product.images[0] + '" alt=""></div></td><td class="product-name"><p>' + product.title +'</p></td><td class="product-price"><span>' + priceConversion(product.price) + ' تومان</span></td><td class="product-count"><input class="product__count" type="number" min="1" max="10" data-id="'+ product.id +'" value="'+ product.count +'"></td>');
        }
         // Products With discount
        else{
            cartProductTableCards.insertAdjacentHTML('afterbegin','<tr><td class="remove-product"><a href="#"><svg class="remove-product-btn" width="18px" height="18px" viewBox="0 0 24 24" fill="none"><path d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414z" fill="#0D0D0D"></path></svg></a></td><td class="product-img"><div><img width="100px" height="200px" src="' + product.images[0] + '" alt=""></div></td><td class="product-name"><p>' + product.title +'</p></td><td class="product-price"><span>' + percentage(product) + ' تومان</span></td><td class="product-count"><input class="product__count" type="number" min="1" max="10" data-id="'+ product.id +'" value="'+ product.count +'"></td>');
        };
        removeProductCartPage(product);
    });
    productCounterCartPageHandeler();
    calcTotalPriceCartPage ()
}; 

// Set Products In Localstorage

function setLocalItemsCartPage(productsArray){
    localStorage.setItem('cart',JSON.stringify(productsArray));
    checkArrayCartPage(productsArray)
};

// Check Empty Array

function checkArrayCartPage(productsArray){

    if(productsArray.length == 0){
        checkArray(productsArray)
        localStorage.clear();
        emptyAlertCartPage();
    }else{
        CartPageCardGenerator(productsArray);
    };

};

// Alert For Empty Array

function emptyAlertCartPage(){
    emptyAlertSection.style.display = 'block';
    cartPageItemSection.style.display = 'none';
};

// Product Counter

function productCounterCartPageHandeler(){
    let cartPageProductCount = document.querySelectorAll('.product__count');
    
    cartPageProductCount.forEach(function(item){
        item.addEventListener('change',function(event){
            changeCounterCartPage(event.target.dataset.id ,event.target.value);
        });
    });
    
    function changeCounterCartPage (productID ,productCountValue){
        
        productsArray.forEach(function(product){
            if( product.id == productID){
                product.count = productCountValue;
            };
        });
        setLocalItemsCartPage(productsArray);
    };  
};

// Remove Product from Cart Page

function removeProductCartPage(product){
    let removeBTN = document.querySelector('.remove-product-btn');

    removeBTN.addEventListener('click',function(item){
        removeItemHandeler(product.id);
    });
    function removeItemHandeler(productID){
        productsArray = productsArray.filter(function(product){
            return product.id !== productID;
        });
        setLocalItemsCartPage(productsArray);    
    };
};

// Calc Total Price

function calcTotalPriceCartPage () {
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
    let totalPriceCartPage = document.querySelector('.cart-page-totalPrice');
    totalPriceCartPage.innerHTML = '';
    totalPriceCartPage.innerHTML =  priceConversion(totalPriceValue) +" تومان"
};

// Load Handeler

window.addEventListener('load',loadHandelerCartPage);
function loadHandelerCartPage(productsArray){

    productsArray = JSON.parse(localStorage.getItem('cart'));
    
    if(!productsArray){
        emptyAlertCartPage();
        }else{
        CartPageCardGenerator(productsArray);
    };

};
