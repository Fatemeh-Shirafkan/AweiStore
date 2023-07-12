let $ = document;

let productImgBox = $.querySelector(".product__img");
let productImg = $.querySelector(".product__img img");

// PRODUCT IMG HOVER FEATURE 

productImgBox.addEventListener("mousemove", function(event){
    productImg.style.transform = "scale(2)";
    productImg.style.transformOrigin = `${event.offsetX}px ${event.offsetY}px`;
});

productImgBox.addEventListener("mouseleave", function(){
    productImg.style.transform = "scale(1)";
    productImg.style.transformOrigin = "center center";
});

