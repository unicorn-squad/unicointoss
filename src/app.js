import getHornsOrButts from './get-horns-or-butts.js';

//posting our cast list, and calling the elements we want
const unicoinButton = document.getElementById('unicoin-button');
const uniImage = document.getElementById('uni-image');
//initialize stuff
console.log(unicoinButton);

//add event listener for the button click, wiring UP!
unicoinButton.addEventListener('click', () => {
    const randomNumber = Math.random();
    const flip = getHornsOrButts(randomNumber);
    
//change image display
    const imageSource = './assets/' + flip + '.jpg';
    uniImage.src = imageSource;

    
});

