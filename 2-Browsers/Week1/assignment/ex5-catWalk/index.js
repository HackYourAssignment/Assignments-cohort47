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
function catWalk(moveSpeed, isDancing) {
  const catImg = document.querySelector('img');

  if (isDancing) {
    // If cat is supposed to dance,
    // change the gif to dancing cat
    // wait 5 seconds and call the catWalking() again
    catImg.src =
      'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
    setTimeout(() => {
      catWalk(moveSpeed, false);
      catImg.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
      return;
    }, 5000);
  } else {
    if (
      //if cat leaves document.body
      parseInt(catImg.style.left.split('px')[0]) >=
      document.body.getBoundingClientRect().right
    ) {
      //slightly better than setting it to the 0 I guess.
      catImg.style.left = `${-catImg.clientWidth}px`;
    } else {
      // if the cat is inside the body
      // move 10px
      catImg.style.left = `${
        parseInt(catImg.style.left.split('px')[0]) + moveSpeed
      }px`;
    }

    // if the cat is in the middle of the screen
    if (
      document.body.getBoundingClientRect().width / 2 + moveSpeed / 2 >
        catImg.getBoundingClientRect().left + catImg.clientWidth &&
      catImg.getBoundingClientRect().left + catImg.clientWidth >
        document.body.getBoundingClientRect().width / 2 - moveSpeed / 2 &&
      isDancing === false
    ) {
      catWalk(moveSpeed, true);
      return;
    }

    // after the if statements call the catWalk in 50ms
    setTimeout(() => {
      catWalk(moveSpeed, false);
      return;
    }, 50);
  }
}

window.addEventListener('load', () => catWalk(10, false));
