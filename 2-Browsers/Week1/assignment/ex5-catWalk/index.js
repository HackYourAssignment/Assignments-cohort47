'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-5-the-cat-walk

1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving 
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left 
   hand side (`0px`). So they should keep walking from left to right across the 
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image 
   of a cat dancing (use this URL given below), keep it dancing for 5 seconds, 
   and then replace the img with the original image and have it 
   continue the walk.

   Dancing cat URL:

   https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif
-----------------------------------------------------------------------------*/
function catWalk() {
  // TODO complete this function
  let currentPosition = 0;

function catWalk() {
  const img = document.querySelector('img');
if (currentPosition < 750) {
    currentPosition += 10;
    img.style.left = currentPosition + "px";
  } else if (currentPosition === 750) {
   
    img.src = "https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif";
    setTimeout(function() {
     
      currentPosition += 10;
      img.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
      img.style.left = currentPosition + "px";
    }, 5000);
  } else if (currentPosition < 1500) {
    
    currentPosition += 10;
    img.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
    img.style.left = currentPosition + "px";
  } else {
    
    currentPosition = 0;
    img.style.left = currentPosition + "px";
  }
}

}

// TODO execute `catWalk` when the browser has completed loading the page
document.addEventListener('DOMContentLoaded', function() {
  setInterval(catWalk, 50);
});