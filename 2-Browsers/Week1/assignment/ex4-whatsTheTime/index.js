'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/

function addCurrentTime() {
  const time =  document.querySelector('.timeView');
  const currentTime = new Date();
  const hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  if (parseInt(minutes) < 10) {
    minutes = '0' + minutes;
  }
  let seconds = currentTime.getSeconds();
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
    time.textContent ='Time is ' + hours + ':' + minutes + ':' + seconds;
  console.log('Time is ' + hours + ':' + minutes + ':' + seconds);
}

window.addEventListener('load', () => setInterval(addCurrentTime, 1000));
