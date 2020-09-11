

left = 0;

window.onload = function () {
   document.getElementById('harry').onclick = function () {
      document.querySelector('.header__img').style.marginLeft = left + -200 + 'px';

      left -= 200;
      if (left <= -800) {
         left = 200;
      }
   }
   document.getElementById('h1').onclick = function () {
      document.querySelector('.h1').style.display = "block";
      document.querySelector('.h2').style.display = "none";
      document.querySelector('.h3').style.display = "none";
      document.querySelector('.h4').style.display = "none";
      document.querySelector('.h5').style.display = "none";
      document.querySelector('.h6').style.display = "none";
      document.querySelector('.h7').style.display = "none";
      document.querySelector('.h7_1').style.display = "none";



   }
   document.getElementById('h2').onclick = function () {
      document.querySelector('.h1').style.display = "none";
      document.querySelector('.h2').style.display = "block";
      document.querySelector('.h3').style.display = "none";
      document.querySelector('.h4').style.display = "none";
      document.querySelector('.h5').style.display = "none";
      document.querySelector('.h6').style.display = "none";
      document.querySelector('.h7').style.display = "none";
      document.querySelector('.h7_1').style.display = "none";


   }
   document.getElementById('h3').onclick = function () {
      document.querySelector('.h1').style.display = "none";
      document.querySelector('.h2').style.display = "none";
      document.querySelector('.h3').style.display = "block";
      document.querySelector('.h4').style.display = "none";
      document.querySelector('.h5').style.display = "none";
      document.querySelector('.h6').style.display = "none";
      document.querySelector('.h7').style.display = "none";
      document.querySelector('.h7_1').style.display = "none";
   }
   document.getElementById('h4').onclick = function () {
      document.querySelector('.h1').style.display = "none";
      document.querySelector('.h2').style.display = "none";
      document.querySelector('.h3').style.display = "none";
      document.querySelector('.h4').style.display = "block";
      document.querySelector('.h5').style.display = "none";
      document.querySelector('.h6').style.display = "none";
      document.querySelector('.h7').style.display = "none";
      document.querySelector('.h7_1').style.display = "none";
   }
   document.getElementById('h5').onclick = function () {
      document.querySelector('.h1').style.display = "none";
      document.querySelector('.h2').style.display = "none";
      document.querySelector('.h3').style.display = "none";
      document.querySelector('.h4').style.display = "none";
      document.querySelector('.h5').style.display = "block";
      document.querySelector('.h6').style.display = "none";
      document.querySelector('.h7').style.display = "none";
      document.querySelector('.h7_1').style.display = "none";
   }

   document.getElementById('h6').onclick = function () {
      document.querySelector('.h1').style.display = "none";
      document.querySelector('.h2').style.display = "none";
      document.querySelector('.h3').style.display = "none";
      document.querySelector('.h4').style.display = "none";
      document.querySelector('.h5').style.display = "none";
      document.querySelector('.h6').style.display = "block";
      document.querySelector('.h7').style.display = "none";
      document.querySelector('.h7_1').style.display = "none";
   }
   document.getElementById('h7').onclick = function () {
      document.querySelector('.h1').style.display = "none";
      document.querySelector('.h2').style.display = "none";
      document.querySelector('.h3').style.display = "none";
      document.querySelector('.h4').style.display = "none";
      document.querySelector('.h5').style.display = "none";
      document.querySelector('.h6').style.display = "none";
      document.querySelector('.h7').style.display = "block";
      document.querySelector('.h7_1').style.display = "none";
   }
   document.getElementById('h7_1').onclick = function () {
      document.querySelector('.h1').style.display = "none";
      document.querySelector('.h2').style.display = "none";
      document.querySelector('.h3').style.display = "none";
      document.querySelector('.h4').style.display = "none";
      document.querySelector('.h5').style.display = "none";
      document.querySelector('.h6').style.display = "none";
      document.querySelector('.h7').style.display = "none";
      document.querySelector('.h7_1').style.display = "block";
   }



   document.querySelector('.proFilm__btn').onclick = function () {
      this.style.display = "none";
      document.querySelector('.proFilm__block2').style.display = "block"
   }
   document.querySelector('.proFilm__btn2').onclick = function () {
      document.querySelector('.proFilm__block2').style.display = "none";
      document.querySelector('.proFilm__btn').style.display = "block"
   }



   let hidem = document.querySelector('.hidem').onclick = function (event) {
      let imgs = document.querySelectorAll('.card-img-top');

      let ev = event.target;
      console.log(ev);



   }
   let snitch = document.querySelector('.snitch')
   document.onmousemove = function (event) {
      snitch.style.position = "fixed";
      snitch.style.left = event.clientX + -60 + 'px';
      snitch.style.top = event.clientY + -60 + 'px';
   }
   

   document.querySelector('.mm').onclick = function backTop() {
      let scr = Math.floor(window.pageYOffset);
      document.querySelector('.mm').classList.add('metla__transit')
      let scrol = Math.floor(window.pageYOffset);
      
      if (scrol > 0) {
         window.scrollTo(0, scr - 30)
      }
      let timer = setTimeout(backTop, 30)

      if (scrol == 0) {

         clearTimeout(timer);
      }

      setTimeout(() => document.querySelector('.mm').classList.remove('metla__transit'), 3000)

   }









   document.querySelector('.img2').onclick = function () {

      let avada = document.querySelector('.avada').play();
      document.querySelector('.headers').style.display = "none"
      document.querySelector('.av').style.display = "block"

      setTimeout(() => document.querySelector('.headers').style.display = "block", 2000)
      setTimeout(() => document.querySelector('.av').style.transform = "scale(14)", 1500)
      setTimeout(() => document.querySelector('.av').style.display = 'none', 2000)
      setTimeout(() => location.reload(), 4000)
   }






   document.querySelector('.header__btn').onclick = function () {
      let inp = document.getElementById('header__inp').value;

      if (inp < '0' || inp > '9') {
         document.querySelector('.b').classList.add('animate__jello')
         document.querySelector('.header__text').classList.add('animate__lightSpeedInRight')
         document.querySelector('.header__text').innerHTML = "приятного просмотра " + inp;

         setTimeout(() => location.reload(), 5000)

      }

      else {
         document.getElementById('header__inp').value = "";

         alert('ведите имя 🙂')


         return false
      }




   }


}
