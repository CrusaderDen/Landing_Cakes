//функция вывода фото
function insertPhoto(swiperName, total) {
   const swiper = document.querySelector(`.${swiperName}`)
   for (let i = 1; i <= total; i++) {
     swiper.insertAdjacentHTML("beforeend",
         // без лейзи лоад
      //  `
      //   <div class="swiper-slide">
      //    <img src="./slider-photo/${swiperName}/${i}.jpg" alt="фото"/>
      //  </div> 
      //  `
       // с лейзи лоад
          `<div class="swiper-slide">
          <img src="./slider-photo/${swiperName}/${i}.jpg" alt="фото" loading="lazy"/>
          <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </div>`
     )
   }
 }
 
 //вызовы функции вывода для разных слайдеров
 insertPhoto("cakes", 31)
 insertPhoto("cupcakes", 18)
 insertPhoto("sliced", 9)