document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
  const doodler = docuement.createElement('div')  
  let doodlerLeftSpace = 50
  let doodlerBottomSpace = 150
  let isGameOver = false
  let platformCount = 5
  let platforms = []
  let upTimerId 
  let downTimerId
  let isJumping  = false 

  function createDoodler() {
    grid.appendChild(doodler)
    doodler.classList.add('doodler') 
    doodlerLeftSpace = platforms[0].left
    doodler.style.left = doodlerLeftSpace + 'px' 
    doodler.style.bottom = doodlerBottomSpace + 'px'
}

  class Platform {
    constructor(newPlatBottom) {
      this.left = Math.random() * 315
      this.bottom = newPlatBottom
      this.visual = document.createElement('div')

      const visual = this.visual
      visual.classList.add('platform')
      visual.style.left = this.left + 'px'
      visual.style.bottom = this.bottom + 'px'
      grid.appendChild(visual)
    }
  }

  function createPlatforms() {
    for(let i =0; i < platformCount; i++) {
      let platGap = 600 / platformCount
      let newPlatBottom = 100 + i * platGap
      let newPlatform = new Platform (newPlatBottom)
      platforms.push(newPlatform)
      console.log(platforms)
      
    }
  }

  function movePlatforms(){
      if (doodlerBottomSpace > 200){
          platforms.forEach(platform => {
              platform.bottom -=4
              let visual = platform.visual
              visual.style.bottom = platform.bottom + 'px'
             })
      }
  }

  function jump(){
      clearInterval(downTimerId)
      isJumping = true
      upTimerId = setInterval(function () {
        doodlerBottomSpace += 20
        doodler.style.bottom = doodlerBottomSpace + 'px'
        if (doodlerBottomSpace > 350) {
            fall()
        }
      },30)
  }

  function fall(){
      clearInterval(upTimerId)
      isJumping = false
      downTimerId = setInterval(function () {
          doodlerBottomSpace -=5
          doodler.style.bottom = doodlerBottomSpace + 'px'
          if(doodlerBottomSpace <= 0 ){
              GameOver()
          }
          platforms.forEach(platform => {
              if (
                (doodlerBottomSpace >= platform.bottom) &&
               (doodlerBottomSpace <= platforms.bottom + 15)
               ((doodlerLeftSpace + 60)>= platform.left) &&
               (doodlerLeftSpace <= + (platform.left + 85))  
              )
          })
      },30)
  }

  function gameOver(){
      console.log('game over')
      isGameOver = true
      clearInterval(upTimerId)
      clearInterval(downTimerId)
  }

  function control(e){
    if (e.key === 'ArrowLeft'){
        //moveLeft 
    } else if(e.key === 'ArrowRight'){
        //moveRight
    }else if(e.key ==='ArrowUp'){
           // moveStraight
        }
    }
  }

function start(){
    if (!isGameOver) {
    createPlatforms()
    createDoodler()
    setInterval(movePlatforms, 30)
    }
}
// attach to button
start()
  createDoodler()
})