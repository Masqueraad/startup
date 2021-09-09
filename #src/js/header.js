$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
  $(".header__list, .header__logo").click(function (event) {
    $(".header__burger,.header__menu").removeClass("active");
    $("body").removeClass("lock");
  });
});
