let walkingCat = document.querySelector('img');
walkingCat.style.left = '0px';
const screenWidth = window.innerWidth - walkingCat.offsetWidth;
let isDancing = false;

function catWalk() {
    let currentPosition = parseInt(walkingCat.style.left) || 0;
    let newPosition = currentPosition + 10;

    if (!isDancing) {
        walkingCat.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
        walkingCat.style.left = newPosition + 'px';
        if (newPosition >= screenWidth / 2) {
            isDancing = true;
            setTimeout(() => {
                walkingCat.src = 'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif'; 
                setTimeout(() => {
                    isDancing = false;
                }, 5000); 
}, 0);
        }
    } 

    if (newPosition >= window.innerWidth) {
        walkingCat.style.left = '0px';
    }
}

setInterval(catWalk, 50);

window.onload = catWalk;
