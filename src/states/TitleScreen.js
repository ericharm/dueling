import Config from '../../config/config.js'

const TitleScreen = () => {
  const viewportHeight = Config.viewport.height
  const viewportWidth = Config.viewport.height * Config.viewport.aspectRatio

  return {
    processEvent: (event) => {

    },

    processRealtimeInput: (event, isKeyPressed) => {

    },

    draw: (canvas) => {
      canvas.fillRect(
        0, 0, viewportWidth, viewportHeight
      )
    },

    update: (deltaTime) => {
      // console.log(deltaTime)
    }
  }
}

export default TitleScreen
