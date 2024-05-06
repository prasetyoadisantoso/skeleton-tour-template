/* -------------------------------------------------------------------------- */
/*                              Date Range Picker                             */
/* -------------------------------------------------------------------------- */
$(function () {
    $('input[id="datepicker"]').daterangepicker({
        opens: 'left'
    }, function (start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
});

/* -------------------------------------------------------------------------- */
/*                               Search Select 2                              */
/* -------------------------------------------------------------------------- */
$('#destination').select2({
    theme: 'bootstrap-5'
});

/* -------------------------------------------------------------------------- */
/*                                  Swiper JS                                 */
/* -------------------------------------------------------------------------- */
var swiper = new Swiper(".best-tour-package-card", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 3,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next-unique",
        prevEl: ".swiper-button-prev-unique",
    },
});

var swiper = new Swiper(".testimonial-swiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination-testimonial",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next-testimonial",
        prevEl: ".swiper-button-prev-testimonial",
    },
});

/* -------------------------------------------------------------------------- */
/*                                 Rating Star                                */
/* -------------------------------------------------------------------------- */
var $star_rating = $('.star-rating .bi');

var SetRatingStar = function () {
    return $star_rating.each(function () {
        if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
            return $(this).removeClass('bi-star').addClass('bi-star-fill');
        } else {
            return $(this).removeClass('bi-star-fill').addClass('bi-star');
        }
    });
};

$star_rating.on('click', function () {
    $star_rating.siblings('input.rating-value').val($(this).data('rating'));
    return SetRatingStar();
});

SetRatingStar();


/* -------------------------------------------------------------------------- */
/*                                  Header JS                                 */
/* -------------------------------------------------------------------------- */
function HideShowScroll() {
    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $('header').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');
            }
        }

        lastScrollTop = st;
    }
}
HideShowScroll();


