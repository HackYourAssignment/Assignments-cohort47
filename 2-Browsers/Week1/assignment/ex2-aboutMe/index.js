'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/
const nickname = document.querySelector('#nickname');
const food = document.querySelector('#fav-food');
const hometown = document.querySelector('#hometown');

const list = document.querySelectorAll('li');

nickname.textContent = 'Rustam';
food.textContent = 'pastila';
hometown.textContent = 'Aktau';

for (let i = 0; i < list.length; i++) {
  list[i].classList.add('list-item');
}
