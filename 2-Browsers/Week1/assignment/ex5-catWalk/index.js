'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-5-the-cat-walk


   Dancing cat URL:

   https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif
-----------------------------------------------------------------------------*/

const imgElement = document.querySelector('img');
imgElement.style.left = '0px';
let counter = 0;

function reStart() {
  imgElement.style.left = '0px';
  imgElement.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
  counter = 0;
}
function reSetWalkImg() {
  imgElement.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
}
function setDanceImage() {
  imgElement.src =
    'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
}

function catWalk() {
  imgElement.style.left = `${(counter = counter + 10)}px`;

  if (counter <= window.screen.width) {
    if (counter === window.screen.width / 2 - 160) {
      setDanceImage();
      setTimeout(catWalk, 5000);
    } else if (counter === window.screen.width / 2 - 150) {
      reSetWalkImg();
      setTimeout(catWalk, 50);
    } else {
      setTimeout(catWalk, 50);
    }
  } else {
    reStart();
    setTimeout(catWalk, 50);
  }
}

window.onload = catWalk;
