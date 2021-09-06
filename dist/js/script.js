// webpCheck
function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });

  $(".header__link").click(function (e) {
    $(".header__burger,.header__menu").removeClass("active");
    $("body").removeClass("lock");
  });
});

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

document.querySelectorAll(".tab-triggers__item").forEach((item) =>
  item.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.target.getAttribute("href").replace("#", "");

    document
      .querySelectorAll(".tabs-content__item")
      .forEach((child) => child.classList.remove("tabs-content__item--active"));

    document
      .querySelectorAll(".tab-triggers__item")
      .forEach((child) => child.classList.remove("tab-triggers__item--active"));

    item.classList.add("tab-triggers__item--active");
    document.getElementById(id).classList.add("tabs-content__item--active");
  })
);

document.querySelector(".tab-triggers__item").click();
