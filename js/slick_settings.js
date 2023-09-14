// $('.news__carousel').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3
//   });


$('.news__carousel').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	mobileFirst: true,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [

        { 
            breakpoint: 576, 
            settings: { slidesToShow: 2 } 
        },
        { 
            breakpoint: 768, 
            settings: { slidesToShow: 3 } 
        },
        { 
            breakpoint: 992, 
            settings: { slidesToShow: 4} 
        }
    ],
});
