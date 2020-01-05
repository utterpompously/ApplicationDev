 // feedback carousel
 $('.feedback').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsiveClass: true,
        //  navText: [
        //     '<i class="fa fa-angle-left"></i>',
        //     '<i class="fa fa-angle-right"></i>'
        // ],
        responsive: {
            0: {
                items: 1,
                nav: false,
                loop: true
            },
            600: {
                    items: 1,
                    dots: true,
                    nav: false
                },
                1000: {
                    items: 1,
                    dots: true,
                    nav: false,
                    loop: true
                }
        }
    });

// counter up
$(document).ready(function(){
    $('.counter').counterUp({
        delay: 15,
        time: 1000
    });
});

$(document).ready(function(){
   
    $("#resizable").resizable();
});

