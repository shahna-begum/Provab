$(document).ready(function () {
    $('.partners-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            }
        }
    })
});
$(document).ready(function () {
    $('.hotel-carousel').owlCarousel({
        loop: true,
        margin: 18,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    })
});
$(document).ready(function () {
    $('.hero-carousel').owlCarousel({
        loop: true,
        margin: 18,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    })
});
$('.js-example-basic-single').select2({
    minimumResultsForSearch: -1
});
$('.js-class-type').select2({
    minimumResultsForSearch: -1
});
$('.js-epreferred-airline').select2({
    minimumResultsForSearch: -1
});

$('#js-example-basic-hide-search-multi').on('select2:opening select2:closing', function (event) {
    var $searchfield = $(this).parent().find('.select2-search__field');
    $searchfield.prop('disabled', true);
});

$('input[name="trip-type"]').on('change', function (event) {
    let parentDiv = event.target.closest('.trip-info-wrapper');
    console.log($('.trip-info-card-wrapper').children()[0]);
    if (event.target.id === 'one-way') {
        $('.trip-info-card-wrapper .one-way').css('display', 'grid');
        $('.trip-info-card-wrapper .return').css('display', 'none');
        $('.trip-info-card-wrapper .multi-way').css('display', 'none');
    }
    else if (event.target.id === 'return') {
        $('.trip-info-card-wrapper .one-way').css('display', 'none');
        $('.trip-info-card-wrapper .return').css('display', 'grid');
        $('.trip-info-card-wrapper .multi-way').css('display', 'none');
    }
    else {
        $('.trip-info-card-wrapper .one-way').css('display', 'none');
        $('.trip-info-card-wrapper .return').css('display', 'none');
        $('.trip-info-card-wrapper .multi-way').css('display', 'grid');
    }
})
var input = $('.quantity'),
    minValue = parseInt(input.attr('min')),
    maxValue = parseInt(input.attr('max'));


$('.plus').on('click', function () {
    var inputValue = input.val();
    if (inputValue < maxValue) {
        input.val(parseInt(inputValue) + 1);
    }
});

$('.minus').on('click', function () {
    var inputValue = input.val();
    if (inputValue < maxValue) {
        input.val(parseInt(inputValue) - 1);
    }
});