let productImgBox = document.querySelector(".product__img");
let productImg = document.querySelector(".product__img img");
let addProductInterest = document.querySelector(".add__product__interest");
console.log(addProductInterest)

// PRODUCT IMG HOVER FEATURE 

productImgBox.addEventListener("mousemove", function(event){
    productImg.style.transform = "scale(2)";
    productImg.style.transformOrigin = `${event.offsetX}px ${event.offsetY}px`;
});

productImgBox.addEventListener("mouseleave", function(){
    productImg.style.transform = "scale(1)";
    productImg.style.transformOrigin = "center center";
});

