$(document).ready(function () {
    $('.venobox').venobox({
        border: '10px',
    });
    //    header slider 
    $('.banner-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    //    team_slider
    $('.team_slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
    //    testemonial part
    $('.text_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider_img'
    });
    $('.slider_img').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.text_slider',
        dots: false,
        prevArrow: '.team_arrow_left',
        nextArrow: '.team_arrow_right',
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        autoplay: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
    //    bg top part
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        var sticky = $('.bg-top');

        if (scrolling >= 100) {
            sticky.addClass('nav-bg');
        } else {
            sticky.removeClass('nav-bg');
        }
    });
    //    scroll spy part start
    $('body').scrollspy({
        target: ".navbar"
    })
    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 50
                }, 1500);
                return false;
            }
        }
    });
    //wow js
    new WOW().init();
    //    ytplayer background video
    jQuery("#bgndVideo").YTPlayer();
    jQuery("#bgndVideo1").YTPlayer();
    
    //    preloader part
    $(window).on('load', function(){
        $('.preloader').delay(1500).fadeOut(500);
    })
});
