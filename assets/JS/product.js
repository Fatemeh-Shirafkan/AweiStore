let productImgBox = document.querySelector(".product__img");
let productImg = document.querySelector(".product__img img");
let addProductInterest = document.querySelector(".add__product__interest");
let addProductInterestIcon = document.querySelector(".add__product__interest__icon")

// PRODUCT IMG HOVER FEATURE 

productImgBox.addEventListener("mousemove", function(event){
    productImg.style.transform = "scale(2)";
    productImg.style.transformOrigin = `${event.offsetX}px ${event.offsetY}px`;
});

productImgBox.addEventListener("mouseleave", function(){
    productImg.style.transform = "scale(1)";
    productImg.style.transformOrigin = "center center";
});

addProductInterest.addEventListener("click", function(){
    addProductInterestIcon.classList.toggle("add__product__interest-active")
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