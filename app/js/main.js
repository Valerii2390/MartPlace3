$(document).ready(function() {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<span class="arrow-prev"></span>',
        nextArrow: '<span class="arrow-next"></span>',
        appendArrows: '.arrow-wrap',


    })
    $('.slider2').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<span class="arrow-prev1"></span>',
        nextArrow: '<span class="arrow-next1"></span>',
        appendArrows: '.arrow-wrap1'
    })
    $('.rate-star').rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
    });


    $('.rate-star2').rateYo({
        rating: 4.5,
        starWidth: "12px",
        readOnly: true
    });



    var mixer = mixitup('.products__inner');

});