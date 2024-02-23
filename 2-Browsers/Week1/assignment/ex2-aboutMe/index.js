'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

// 1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, `hometown`) with your own information.
document.getElementById('nickname').textContent = 'Altay';
document.getElementById('fav-food').textContent = 'Hamburger';
document.getElementById('hometown').textContent = 'Ankara';
//
// 2. In JavaScript, iterate through each `<li>` and change the class to `list-item`.
const listItems = document.querySelectorAll('li');
for (let i = 0; i < listItems.length; i++) {
  listItems[i].classList.add('list-item');
}
