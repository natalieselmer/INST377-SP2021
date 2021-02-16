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

  /* 32 is the keycode for the spacebar */
  function control(e){
      if (e.keyCode == 32)
      jump()
  }

function jump() {
    /* prevents the bird from jumping off of the top */
    if ( birdBottom < 500) birdBottom += 50
    bird.style.bottom = birdBottom + 'px'
}

document.addEventListener('keyup', control)

function generateObstacle(){
    let obstacleLeft = 500
    let randomHeight = Math.random() * 60
    let obstacleBottom = randomHeight
    const obstacle = document.createElement('div')
    obstacle.classList.add('obstacle')
    gameDisplay.appendChild(obstacle)
    obstacle.style.left = obstacleLeft + 'px'
    obstacle.style.bottom = obstacleBottom + 'px'

    function moveObstacle(){
        obstacleleft -=2
        obstacle.style.left = obstacleLeft
        
    }
    let timerId = setinterval(moveObstacle, 20)


}

})
