$(document).ready(function(){
  $('.car').slick({
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    dots: false,
    arrows: false,
    rows: 1
  });

  $('.car1').slick({
    slidesToShow: 4, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false, 
    rows: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576, 
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});