import Config from '../config/config.js'
import StateStack from './StateStack.js'
import Viewport from './Viewport.js'
import Gamepad from './Gamepad.js'

const App = () => {
  const viewport = Viewport()
  const stateStack = StateStack()
  const gamepad = Gamepad()

  const app = {
    stateStack,

    tick: (deltaTime) => {
      if (stateStack.isEmpty()) {
        // terminate
      }
      // window.requestAnimationFrame(gamepad.processInput)
      gamepad.listen()
      stateStack.update(deltaTime)
      stateStack.draw(viewport.canvas)
    },

    runLoop: (fps) => {
      let previous = window.performance.now()
      setInterval(function () {
        const now = window.performance.now()
        const delta = now - previous
        app.tick(delta / fps)
        previous = window.performance.now()
      }, 1000 / fps)
    },

    init: (args) => {
      viewport.setAspectRatio()
      window.onresize = function () {
        viewport.setAspectRatio()
      }
      gamepad.listen()
      app.runLoop(Config.performance.frameRate)
    }
  }

  return app
}

export default App
