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



export function spoller() {
   function removeOpen(index1) {
      spoilerContent.forEach((item2, index2) => {
         if (index1 != index2) {
            let spoilerBody = item2.querySelector(".accordeon-method__body");
            let spoilerIcon = item2.querySelector(".accordeon-method__icon");
            spoilerBody.classList.remove("_open");
            spoilerIcon.classList.remove("_open");
            spoilerBody.style.height = `0px`;
         }
      })
   }
   const spoilerContent = document.querySelectorAll(".accordeon-method");
   spoilerContent.forEach((item, index) => {
      let spoilerButton = item.querySelector(".accordeon-method__button");
      let spoilerBody = item.querySelector(".accordeon-method__body");
      let spoilerIcon = item.querySelector(".accordeon-method__icon");
      spoilerButton.addEventListener("click", () => {
         spoilerBody.classList.toggle("_open");
         spoilerIcon.classList.toggle("_open");
         if (spoilerBody.classList.contains("_open")) {
            spoilerBody.style.height = `${spoilerBody.scrollHeight}px`;
         } else {
            spoilerBody.style.height = "0px"
         }
         removeOpen(index);
      })
   })
}



export function smoothScroll() {
   const smoothCoef = 0.05;
   const smoothScroll = document.querySelector(".wrapper");
   const smoothScrollBar = document.querySelector(".smooth-scroll");

   function onResize(e) {
      smoothScrollBar.style.height = smoothScroll.offsetHeight + "px";
   }

   window.addEventListener("resize", onResize);
   onResize();

   let prevY = window.scrollY;
   let curY = window.scrollY;
   let y = window.scrollY;
   let dy;

   function loop(now) {
      curY = window.scrollY;
      dy = curY - prevY;
      y = Math.abs(dy) < 1 ? curY : y + dy * smoothCoef;
      prevY = y;
      smoothScroll.style.transform = `translate3d(0,${-y}px,0)`;

      requestAnimationFrame(loop);
   }
   requestAnimationFrame(loop);
}



export function parallaxText() {
   let text = document.querySelector(".main__container");
   if (!text) {
      return;
   }

   window.addEventListener('scroll', () => {
      let value = window.scrollY;
      text.style.marginTop = value * 0.3 + 'px';
   });
}



export function parallaxImg() {
   let image1 = document.querySelector(".image-first");
   let image3 = document.querySelector(".image-second");
   let image2 = document.querySelector(".image-third");
   // if (!image1) {
   //    return;
   // }
   window.addEventListener('scroll', () => {
      let value = window.scrollY;
      image1.style.top = value * 0.05 + 'px';
      image2.style.top = value * 0.05 + 'px';
      image3.style.top = value * 0.05 + 'px';
   });
}



export function scroolT() {
   const smoothScroll = function (targetEl, duration) {
      let target = document.querySelector(targetEl);
      let targetPosition = target.getBoundingClientRect().top;
      let startPosition = window.pageYOffset;
      let startTime = null;
      const ease = function(t,b,c,d) {
         t /= d / 2;
         if (t < 1) return c / 2 * t * t + b;
         t--;
         return -c / 2 * (t * (t - 2) - 1) + b;
      };
      const animation = function(currentTime){
         if (startTime === null) startTime = currentTime;
         const timeElapsed = currentTime - startTime;
         const run = ease(timeElapsed, startPosition, targetPosition, duration);
         window.scrollTo(0,run);
         if (timeElapsed < duration) requestAnimationFrame(animation);
      };
      requestAnimationFrame(animation);
   };
   const scrollTo = function () {
      const links = document.querySelectorAll('.js-scroll');
      links.forEach(each => {
         each.addEventListener('click', function () {
            const currentTarget = this.getAttribute('href');
            smoothScroll(currentTarget, 200);
         });
      });
   };
   scrollTo();
};



export function loader() {
   let mask = document.querySelector(".loader");
   window.addEventListener('load', () => {
      setTimeout(() => {
         mask.classList.add('hide');
      }, 3500)
   })
}