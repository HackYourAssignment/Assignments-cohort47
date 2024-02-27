'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  const timer = document.querySelector('.timer');
  const currentDate = new Date();
  const hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  if (parseInt(minutes) < 10) {
    minutes = '0' + minutes;
  }
  let seconds = currentDate.getSeconds();
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  timer.textContent = 'Time is ' + hours + ':' + minutes + ':' + seconds;
  console.log('Time is ' + hours + ':' + minutes + ':' + seconds);
}

window.addEventListener('load', () => setInterval(addCurrentTime, 1000));
