const buttonMore = document.querySelector(".button");
const buttonMoreImg = document.querySelector(".button__img");
const contMore = document.querySelector(".container2");
const buttonMoreText = document.querySelector(".button__text");

new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  spaceBetween: 16,
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1.3,
    },
    480: {
      slidesPerView: 2,
    },
  },
});

function buttonClick() {
  if (!contMore.classList.contains("container2-more")) {
    buttonMoreText.textContent = "Скрыть";

    contMore.classList.add("container2-more");
    buttonMoreImg.style.transform = "rotate(180deg)";
  } else {
    buttonMoreText.textContent = "Показать все";

    contMore.classList.remove("container2-more");
    buttonMoreImg.style.transform = "rotate(0deg)";
  }
}

buttonMore.addEventListener("click", buttonClick);
