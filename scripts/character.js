//  author: mina, vinson
//  date: 2020-11-24
//  title: twd - javascript game - js

// Player Movement Javascript
 /*----------------------------------  First Attempt 
    let moveBy = 10;

    window.addEventListener('keydown', (event) => {
        const {style} = block;

        switch(event.key) {
            case 'ArrowLeft':
                style.left = '${parseInt(style.left) - moveBy}px';
            break;

            case 'ArrowRight':
                style.left = '${parseInt(style.left) + moveBy}px';
            break;
        }
    });
*/

/* Second Attempt 
var moveBy = null;

function init() {
    moveBy = document.getElementById("dino-1");
    moveBy.style.position="relative";
    moveBy.style.left='0px';
    moveBy.style.top='10px';
}

function getKeyAndMove(e) {
    var key_code = e.which||e.keyCode;

    switch(key_code) {
        //Left Arrow Key
        case 37:
            moveLeft();
        break;
        
        // Right Arrow Key
        case 39:
            moveRight();
        break;
    }
}

function moveLeft() {
    moveBy.style.left=parseInt(moveBy.style.left)-5+'px';
}

function moveRight() {
    moveBy.style.left=parseInt(moveBy.style.left)+5+'px';
}

window.onload=init;
*/

/* Third Attempt 
// use the arrow keys to move the zebra with a switch statement 

$(document).on('keydown', function(e) {
    // e stands for "event" - the event is the keypress 
    // e.key means the key that was pressed
    switch (e.key) {
  
      // left arrow pressed
      case "ArrowLeft":
        $('#dino-1').animate({
          left: "-=10px"
        }, 'fast');
        break;
        // up arrow pressed
      case "ArrowUp":
        $('#dino-1').animate({
          top: "-=10px"
        }, 'fast');
        break;
        // right arrow pressed
      case "ArrowRight":
        $('#dino-1').animate({
          left: "+=10px"
        }, 'fast');
        break;
        // down arrow pressed
      case "ArrowDown":
        $('#dino-1').animate({
          top: "+=10px"
        }, 'fast');
        break;
    }
  });
  */

  /*---------------------------------- Fourth Attempt 
  document.onkeydown = detectKey;
  function detectKey(e) {
      var posLeft = document.getElementById('player').offsetLeft;
      var posTop = document.getElementById('player').offsetTop;
      e = e || window.event;
  
      /*
      if (e.keyCode == '38') {
          // up arrow
          document.getElementById('player').style.marginTop  = (posTop-30)+"px";
      }
      else if (e.keyCode == '40') {
          // down arrow
          document.getElementById('player').style.marginTop  = (posTop+30)+"px";
      }
      else  */
      if (e.keyCode == '37') {
        // left arrow
         document.getElementById('player').style.marginLeft  = (posLeft-30)+"px";
     }
     else if (e.keyCode == '39') {
        // right arrow
         document.getElementById('player').style.marginLeft  = (posLeft+30)+"px";
     }
 }

 */