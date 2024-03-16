'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

const allLists = document.querySelectorAll('ul li');

allLists.forEach(li => {
   li.classList.add('list-item');
   if (li.firstElementChild.id === 'nickname') li.firstElementChild.textContent = 'Gumaan';
   else if (li.firstElementChild.id === 'fav-food') li.firstElementChild.textContent = 'Honey';
   else if (li.firstElementChild.id === 'hometown') li.firstElementChild.textContent = 'Yemen';
});