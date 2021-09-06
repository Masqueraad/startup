$(".about-block-slider").slick({
  dots: false,
  arrows: true,
  adaptiveHeight: true,
  slidesToShow: 4,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
$(".button1").click(function (e) {
  $(".about-block-slider").slick("slickNext");
});
$(".button1").click(function (e) {
  $(".about-block-slider").slick("slickPrev");
});
