"use strict"
//-------------Настройки слайдера-----------------------
const swiper = new Swiper('.swiper', {
   // Optional parameters
   effect: 'cube',
   lazy: true,
   direction: 'horizontal',
   loop: true,
   speed: 800,
 
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
     clickable:true,
   },
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },

 });

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

//-------------Открытие формы обратной связи-----------------------

const formOpenBtn = document.querySelector(".order-btn")
const formWrapper = document.querySelector(".order-form__wrapper")

formOpenBtn.addEventListener("click", function () {
  formWrapper.classList.toggle("order-form__wrapper-open")
  formOpenBtn.classList.toggle("order-btn_open")
})
