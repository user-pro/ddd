

SmoothScroll({
   // Время скролла 400 = 0.4 секунды
   animationTime: 800,
   // Размер шага в пикселях
   stepSize: 75,

   // Дополнительные настройки:

   // Ускорение
   accelerationDelta: 30,
   // Максимальное ускорение
   accelerationMax: 2,

   // Поддержка клавиатуры
   keyboardSupport: true,
   // Шаг скролла стрелками на клавиатуре в пикселях
   arrowScroll: 50,

   // Pulse (less tweakable)
   // ratio of "tail" to "acceleration"
   pulseAlgorithm: true,
   pulseScale: 4,
   pulseNormalize: 1,

   // Поддержка тачпада
   touchpadSupport: true,
})
const animItems = document.querySelectorAll('._anim-item');

if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll);
   function animOnScroll() {
      for (let i = 0; i < animItems.length; i++) {
         const animItem = animItems[i],
            animItemHeight = animItem.offsetHeight,
            animItemOffset = offset(animItem).top,
            animStart = 4;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;
         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('_active');

         } else {
            animItem.classList.remove('_active');
         }
      }
   }
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
   }

   setTimeout(() => {
      animOnScroll();
   }, 300);
}
;


let sun = new Image();
let earth = new Image();
let saturn = new Image();
sun.src = '../img/sun.png';
earth.src = '../img/Earth2.png';
saturn.src = '../img/Saturn.png';;
let canvas = document.querySelector('.solar-system__canvas'),
   c = canvas.getContext('2d');
console.log(saturn.src);
saturn.addEventListener('load', () => {
   canvas.width = document.documentElement.clientWidth;
   canvas.height = document.documentElement.clientHeight;

   addEventListener('resize', (e) => {
      canvas.width = document.documentElement.clientWidth;
      canvas.height = document.documentElement.clientHeight;
      init();
   });

   c.fillRect(0, 0, canvas.width, canvas.height);
   const timesToUpdate = 60000 / 14.5;
   class Circle {
      constructor(x, y, width, height, velocity, distance, image) {
         this.x = x;
         this.y = y;
         this.width = width;
         this.height = height
         this.baseX = x;
         this.baseY = y;
         this.radians = 0;
         this.velocity = velocity;
         this.distance = distance;
         this.image = image;
      }

      draw() {
         // this.image.addEventListener('load', () => {
         c.drawImage(this.image, this.x, this.y, this.width, this.height);
         // });


      }
      update() {
         this.radians += this.velocity;
         this.x = this.baseX + Math.cos(this.radians) * this.distance;
         this.y = this.baseY + Math.sin(this.radians) * this.distance;
         this.draw();


      }
   }




   let planets;
   let objPlanets = [
      planet2 = {
         distance: 100,
         velocity: 0,
         timeToRotate: 1,
         img: earth,
         width: 100,
         height: 100
      },
      saturn = {
         velocity: 0,
         distance: 400,
         width: 175,
         height: 100,
         timeToRotate: 84,
         img: saturn
      },
      sun = {
         velocity: 0,
         distance: 0,
         width: 200,
         height: 200,
         timeToRotate: 84,
         img: sun
      }
   ]
   function init() {
      planets = [];
      objPlanets.forEach(elem => {
         elem.velocity = ((2 * Math.PI * 100 / timesToUpdate) / 100) / elem.timeToRotate;
         planets.push(new Circle(canvas.width / 2 - elem.width / 2, canvas.height / 2 - elem.height / 2, elem.width, elem.height, elem.velocity, elem.distance, elem.img));
      });

      console.log(planets);

   }

   function animate() {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, canvas.width, canvas.height)
      planets.forEach(planet => {
         planet.update();
      });



   }


   init();
   animate();
});
;

var typed = new Typed('#typed', {
   stringsElement: '#main-title',
   typeSpeed: 70,
   startDelay: 600,
});

window.onload = function () {
   const starsSpeedK = 30;
   const starsSpeedD = 20;

   const speed = 0.05;
   let positionX = 0, positionY = 0;
   let coordXprocent = 0, coordYprocent = 0;
   const stars = document.querySelector('.paralax-images__stars1'),
      stars2 = document.querySelector('.paralax-images__stars2'),
      mainParallax = document.querySelector('.main');

   function setMouseParallaxStyle() {
      const distX = coordXprocent - positionX,
         distY = coordYprocent - positionY;

      positionX = positionX + (distX * speed);
      positionY = positionY + (distY * speed);

      stars.style.cssText = `transform: translate(${positionX / starsSpeedK}%, ${positionY / starsSpeedK}%)`
      stars2.style.cssText = `transform: translate(${positionX / starsSpeedD}%, ${positionY / starsSpeedD}%)`



      requestAnimationFrame(setMouseParallaxStyle);
   }
   setMouseParallaxStyle();


   mainParallax.addEventListener('mousemove', e => {
      const parallaxWidth = mainParallax.offsetWidth,
         parallaxHeight = mainParallax.offsetHeight;


      const coordX = e.pageX - parallaxWidth / 2,
         coordY = e.pageY - parallaxHeight / 2;

      coordXprocent = coordX / parallaxWidth * 100;
      coordYprocent = coordY / parallaxHeight * 100;
   });
   let thresholdSets = [];

}
const mainSvgIcon1 = document.querySelector('.main-icon-1');
const mainSvgIcon2 = document.querySelector('.main-icon-2');
const mainSvgIcon3 = document.querySelector('.main-header');
setTimeout(() => {
   mainSvgIcon1.style.opacity = "1";
   mainSvgIcon2.style.opacity = "1";
   mainSvgIcon3.style.opacity = "1";
}, 4500);

let scrollHeight = Math.max(
   document.body.scrollHeight, document.documentElement.scrollHeight,
   document.body.offsetHeight, document.documentElement.offsetHeight,
   document.body.clientHeight, document.documentElement.clientHeight
);

let width = document.documentElement.clientWidth;


let specialAnimItem = document.querySelector('.special-animation'),
   progressLine = document.querySelector('.main-header__progress-line'),
   progressBarIcon = document.querySelector('.main-header__icon');


addEventListener('scroll', () => {
   let scrollProgress = (window.pageYOffset / (document.body.scrollHeight - window.innerHeight)) * 100;

   progressLine.style.width = `${scrollProgress}%`;
   if (window.pageYOffset > 0) {
      specialAnimItem.style.cssText = `
            transform: translate(-50%, -${50 + window.pageYOffset / 2}%);
         `;
      progressBarIcon.classList.add('_active');
   } else {
      progressBarIcon.classList.remove('_active');
   }
});



// progressLine.style.width = 

