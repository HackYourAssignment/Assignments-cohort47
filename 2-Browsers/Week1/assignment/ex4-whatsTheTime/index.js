'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  // TODO complete this function
    function formatTime(date) {
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
      return `${hours}:${minutes}:${seconds}`;
    }
  
    // Function to update the displayed time
    function updateTime() {
      const currentTime = new Date();
      const formattedTime = formatTime(currentTime);
      
      // Display the time on the webpage
      document.getElementById('current-time').textContent = formattedTime;
  
      // Log the time to the console
      console.log('Current time:', formattedTime);
    }
  
    // Initial call to display the time when the function is executed
    updateTime();
  
    // Update the time every second using setInterval
    setInterval(updateTime, 1000);

  
}

// TODO execute `addCurrentTime` when the browser has completed loading the page
window.addEventListener('load', addCurrentTime);