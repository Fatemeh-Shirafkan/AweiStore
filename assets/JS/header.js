let header = `    
<header class="header">
<div class="header--bg">
    <div class="container">
        <!-- First row -->
        <div class="row justify-content-end">
            <div class="col ">
                <div class="header-number__box">
                    <strong class="header-number__box__content">021-884021255</strong>
                </div>
            </div>    
        </div>
        <!-- Second row -->
        <nav class="row">
            <!-- Header logo column -->
            <div class="col">
                <div class="logo-box">
                    <a href="./mainPage.html">
                        <img src="./assets/images/Logo/awei-logo-C60FFD5269-seeklogo.com.png" alt="AWEI logo" width="180" height="50">
                    </a>
                </div>    
            </div>
            <!-- Header search box column -->
            <div class="col-6 align-self-end">
                <div class="search-box">
                    <form class="search-box__form">
                        <button class="search-box__form__btn" type="submit">
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path d="M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm-8 6a8 8 0 1 1 14.32 4.906l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.387-5.387A8 8 0 0 1 2 10z" fill="#FFF100"/></svg>
                        </button>
                        <input class="search-box__form__text" type="text" name="" id="" placeholder="دنبال چی میگردی؟!!">
                    </form>
                </div>
            </div>
            <!-- Header icons box column -->
            <div class="col align-self-center">
                <div class="icons-box">
                    <div class="icons-box__item login__box" id="open-login-nav">
                        <span>
                            <svg width="30px" height="30px" viewBox="0 0 16 16"  fill="currentColor" class="bi bi-person">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                            </svg>
                        </span>
                        <span class="login__box__label">
                            ورود / ثبت نام
                        </span>
                    </div>
                    <div class="icons-box__item cart-count--parent">
                        <a href="./interest.html">
                            <svg fill="#0B1719" width="27px" height="27px" viewBox="0 0 32 32" >
                            <path class="bentblocks_een" d="M21.081,6C23.752,6.031,26,8.766,26,12c0,5.106-6.47,10.969-10.001,13.593
                            C12.466,22.974,6,17.12,6,12c0-3.234,2.248-5.969,4.918-6C13.586,6.175,13.926,6.801,16,8.879C18.069,6.806,18.418,6.173,21.081,6
                            M20.911,4.006L20.912,4C18.993,4,17.259,4.785,16,6.048C14.741,4.785,13.007,4,11.088,4l0.001,0.006C7.044,3.936,4,7.719,4,12
                            c0,8,11.938,16,11.938,16h0.124C16.062,28,28,20,28,12C28,7.713,24.951,3.936,20.911,4.006z"/>
                            </svg>
                        </a>
                        <div class="cart-count">                               
                            <span>5</span>
                        </div>
                    </div>
                    <div class="icons-box__item cart-count--parent">
                        <a href="#" id="open-cart-nav">
                            <svg width="30px" height="30px" viewBox="0 0 32 32">
                            <circle style="fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;" cx="22" cy="24" r="2"/>
                            <circle style="fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;" cx="13" cy="24" r="2"/>
                            <path d="M10.998,10l0.497,2h13.65l-1.909,7H11.781L9.159,8.515C8.937,7.625,8.137,7,7.219,7H5C4.448,7,4,7.448,4,8
                            c0,0.552,0.448,1,1,1h2.219l2.621,10.485c0.223,0.89,1.023,1.515,1.94,1.515h11.455c0.902,0,1.692-0.604,1.93-1.474L27.764,10
                            H10.998z"/>
                            </svg>
                        </a> 
                        <div class="cart-count">                               
                            <span>25</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</div>
<!-- Third row (Header navbar) -->
<div class="container" id="menu-row">
    <nav class="row justify-content-center">
        <div class="col-6">
            <div class="menu">
                <ul class="menu__box">
                    <li class="menu__box__items">
                        <a class="menu__box__items__link " href="">محصولات</a>
                    </li>

                    <li class="menu__box__items">
                        <a class="menu__box__items__link menu__box__items__link--dot" href="">پاور بانک</a>
                    </li>

                    <li class="menu__box__items
                    menu__box__items__dropdown">
                    
                        <a class="menu__box__items__link menu__box__items__link--dot                               menu__box__items__link--dropdown" id="" href=""> 
                            <span>هدفون</span>
                            
                        </a>
                        <div class="dropdown-menu__box">
                            <div class="container"> 
                                <ul class="col">
                                    <li class="row dropdown-menu__box__item">
                                        <a class="dropdown-menu__box__item--link" href="">ایرفون</a>
                                    </li>
                                    <li class="row dropdown-menu__box__item">
                                        <a class="dropdown-menu__box__item--link" href="">گیمینگ</a>
                                    </li>
                                    <li class="row dropdown-menu__box__item">
                                        <a class="dropdown-menu__box__item--link" href="">ورزشی</a>
                                    </li>
                                </ul>
                            </div>
                        </div> 
                    </li>

                    <li class="menu__box__items menu__box__items__dropdown">
                        <a class="menu__box__items__link menu__box__items__link--dropdown" href="">اسپیکر
                        </a>
                        <div class="dropdown-menu__box">
                            <div class="container">
                                <ul class="col">
                                    <li class="row dropdown-menu__box__item">
                                        <a class="dropdown-menu__box__item--link" href=""> قابل حمل</a>
                                    </li>
                                    <li class="row dropdown-menu__box__item">
                                        <a class="dropdown-menu__box__item--link" href="">خانگی</a>
                                    </li>
                                    <li class="row dropdown-menu__box__item">
                                        <a class="dropdown-menu__box__item--link" href="">ساند بار</a>
                                    </li>
                                    <li class="row dropdown-menu__box__item">
                                        <a class="dropdown-menu__box__item--link" href="">اجرای زنده</a>
                                    </li>

                                </ul>
                            </div>
                        </div> 
                    </li>

                    <li class="menu__box__items">
                        <a class="menu__box__items__link " href="">فروشگاه</a>
                    </li>

                    <li class="menu__box__items">
                        <a class="menu__box__items__link menu__box__items__link--dot" href="">تماس با ما</a>
                    </li>

                    <li class="menu__box__items">
                        <a class="menu__box__items__link menu__box__items__link--dot" href="">وبلاگ</a>
                    </li>
                </ul>
            </div>    
        </div>
    </nav>
</div>
</header>

<!-- SIDE LOGIN NAVIGATION -->

<nav class="sideNav__login" >
<div class="sideNav__login__heading">
    <span class="sideNav__login__heading__title">ورود</span>
    <a href="#" id="close-login-nav">
        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none">
        <path d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414z" fill="#0D0D0D"/>
        </svg>
    </a>
</div>

<form class="sideNav__login__form">
    <div class="login__form__username">
        <label class="login__form__label--mb" for="login-username-sidenav">
            نام کاربری یا ایمیل
            <span class="required">*</span>
        </label>
        <input id="login-username-sidenav" type="text" class="login__form__input">
    </div>
    <div class="login__form__password">
        <label class="login__form__label--mb" for="login-password-sidenav">
            گذرواژه
            <span class="required">*</span>
        </label>
        <input id="login-password-sidenav" type="password" class="login__form__input">
    </div>
    <div class="login__form__extraItems">
        <div class="login__form__rememberUser">
            <input type="checkbox" name="" id="login-rememberUser-sidenav">
            <label for="login-rememberUser-sidenav"> مرا به خاطر بسپار</label>    
        </div>
        <a  class="login__form__forgettingPass" href="">گذرواژه خود را فراموش کرده اید؟</a>
    </div>
    <div class="login__form__submit">
        <button type="submit" class="login__form__submit--style">ورود
        </button>
    </div>

    <div class="sideNav__login__form__create-account">
        <div>
            <svg width="130px" height="130px" viewBox="0 0 16 16" fill="#f1f1f1">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
            </svg>
        </div>
        <p class="sideNav__login__form__create-account__question">هنوز حساب کاربری ندارید؟
        </p>
        <a href="./register.html" class="sideNav__login__form__create-account__link">ایجاد حساب کاربری
        </a>
    </div>
</form>
</nav>

<!-- SIDE CART NAVIGATION -->

<nav class="sideNav__cart">
<div class="sideNav__cart__header">
    <span class="sideNav__cart__header__title">سبد خرید</span>
    <a href="#" id="close-cart-nav">
        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none">
        <path d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414z" fill="#0D0D0D"/>
        </svg>
    </a>
</div>

<!-- NOTIFICATION OF EMPTY CART (side navigation) -->

<div class="sideNav__cart__empty-cart">
    <div>
        <svg width="130px" height="130px" viewBox="0 0 32 32" xml:space="preserve" fill="#f1f1f1">
        <circle style="fill:none;stroke:#f1f1f1;stroke-width:2;stroke-miterlimit:10;" cx="22" cy="24" r="2"/>
        <circle style="fill:none;stroke:#f1f1f1;stroke-width:2;stroke-miterlimit:10;" cx="13" cy="24" r="2"/>
        <path d="M25.658,10l-2.422,9H10.781L8.159,8.515C7.937,7.625,7.137,7,6.219,7H4C3.448,7,3,7.448,3,8c0,0.552,0.448,1,1,1h2.219
        l2.621,10.485C9.063,20.375,9.863,21,10.781,21h12.455c0.902,0,1.692-0.604,1.93-1.474L27.764,10H25.658z"/>
        <line style="fill:none;stroke:#f1f1f1;stroke-width:2;stroke-miterlimit:10;" x1="17" y1="7" x2="17" y2="15"/>
        <line style="fill:none;stroke:#f1f1f1;stroke-width:2;stroke-miterlimit:10;" x1="21" y1="11" x2="13" y2="11"/>
        </svg>
    </div>
    <p class="sideNav__cart__empty-cart__alert">
        هیچ محصولی در سبد خرید نیست.
    </p>
    <a href="" class="back__store">
        بازگشت به فروشگاه
    </a>
</div>

<!-- SIDE CART LIST -->

<!-- <div class="sideNav__cart__list">
    <div  class="sideNav__cart__list__content">
        <ul class="sideNav__cart__list__ul">

            <li class="sideNav__cart__list__ul__item">
                <a href="" class="sideNav__cart__list__ul__item__product-img">
                    <img width="90px" height="100px" src="./assets/images/photo1.jpg" alt="">
                </a>
                <div class="sideNav__cart__list__ul__item__product-info">
                    <a class="sideNav__cart__list__ul__item__product-name" href="">اسپیکر قابل حمل Mifa A90</a>
                    <input class="sideNav__cart__list__ul__item__product-quantity" type="number" min="1" max="10" placeholder="1">
                    <span class="sideNav__cart__list__ul__item__product-price">
                        <bdi>14,700,000&nbsp;
                            <span class="">تومان</span>
                        </bdi>
                    </span>
                </div>    
                <a href="#" class="sideNav__cart__list__ul__item--remove">
                    <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none">
                    <path d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414z" fill="#0D0D0D"/>    
                    </svg>
                </a>    
            </li>

        </ul>
        <div class="sideNav__cart__list__info">
            <div class="sideNav__cart__list__total-price">
                <strong>جمع كل سبد خريد:</strong>
                <span>
                    <bdi>2,599,000&nbsp;
                        <span class="">تومان</span>
                    </bdi>
                </span>
            </div>
            <div class="sideNav__cart__list__btn">
                <a class="sideNav__cart__list__view-cart sideNav__cart__list__btn--style" href="">مشاهده سبد خرید</a>
                <a class="sideNav__cart__list__checkout sideNav__cart__list__btn--style" href="">تسویه حساب</a>
            </div>
        </div>
    </div>
</div> -->
</nav> 
`;

document.body.insertAdjacentHTML("afterbegin",header);