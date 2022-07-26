let navbar = document.querySelector('.navbar')

document.querySelector('#menu-bar').onclick = () => {
    navbar.classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
    navbar.classList.remove('active');
}

window.onscroll = () => {

    navbar.classList.remove('active');


    if (window.nscrollY > 100) {
        document.querySelector('header').classList.add('active');
    } else {
        document.querySelector('header').classList.remove('active');
    }
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () => {
    themeToggler.classList.toggle('fa-sun');
    if (themeToggler.classList.contains('fa-sun')) {
        document.querySelector('body').classList.add('active');
    } else {
        document.querySelector('body').classList.remove('active');
    }
}


var swiper = new Swiper(".product-slider", {
    slidesperview: 3,
    loop: true,
    spacebetween: 10,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesperview: 1,
        },
        550: {
            slidesperview: 2,
        },
        800: {
            slidesperview: 3,
        },
        1000: {
            slidesperview: 3,
        },
    },
});

var swiper = new Swiper(".review-slider", {
    slidesperview: 3,
    loop: true,
    spacebetween: 10,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesperview: 1,
        },
        550: {
            slidesperview: 2,
        },
        800: {
            slidesperview: 3,
        },
        1000: {
            slidesperview: 3,
        },
    },
});