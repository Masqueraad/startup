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
