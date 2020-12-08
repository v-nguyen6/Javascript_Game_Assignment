//  author: mina, vinson
//  date: 2020-11-24
//  title: twd - javascript game - js

// --------------------------------------------------------------------------------------
/*      javascript game - basically dino frogger lol

    basics: 
        - user's dinosaur on the bottom, controlled by left and right directional keys
        - enemies (i.e. meteors) that are going from the top of the screen to the bottom
                => when enemies run into user, show "game over" screen
        - have a timer function
                => speed of enemies falling becomes faster with time


    goal:   
        - avoid enemies and collect meat
        - last as long as you can (like flappy bird?)

    user interactions:
        - avoid enemies with directional keys
        - have the game end when dinosaur is in contact with the meteor

        - collect meat that are also falling 
                => counts how much meat you run into?

    game progression
        - [game start]
            - "press enter to continue"

        - [character selection screen]
            - "left and right to select a character, press enter to select"

        - [game begins]
            - meteors immediately begins falling (starts off slow)
            - meat begins falling (user can collect for points)

        - [game over]
            - only when user runs into the meteor
            - shows "game over"
                - shows your stats => (1) how long survived and (2) how many points collected

    *********questions to ask michael lol:
        - does the game need to be playable on mobile?
        - how to reset the game after [game over]?
  */
// ------------------------------- the actual code lol ------------------------------- 

// [user => dinosaurs] 
// 
/*
    rules:
        1. move left and right on screen
            only within .game-container

    
var r = document.getElementById("player");

var left = 0;
var top = 0;

function move(e) {
    // Right Arrow
    if(e.keyCode == 39) {
        left += 2;
        player.style.left = (parseInt(left) + left) + "px";
    }
    // Left Arrow
    if(e.keyCode == 37) {
        left -= 2;
        player.style.left = (parseInt(left) + left) + "px";
    }
    
    // Down Arrow
    if(e.keyCode == 40) {
        top += 2;
        player.style.top = (parseInt(top) + top) + "px";
    }
    // Down Arrow
    if(e.keyCode == 40) {
        top += 2;
        player.style.top = (parseInt(top) + top) + "px";
    }
    
}


// Used to call the move function whenever a key is pressed
document.onkeydown = move;

*/
const player = document.getElementById("player");
player.style.left = '300px';

player.style.display = "none";

let modifier = 6;

window.addEventListener('keydown', (event) => {

    /*
    const { style } = player;
    */
    let x = parseInt(player.style.left);
    
    console.log(player);
    
    switch(event.key) {
        /*
        case 'ArrowUp': style.top = `${parseInt(style.top) - modifier}px`; 
            break;
        case 'ArrowDown': style.top = `${parseInt(style.top) + modifier}px`; 
            break;
        */
        case 'ArrowLeft': player.style.left = `${x - modifier}px`; 
            break;
        case 'ArrowRight': player.style.left = `${x + modifier}px`; 
            break;
    }
});


// --------------------------------------------------------------------------------------
// [timer function]





// --------------------------------------------------------------------------------------
// [earn points => collect falling meat]

const stats = document.getElementById("stats");
stats.style.display = "none";

// --------------------------------------------------------------------------------------
// [character selection]

var images = document.getElementsByClassName('thumbnails')[0].getElementsByTagName('img');

for (i = 0; i < images.length; i++) {
    images[i].onmouseover = function () {
        // change character preview image
        document.getElementById('preview').src = this.src;
        player.innerHTML = `<img src="${this.src}" alt="player" >`;
    }
}

// close window when button is pressed
const charButton = document.getElementById("charButton")
const gallery = document.getElementById("gallery")

charButton.addEventListener('click', function(){
    gallery.style.display = "none";
    player.style.display = "block";
    stats.style.display = "block";
});

// --------------------------------------------------------------------------------------
// [enemies => meteors]
/*
    rules:
        1. move automatically top to bottom
        2. falls faster with time
        3. when meteors come in contact with dinosaur, game over
 */

 asteroidTimer = null;
 asteroid1 = null;

 // Create function to randomly animate asteroids of different sizes
 function getRandomAsteroidWidth() {
     min = 20;
     max = 60;

     return Math.floor(Math.random() * Math.floor(max) + min);
 }

 // Create function to randomly animate the position of the asteroid on the window
 function getRandomNewLeftPosition() {
     min = 0;
     max = window.innerWidth - (parseInt(asteroid1.style.left) + asteroid1.width);

     newX = Math.floor(Math.random() * Math.floor(max));

     return newX;
 }

 // Create function to have the astroids falling 
 function fall(idOfTheAsteroid) {

    let theAstroid = document.getElementById(idOfTheAsteroid);

    if(parseInt(theAstroid.style.top) + theAstroid.height >= window.innerHeight) {
         
    /* for points
        points++;
    */
    
    theAstroid.style.top = "0px";
    theAstroid.style.left = getRandomNewLeftPosition() + "px";
    theAstroid.width = getRandomAsteroidWidth();

    if (idOfTheAsteroid == 'asteroid-1')
        
     } 
 }


 








// --------------------------------------------------------------------------------------
// [enemies => meteors]
/*
    rules:
        1. move automatically top to bottom
        2. falls faster with time
        3. when meteors come in contact with dinosaur, game over
 */

points = 0;



