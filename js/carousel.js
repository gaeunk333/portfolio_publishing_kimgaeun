$(document).ready(function () {

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        margin: 10,
        nav: true,
        navText:["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
        loop: true,
        responsive: {
            0: { items: 4.5 }
        }
    })

});