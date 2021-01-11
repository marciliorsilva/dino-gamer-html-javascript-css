const dino = document.querySelector('.dino');
const background = document.querySelector('.background');

let isJumping = false;
let isGameOver = false;
let position = 0;


function handleKeyUp(event) {
    if (event.keyCode === 32) {
      if (!isJumping) {
        jump();
      }
    }
}

function jump() {
    isJumping = true;
  
    let upInterval = setInterval(() => {
      if (position >= 150) {
        // Descendo
        clearInterval(upInterval);
  
        let downInterval = setInterval(() => {
          if (position <= 0) {
            clearInterval(downInterval);
            isJumping = false;
          } else {
            position -= 20;
            dino.style.bottom = position + 'px';
          }
        }, 20);
      } else {
        // Subindo
        position += 20;
        dino.style.bottom = position + 'px';
      }
    }, 20);
}