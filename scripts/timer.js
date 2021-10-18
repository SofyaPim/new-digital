 import removeRedPrices from "./removeRedPrices.js";
 import setRedPrices from "./setRedPrices.js";

 function timer() {

     const timer = document.querySelector('.timer-wrapper');
     let daysVal = document.querySelector('.timer-content__item.days .timer-content__item__numbers');
     let hoursVal = document.querySelector('.timer-content__item.hours .timer-content__item__numbers');
     let minutesVal = document.querySelector('.timer-content__item.minutes .timer-content__item__numbers');
     let secondsVal = document.querySelector('.timer-content__item.seconds .timer-content__item__numbers');
     let daysText = document.querySelector('.timer-content__item.days .timer-content__item__text');
     let hoursText = document.querySelector('.timer-content__item.hours .timer-content__item__text');
     let minutesText = document.querySelector('.timer-content__item.minutes .timer-content__item__text');
     let secondsText = document.querySelector('.timer-content__item.seconds .timer-content__item__text');
     let timerId;
     timer.classList.remove('visually-hidden');
     let left = +localStorage.getItem('day') - Date.now();

     function declOfNum(number, titles) {
         let cases = [2, 0, 1, 1, 1, 2];
         return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
     }
     const addZero = (num) => {
         if (num <= 9) {
             return '0' + num;
         } else {
             return num;
         }
     };

     if (left > 0) {

         runTimer();
         timerId = setInterval(runTimer, 1000);
         setRedPrices();
         console.log(timerId);
         timer.classList.remove('visually-hidden');


     } else {

         timer.classList.add('visually-hidden');
         removeRedPrices();

     }


     function runTimer() {

         let days = Math.floor(left / 1000 / 60 / 60 / 24);
         let hours = Math.floor(left / 1000 / 60 / 60) % 24;
         let minutes = Math.floor(left / 1000 / 60) % 60;
         let seconds = Math.floor(left / 1000) % 60;
         daysVal.textContent = addZero(days);
         hoursVal.textContent = addZero(hours);
         minutesVal.textContent = addZero(minutes);
         secondsVal.textContent = addZero(seconds);
         daysText.textContent = declOfNum(days, ['день', 'дня', 'дней']);
         hoursText.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
         minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
         secondsText.textContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);

         console.log(timerId);

         left = +localStorage.getItem('day') - Date.now();
         if (left < 0) {
             clearInterval(timerId);

             daysVal.textContent = "00";
             hoursVal.textContent = "00";
             minutesVal.textContent = "00";
             secondsVal.textContent = "00";
             setTimeout(() => {
                 timer.classList.add('visually-hidden');
             }, 500);

             removeRedPrices();
         }

     }


 }
 export default timer;