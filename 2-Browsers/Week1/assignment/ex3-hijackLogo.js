'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-3-the-logo-hijack

1. Find out how to select the element that contains the Google logo, and store 
   it in a variable.
2. Modify the `src` and `srcset` of the logo so that it's replaced by the 
   HackYourFuture logo instead.
------------------------------------------------------------------------------*/
function hijackGoogleLogo() {
   const googleLogo = document.querySelector(".lnXdpd");
  
   if (googleLogo) {
   
     googleLogo.src = "https://your-hackyourfuture-logo-url.png";
     googleLogo.srcset = "https://your-hackyourfuture-logo-url.png 1x, https://your-hackyourfuture-logo-url-2x.png 2x"; 
   }
}

hijackGoogleLogo();



/** went on google and looked for their naming
<img class="lnXdpd" alt="Google" height="92" src="/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png" srcset="/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png 1x, /images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png 2x" width="272">
 */