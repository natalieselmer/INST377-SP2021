/* we need to wait for all HTML to load before reading JS. this event listener does that */
document.addEventListener('DOMContentLoaded', () => {
  const bird = document.querySelector('.bird')
  const gameDisplay = document.querySelector('.game-container')
  const ground = document.querySelector('.ground')

  let birdLeft = 220
  let birdBottom = 100
  let gravity = 2

  function startGame(){
      birdBottom -= gravity
      bird.style.bottom = birdBottom + 'px'
    bird.style.left = birdLeft + 'px'
  }
  let timerId = setInterval(startGame,20)

  function control(e){
      if (e.keyCode == 32)
      jump()/* 32 is the keycode for the spacebar */
  }

function jump() {
    /* prevents the bird from jumping off of the top */
    if ( birdBottom < 500) birdBottom += 50
    bird.style.bottom = birdBottom + 'px'
}

document.addEventListener('keyup', control)

})
