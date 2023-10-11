"use strict"
//-------------Настройки слайдера-----------------------
new Swiper(".swiper", {
  // Optional parameters
  // direction: 'vertical',
  loop: false,
  speed: 500,

//   effect: "cube",
//   cubeEffect: {
//     slideShadows: false,
//   },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    //   clickable: true,
    //   dynamicBullets: true,
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
      return (
        'Фото <span class ="' +
        currentClass +
        '"></span>' +
        " из " +
        '<span class ="' +
        totalClass +
        '"></span>'
      )
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  grabCursor: true,
  //   slidesPerView: 3,
})

//-------------Мобильное меню-----------------------

let burgerButton = document.querySelector(".burger-menu__button")
let navMenu = document.querySelector(".nav-menu")

burgerButton.addEventListener("click", function () {
  burgerButton.classList.toggle("burger-menu_not-active")
  burgerButton.classList.toggle("burger-menu_active")
  navMenu.classList.toggle("open")
})
navMenu.addEventListener("click", function () {
  if (navMenu.classList.contains("open")) {
    navMenu.classList.toggle("open")
    burgerButton.classList.toggle("burger-menu_not-active")
    burgerButton.classList.toggle("burger-menu_active")
  }
})

//-------------Вывод фото в слайдеры-----------------------
//функция вывода фото
function insertPhoto(swiperName, total) {
  const swiper = document.querySelector(`.${swiperName}`)
  for (let i = 1; i <= total; i++) {
    swiper.insertAdjacentHTML(
      "beforeend",
      `
      <div class="swiper-slide">
        <img src="./slider-photo/${swiperName}/${i}.jpg" alt="фото" />
      </div>      
      `
    )
  }
}
//вызовы функции вывода для разных слайдеров
insertPhoto("cakes", 32)
insertPhoto("cupcakes", 19)
insertPhoto("sliced", 10)

//-------------Открытие формы обратной связи-----------------------

const formOpenBtn = document.querySelector(".order-btn")
const formWrapper = document.querySelector(".order-form__wrapper")

formOpenBtn.addEventListener('click', function(){
   formWrapper.classList.toggle('order-form__wrapper-open')
   formOpenBtn.classList.toggle('order-btn_open')
}) 