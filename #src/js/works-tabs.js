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
