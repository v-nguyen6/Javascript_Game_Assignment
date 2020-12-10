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

let playerSpeed = 6;

window.addEventListener('keydown', (event) => {

    /*
    const { style } = player;
    */
    let x = parseInt(player.style.left);
    
    console.log(player);
    
    switch(event.key) {
        /*
        case 'ArrowUp': style.top = `${parseInt(style.top) - playerSpeed}px`; 
            break;
        case 'ArrowDown': style.top = `${parseInt(style.top) + playerSpeed}px`; 
            break;
        */
        case 'ArrowLeft': player.style.left = `${x - playerSpeed}px`; 
            break;
        case 'ArrowRight': player.style.left = `${x + playerSpeed}px`; 
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

// when user clicks "confirm selection", close screen and show player & stats
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

meteorTimer1 = null;
meteor1 = null;
meteorTimer2 = null;
meteor2 = null;


// function to produce random meteor widths
function getRandomMeteorWidth() {
    min = 10;
    max = 30;

    return Math.floor(Math.random() * Math.floor(max) + min);
}

// function to produce random meteor heights
function getRandomMeteorHeight() {
    min = 10;
    max = 30;

    return Math.floor(Math.random() * Math.floor(max) + min);
}

// function to make the meteor fall at random positions in the window 
function getRandomNewLeftPosition() {
    min = 0;
    //$("#game-container") INSTEAD OF WINDOW???
    max = window.innerWidth - (parseInt(meteor1.style.left) + meteor1.width);

    newX = Math.floor(Math.random() * Math.floor(max));

    // alert("new x position is " + newX)
    return newX;
}


function fall(idOfTheMeteor) {

    let theMeteor = document.getElementById(idOfTheMeteor);

    theMeteor.style.top = parseInt(theMeteor.style.top) + 1 + "px";

    if(parseInt(theMeteor.style.top) + theMeteor.height >= window.innerHeight) {

        points++;

        // Animates the meteor falling        
        theMeteor.style.top = "0px";
        theMeteor.style.left = getRandomNewLeftPosition() + "px";
        theMeteor.width = getRandomMeteorWidth();
        theMeteor.height = getRandomMeteorHeight();

        if(idOfTheMeteor == 'm1') {
            clearInterval(meteorTimer1);
            meteorTimer1=setInterval("fall('" + idOfTheMeteor +"')", intervalMs);   
        }
        else if(idOfTheMeteor == "m2") {
            clearInterval(meteorTimer2);
            meteorTimer2=setInterval("fall('" + idOfTheMeteor +"')", intervalMs);
        }

        intervalMs = getRandomMeteorWidth();

    }
}

// Function to make meteors animate and fall down 
function makeMeteorsRain() {
    //alert(window.innerHeight)

    meteor1 = document.getElementById("m1");

    // Creates the 2nd meteor
    meteor2 = document.createElement("img");
    // assigns id to the newly created meteor 2
    meteor2.id = "m2";
    // assigns style parameters to the newly created meteor
    meteor2.style.top = "0px";
    meteor2.style.position="absolute";
    meteor2.style.left= getRandomNewLeftPosition();
    meteor2.width = getRandomMeteorWidth();
    meteor2.height = getRandomMeteorHeight();
    meteor2.src="./images/meteor.png";
    document.body.appendChild(meteor2);


    meteor1.width = getRandomMeteorWidth();
    intervalMs = getRandomMeteorWidth();
    meteorTimer1=setInterval("fall('m1')", intervalMs);
    meteorTimer2=setInterval("fall('m2')", 5);
}

onload=makeMeteorsRain;




// --------------------------------------------------------------------------------------
// [enemies => meteors]
/*
    rules:
        1. move automatically top to bottom
        2. falls faster with time
        3. when meteors come in contact with dinosaur, game over
 */
// Points

// points = 0;

function pointsTracker() {
    var usersPoints = "123";
    document.getElementById("pointsStat").innerHTML = points;
}



// --------------------------------------------------------------------------------------
// [game over state]
 /* Setting Timeout for points as well as game over
 setTimeout("alert(points)", 10000);
 setTimeout(gameOver, 12000);
*/
/*
timeSeconds = 0;
myTimer = setInterval(updateTime, 1000);

// Parameters for the Timing function to alert the end of game 
setTimeout("alert(points)", 1000000000);
setTimeout(gameOver, 1000000);

function gameOver() {
    clearInterval(meteorTimer1);
    clearInterval(meteorTimer2);
    clearInterval(myTimer);
    alert('GAME OVER');
}
}

function updateTime() {
    timeSeconds++;
    document.getElementById("time").innerHTML = timeSeconds;
}
*/

// --------------------------------------------------------------------------------------
// [sounds]

// create a new object constructor to handle sound objects
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
  }