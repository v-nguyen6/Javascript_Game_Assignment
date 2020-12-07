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


// [character selection] => mina working on this rn
// 
/*
    rules:
        1. left and right to select a character, press enter to select
        2. when user selects dinosaur, it changes the img for the rest of the game
*/      

function loadImages() {

    let imA = document.createElement("img")
    imA.id = "dinosaur_1"
    imA.src = "images/dinosaur_1.png"
    document.getElementById("game-container").appendChild(dinosaur_1)

    let imB = document.createElement("img")
    imB.id = "dinosaur_2"
    imB.src = "images/dinosaur_2.png"
    document.getElementById("game-container").appendChild(dinosaur_2)

    let imC = document.createElement("img")
    imC.id = "dinosaur_3"
    imC.src = "images/dinosaur_3.png"
    document.getElementById("game-container").appendChild(dinosaur_3)

    let imD = document.createElement("img")
    imD.id = "dinosaur_4"
    imD.src = "images/dinosaur_4.png"
    document.getElementById("game-container").appendChild(dinosaur_4)

    let imE = document.createElement("img")
    imE.id = "dinosaur_5"
    imE.src = "images/dinosaur_5.png"
    document.getElementById("game-container").appendChild(dinosaur_5)
}

/*     var allImages = document.getElementsByTagName("img")

    for(let i = 0; i < allImages.length; i++)
    {
        allImages[i].onclick = move
    }
 */
}





// --------------------------------------------------------------------------------------
// [user => dinosaurs] 
// 
/*
    rules:
        1. move left and right on screen
            only within .game-container
*/
    let character = document.querySelector('.dino-1');
    let moveBy = 10;

    window.addEventListener('load', () => {
        character.style.position = 'absolute';
        character.style.left = 0;
        character.style.top = 0;
    });

    window.addEventListener('keyup', (e) =>{
        switch(e.key) {
            case 'ArrowLeft':
                character.style.left = parseInt(character.style.left) - moveBy + 'px';
                break;
            case 'ArrowRight':
                character.style.left = parseInt(character.style.left) + moveBy - 'px';
            break;
        }
    });



// --------------------------------------------------------------------------------------
// [enemies => meteors]
/*
    rules:
        1. move automatically top to bottom
        2. falls faster with time
        3. when meteors come in contact with dinosaur, game over
 */




// --------------------------------------------------------------------------------------
// [timer function]
/*
    rules:
        1. 
*/




// --------------------------------------------------------------------------------------
// [earn points => collect falling meat]
/*
    rules:
        1. 
*/





// --------------------------------------------------------------------------------------
// [enemies => meteors]
/*
    rules:
        1. move automatically top to bottom
        2. falls faster with time
        3. when meteors come in contact with dinosaur, game over
 */


