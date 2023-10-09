"use strict"

let burgerButton = document.querySelector(".burger-menu__button")
let navMenu = document.querySelector(".nav-menu")

burgerButton.addEventListener("click", function () {
  burgerButton.classList.toggle("burger-menu_not-active")
  burgerButton.classList.toggle("burger-menu_active")
  navMenu.classList.toggle("open")
})
