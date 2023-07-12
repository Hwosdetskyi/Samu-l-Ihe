
export function isWebp() {
  
   function testWebP(callback) {

      var webP = new Image();
      webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";

   }
   
   testWebP(function (support) {   

      if (support == true) {
         document.querySelector('body').classList.add('webp');
      }else{
         document.querySelector('body').classList.add('no-webp');
      }

   });

}



export function burger() {
   const iconMenu = document.querySelector('.menu__icon');
   if (iconMenu){
      const menuBody = document.querySelector('.menu__body');
      iconMenu.addEventListener("click", function(e) {
         document.body.classList.toggle('_lock')
         iconMenu.classList.toggle('_active');
         menuBody.classList.toggle('_active');
      });
   }
}



export function headerScroll() {
   const header = document.querySelector('.header');
   const headerCnt = document.querySelector('.header__container');
   window.addEventListener('scroll', () => {
      let scrollDistance = window.scrollY;
      if (scrollDistance > 0) {
         header.classList.add('_scroll');
         headerCnt.classList.add('_scroll');
      } else {
         header.classList.remove('_scroll');
         headerCnt.classList.remove('_scroll');
      }
   });
}



export function spoller() {
   const spoilerContent = document.querySelectorAll(".accordeon");
   spoilerContent.forEach((item, index) => {
      let spoilerButton = item.querySelector(".spec-menu__button");
      spoilerButton.addEventListener("click", () => {
         spoilerButton.classList.toggle("_active");
         let spoilerList = item.querySelector(".accordeon__list");
         if (spoilerButton.classList.contains("_active")) {
            spoilerList.style.height = `${spoilerList.scrollHeight}px`;
         } else {
            spoilerList.style.height = "0px"
         }
      })
   })
}



export function arrow() {
   let sublistItem = document.querySelectorAll(".menu__item");
   let menu = document.querySelector(".menu__list");
   sublistItem.forEach((item, index) => {
      item.addEventListener("click", function(e) {
         const isActive = item.classList.contains("_active");
         sublistItem.forEach((item, index) => {
            item.classList.remove("_active");
         })
         if (!isActive) {
            item.classList.add("_active");
         }
      })
   })
   document.addEventListener("click", function(e) {
      const target = e.target;
      if (!menu.contains(target)) {
        sublistItem.forEach((item, index) => {
          item.classList.remove("_active");
        });
      }
    });
}



export function swiperInit() {
   const swiper = new Swiper('.swiper', {
      // Налаштування Swiper
      modules: [Navigation, Pagination, Autoplay],
      pagination: {
         el: '.swiper-pagination',
         type: 'bullets',
         clickable: true
      },
      autoHeight: true,
      slidesPerView: 1,
      spaceBetween: 30,
      slidesPerGroup: 1,
      autoplay: {
         delay: 3000,
         disableOnInteraction: false
      },
      speed: 900,
      breakpoints: {
         1250: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3,
         },
         767: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 2,
         }
      }
   });
}