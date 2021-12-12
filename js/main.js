                // Cлайдер по колу //
/*
let images = document.querySelectorAll('.box-slider__top img');
let imagesRight = document.querySelectorAll('.slide__pic__right img');
let imagesLeft = document.querySelectorAll('.slide__pic__left img');
let current = 0;

function sliderCircle() {
    for(let i = 0; i < images.length; i++) {
        images[i].classList.add('opacity0');
        imagesLeft[i].classList.add('opacity0');
        imagesRight[i].classList.add('opacity0');
    }
    images[current].classList.remove('opacity0');
    imagesLeft[current].classList.remove('opacity0');
    imagesRight[current].classList.remove('opacity0');

    if(current+1 == images.length){
        current = 0;
    }
    else {
        current++;
    }
}
sliderCircle();
document.querySelector('.infinity-slider').onclick = sliderCircle;*/


// Слайдер з кнопками управлыння по колу .//

let images = document.querySelectorAll('.box-slider__top img');
let imagesRight = document.querySelectorAll('.slide__pic__right img');
let imagesLeft = document.querySelectorAll('.slide__pic__left img');
let current = 0;

function sliderUp() {
    for(let i = 0; i < images.length; i++) {
        images[i].classList.add('opacity0');
        imagesLeft[i].classList.add('opacity0');
        imagesRight[i].classList.add('opacity0');
    }
    images[current].classList.remove('opacity0');
    imagesLeft[current].classList.remove('opacity0');
    imagesRight[current].classList.remove('opacity0');
}

sliderUp();
document.querySelector('.box-slider__top').onclick = function () {
    if (current - 1 == -1){
        current = images.length - 1;
    }
    else{
        current--;
    }
    sliderUp();
};

sliderUp();
document.querySelector('.slide__pic__left').onclick = function () {
    if (current - 1 == -1){
        current = images.length - 1;
    }
    else{
        current--;
    }
    sliderUp();
};

document.querySelector('.slide__pic__right').onclick = function (){
    if(current+1 == images.length){
        current = 0;
    }
    else {
        current++;
    }
    sliderUp();
};

// Заміна фону меню при скролі >50px.
(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if(window.pageYOffset > 50) {
            header.classList.add('header__active');
        }else{
            header.classList.remove('header__active');
        }
    };
}());

// Burger handler(Aдаптивне меню)

(function() {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    const menuLinks = document.querySelectorAll('.header__link');
    burgerItem.addEventListener('click',() => {
        menu.classList.add('header__nav_active');
    });
    menuCloseItem.addEventListener('click',() => {
        menu.classList.remove('header__nav_active');
    });
    if(window.innerWidth <= 767) {
        for (let i = 0; i < menuLinks.length; i += 1){
            menuLinks[i].addEventListener('click', () =>{
                menu.classList.remove('header__nav_active');
            });
        }
    }                        
}());

// Scroll to anchors
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());