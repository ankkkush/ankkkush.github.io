// Smooth scroll 

$('.nav-bar a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
    }
});

// Animations AOS

AOS.init();

// Scrolling Effect nav-bar 

$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('.nav-bar').addClass('black');
    } else {
        $('.nav-bar').removeClass('black');
    }
});

// scroll effect of skill bars

ScrollOut({
    targets: '.bar,skill-bars,.progress-line,.skill span'
});

// Drop down animatio of menu bar (only for screen width < 786px)

$(document).ready(function () {
    $(".menu-icon").on("click", function () {
        $("nav ul").toggleClass("showing");
    });
});

$(document).ready(function () {
    $(".menu a").on("click", function () {
        $("nav ul").removeClass("showing");
    });
});


// Hamburger animation (only for screen width < 786px)

$(document).ready(function () {
    $('.wrapper-menu').click(function () {
        $(this).toggleClass('open');
    });
});

$(document).ready(function () {
    $('.menu a').click(function () {
        $('.wrapper-menu').removeClass('open');
    });
});