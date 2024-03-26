'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

// TODO add your JavaScript code here.

const allSpans = document.querySelectorAll('span');
const allLists = document.querySelectorAll('ul li');

allSpans.forEach(span => {
   console.log(span.id);
   if (span.id === 'nickname') span.textContent = 'Gumaan';
   else if (span.id === 'fav-food') span.textContent = 'Honey';
   else if (span.id === 'hometown') span.textContent = 'Yemen';
});

allLists.forEach(li => {
   li.classList.add('list-item');
});