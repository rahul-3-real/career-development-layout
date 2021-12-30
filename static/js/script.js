//  Articles Carousel
$('.article-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots:false,
    responsive:{
        0:{items:1},
        600:{items:2},
        1000:{items:3}
    }
})

//  Testimonial Carousel
$('.testimonial-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots:true,
    responsive:{
        0:{items:1},
        600:{items:1},
        1000:{items:2}
    }
})