'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

const ul = document.querySelector('ul');
const listElements = ul.getElementsByTagName('li');
Array.from(listElements).forEach((liElement) => {
  liElement.classList.add('list-item');
  if (liElement.children[0].id === 'nickname')
    document.getElementById('nickname').textContent = 'Hailu';
  if (liElement.children[0].id === 'fav-food')
    document.getElementById('fav-food').textContent = 'shiro and entatie';
  if (liElement.children[0].id === 'hometown')
    document.getElementById('hometown').textContent = 'Mekelle';
});
