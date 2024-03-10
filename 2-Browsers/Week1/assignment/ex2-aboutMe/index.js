'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

function setMyInfos() {
  const nickname = document.getElementById('nickname');
  nickname.textContent = 'Ahmet';
  const favFood = document.getElementById('fav-food');
  favFood.textContent = 'Hamburger';

  const homeTown = document.getElementById('hometown');
  homeTown.textContent = 'Kayseri';
}

function setListColors() {
  const list = document.querySelectorAll('li');

  list.forEach((el) => {
    el.className = 'list-item';
  });
}

setListColors();

setMyInfos();
