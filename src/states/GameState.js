const Game = () => {
  return {
    processEvent: (event) => {

    },

    processRealtimeInput: (event, isKeyPressed) => {

    },

    draw: (canvas) => {
      // console.log('draw')
      canvas.fillRect(
        100, 100, 100, 100
      )
    },

    update: (deltaTime) => {
      // console.log(deltaTime)
    }
  }
}

export default Game
