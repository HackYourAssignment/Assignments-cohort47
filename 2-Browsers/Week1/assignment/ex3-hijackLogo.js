'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-3-the-logo-hijack

1. Find out how to select the element that contains the Google logo, and store 
   it in a variable.
2. Modify the `src` and `srcset` of the logo so that it's replaced by the 
   HackYourFuture logo instead.

   // I found this from stackoverflow it select the logo but can not assign hyf as logo to the google web site.

------------------------------------------------------------------------------*/
function hijackGoogleLogo() {
  const logo = document.querySelector('img[alt="Google"]');
  logo.src = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
  logo.srcset =
    'https://www.hackyourfuture.dk/static/logo-dark.svg 480w, https://www.hackyourfuture.dk/static/logo-dark.svg 800w';
  logo.sizes = '(max-width: 600px) 480px,800px';
}

hijackGoogleLogo();
