import Config from '../../config/config.js'

const TitleScreen = () => {
  const viewportHeight = Config.viewport.height
  const viewportWidth = Config.viewport.height * Config.viewport.aspectRatio

  return {
    processEvent: (event) => {

    },

    processRealtimeInput: (controllers) => {
      for (let i in controllers) {
        if (controllers[i].buttonEvents.length) {
          console.log(controllers[i].buttonEvents)
        }
        if (controllers[i].axisEvents.length) {
          console.log(controllers[i].axisEvents)
        }
      }
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
