import getHornsOrButts from './get-horns-or-butts.js';

//posting our cast list, and calling the elements we want
const unicoinButton = document.getElementById('unicoin-button');
const uniImage = document.getElementById('uni-image');
const message = document.getElementById('message');
const headsChoice = document.getElementById('heads-choice');
const winsDisplay = document.getElementById('wins');
const lossesDisplay = document.getElementById('losses');

//initialize stuff
let wins = 0;
let losses = 0;

//add event listener for the button click, wiring UP!
unicoinButton.addEventListener('click', () => {
    const randomNumber = Math.random();
    const flip = getHornsOrButts(randomNumber);
    
//change image display
    const imageSource = './assets/' + flip + '.jpg';
    uniImage.src = imageSource;

//initializing empty guess, making it unihead or unibutt
//linking our radio button guess to our unicoin button
    let guess = '';
    if(headsChoice.checked) {
        guess = 'unihead';
    } else {
        guess = 'unibutt';
    }

//display message and change based on user selection
    const guessedCorrect = flip === guess;

    if(guessedCorrect) {
        message.textContent = 'You won!';
    } else {
        message.textContent = 'You lose!';
    }

//increment wins or losses up
    if(guessedCorrect) {
        wins++;
        winsDisplay.textContent = 'Wins: ' + wins;
    } else {
        losses++;
        lossesDisplay.textContent = 'Losses: ' + losses;
    }
    
});

