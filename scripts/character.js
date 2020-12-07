//  author: mina, vinson
//  date: 2020-11-24
//  title: twd - javascript game - js

// Player Movement Javascript
 /*----------------------------------  First Attempt */

 document.onkeydown = detectKey;
 function detectKey(e) {
     var posLeft = document.getElementById('player').offsetLeft;
     var posTop = document.getElementById('player').offsetTop;
     e = e || window.event;
     /*
     if (e.keyCode == '38') {
         // up arrow
         document.getElementById('player').style.marginTop  = (posTop-10)+"px";
     }
     else if (e.keyCode == '40') {
         // down arrow
         document.getElementById('player').style.marginTop  = (posTop+10)+"px";
     }
     else */
     
    
     if (e.keyCode == '37') {
        // left arrow
         document.getElementById('player').style.marginLeft  = (posLeft-50)+"px";
     }
     else if (e.keyCode == '39') {
        // right arrow
         document.getElementById('player').style.marginLeft  = (posLeft-1)+"px";
     }
 }



/*----------------------------------  Second Attempt 
<body onkeydown='getKeyAndMove(event)'></body>

//init object globally
var objImage= null;
function init(){ 
    objImage=document.getElementById("dino");				
    objImage.style.position='relative';
    objImage.style.left='0px';
    objImage.style.top='0px';
}
function getKeyAndMove(e){		

    var key_code=e.which||e.keyCode;
    switch(key_code){
        case 37: //left arrow key
            moveLeft();
            break;
        case 38: //Up arrow key
            moveUp();
            break;
        case 39: //right arrow key
            moveRight();
            break;
        case 40: //down arrow key
            moveDown();
            break;						
    }
}
function moveLeft(){
    objImage.style.left=parseInt(objImage.style.left)-5 +'px';
}
function moveUp(){
    objImage.style.top=parseInt(objImage.style.top)-5 +'px';
}
function moveRight(){
    objImage.style.left=parseInt(objImage.style.left)+5 +'px';
}
function moveDown(){
    objImage.style.top=parseInt(objImage.style.top)+5 +'px';
}
window.onload=init;

*/ 

// Third Attempt
/*
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
    /*
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

// Fourth Attempt
let modifier = 5;
  window.addEventListener('keydown', (event) => {
    const { style } = player2;
    switch(event.key) {
      case 'ArrowUp': style.top = `${parseInt(style.top) - modifier}px`; break;
      case 'ArrowDown': style.top = `${parseInt(style.top) + modifier}px`; break;
      case 'ArrowLeft': style.left = `${parseInt(style.left) - modifier}px`; break;
      case 'ArrowRight': style.left = `${parseInt(style.left) + modifier}px`; break;
    }
  });