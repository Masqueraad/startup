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

const modal = document.querySelector(".modal");
const btn = document.querySelectorAll(".works-block-tabs-hover__btn");

btn.forEach(function (element, index) {
  element.onclick = function () {
    let allPopup = document.querySelectorAll(".popup");
    allPopup.forEach(function (element, index) {
      element.style.display = "none";
    });
    let popup = document.querySelector(".popup" + index);
    modal.style.display = "block";
    popup.style.display = "block";
  };
  let close = document.querySelector(".popup" + index + " .close");
  close.onclick = function () {
    modal.style.display = "none";
  };

  let windowClose = document.querySelector(".popup" + index);
  window.onclick = function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };
});

// external js: isotope.pkgd.js

// init Isotope
var $grid = $(".grid").isotope({
  itemSelector: ".element-item",
  layoutMode: "fitRows",
  getSortData: {
    name: ".name",
    symbol: ".symbol",
    number: ".number parseInt",
    category: "[data-category]",
    weight: function (itemElem) {
      var weight = $(itemElem).find(".weight").text();
      return parseFloat(weight.replace(/[\(\)]/g, ""));
    },
  },
});

// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function () {
    var number = $(this).find(".number").text();
    return parseInt(number, 10) > 50;
  },
  // show if name ends with -ium
  ium: function () {
    var name = $(this).find(".name").text();
    return name.match(/ium$/);
  },
};

// bind filter button click
$("#filters").on("click", "button", function () {
  var filterValue = $(this).attr("data-filter");
  // use filterFn if matches value
  filterValue = filterFns[filterValue] || filterValue;
  $grid.isotope({ filter: filterValue });
});

// bind sort button click
$("#sorts").on("click", "button", function () {
  var sortByValue = $(this).attr("data-sort-by");
  $grid.isotope({ sortBy: sortByValue });
});

// change is-checked class on buttons
$(".button-group").each(function (i, buttonGroup) {
  var $buttonGroup = $(buttonGroup);
  $buttonGroup.on("click", "button", function () {
    $buttonGroup.find(".is-checked").removeClass("is-checked");
    $(this).addClass("is-checked");
  });
});
