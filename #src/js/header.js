$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });

  $(".header__list").click(function (event) {
    $(".header__burger,.header__menu").removeClass("active");
    $("body").removeClass("lock");
  });
});

jQuery(function ($) {
   $(‘a[href*=”#”]:not([href=”#”])’).click(function() {
   if (location.pathname.replace(/^\//,”) == this.pathname.replace(/^\//,”) && location.hostname == this.hostname) {
   var target = $(this.hash);
   target = target.length ? target : $(‘[name=’ + this.hash.slice(1) +’]’);
   if (target.length) {
   $(‘html, body’).animate({
   scrollTop: target.offset().top
   }, 1000);
   return false;
   }
   }
   });
   });