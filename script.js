'use strict'
$(document).ready(function () {

    function sliderBig() {
        $('.card__image_slider-big').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            arrows: false,
            infinite: false,
            fade: true,
            asNavFor: '.card__image_slider-small',
            swipe: false,
            responsive: [
                {
                    breakpoint: 1030,
                    settings: {
                        swipe: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        swipe: true,
                        arrows: true,
                    }
                }
            ]
        });


        $('.card__image_slider-small').slick({
            asNavFor: '.card__image_slider-big',
            dots: false,
            swipe: false,
            centerMode: false,
            infinite: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            focusOnSelect: true,
            vertical: true,
            verticalSwiping: true,
            arrows: true,
            centerPadding: '0',
            adaptiveHeight: true,
            prevArrow: "<button type='button' class='slick-prev'><i class='icon fa fa-arrow-up' aria-hidden='true'></i></button>",
            nextArrow: "<button type='button' class='slick-next'><i class='icon fa fa-arrow-down' aria-hidden='true'></i></button>",
            responsive: [
                {
                    breakpoint: 1201,
                    settings: {

                    }
                },
                {
                    breakpoint: 768,
                    settings: {

                    }
                }
            ]
        });
    }

    if ($('.card__image_slider-big').length) {
        sliderBig();
    }


    const spinner = document.querySelector('.spinner');
    const spinnerButton = document.querySelectorAll('.spinner-line');
    const spinerMenu = document.querySelector('header');

    const overflowHidden = () => {
        if (document.body.style.overflow === '') {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    const spinnerClassToggle = () => {
        spinerMenu.classList.toggle("active");
        spinnerButton.forEach(elem => {
            elem.classList.toggle("active")
        });
    };

    spinner.addEventListener('click', (event) => {
        event.preventDefault();
        spinnerClassToggle();
        overflowHidden();
    });

    // document.addEventListener('DOMContentLoaded', () => {


    //     /**
    //      * smooth transition on anchor
    //      *
    //      */
    //     const value = localStorage.getItem('anchor');  // ?????????????????? ?????????????? ?? ????????????
    //     if (!(value === null)) { // ???????? ?????????? ???????? (???????????? ???? ?????????????? ?? ???? ???????????????? ?? ?????????????????? ??????????????)
    //         var id = value,
    //             top = $(id).offset().top;
    //         top = top - 120;
    //         $("body,html").animate({
    //             scrollTop: top,
    //         },
    //             1500
    //         );
    //         localStorage.clear(); // ???????????? ??????????????
    //     }
    //     console.log(value);

    //     $("#menu-header-menu").on("click", "a", function (event) {
    //         let locationOrig = (window.location.origin) + '/'; // ?????????????????? ?????????? ?????? ????????????????????????
    //         let locationHref = window.location.href; // ?????????????????? ?????????? ?????? ???? ?????????????? ??????????????????
    //         if ((locationOrig === locationHref)) { // ?????????????????? ???????? ???? ???????????? ?????? - ?????????????????????? ??????????
    //             var href = $(event.target).attr('href');
    //             if (href[0] === '#') {
    //                 event.preventDefault();
    //                 if (window.screen.width <= 1024) {
    //                     spinnerClassToggle();
    //                     overflowHidden();
    //                 }
    //                 var id = $(this).attr("href"),
    //                     top = $(id).offset().top;
    //                 top = top - 120;
    //                 $("body,html").animate({
    //                     scrollTop: top,
    //                 },
    //                     1500
    //                 );
    //             };
    //         } else { // ?????????????????? ???????? ???? ???? ???????????? ?????? - ?????????????????? ???? ????????????
    //             var anchor = $(event.target).attr('href');
    //             localStorage.setItem('anchor', anchor); // ???????????????????? ?????????????? ?? ????????????
    //             window.location.href = (window.location.origin) + '/';
    //         };

    //     });

    //     $(".anchor").on("click", function (event) {
    //         event.preventDefault();
    //         if (window.screen.width <= 1024) {
    //             spinnerClassToggle();
    //             overflowHidden();
    //         }
    //         var id = $(this).attr("href"),
    //             top = $(id).offset().top;
    //         top = top - 120;
    //         $("body,html").animate({
    //             scrollTop: top,
    //         },
    //             1500
    //         );
    //     });
    // });
});


