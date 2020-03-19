// import Config from '../config/config.js'
import StateStack from './StateStack.js'
import Viewport from './Viewport.js'
import GamepadListener from './GamepadListener.js'

const App = () => {
  // this will all move into a gameControllers thing
  document.addEventListener('buttonPress', function (e) {
    console.log('buttonPress', e.detail)
  }, false)

  document.addEventListener('buttonRelease', function (e) {
    console.log('buttonRelease', e.detail)
  }, false)

  document.addEventListener('axis', function (e) {
    console.log('axis', e.detail)
  }, false)

  const viewport = Viewport()
  const stateStack = StateStack()
  const gamepadListener = GamepadListener()

  const app = {
    stateStack,

    tick: (deltaTime) => {
      if (stateStack.isEmpty()) {
        // terminate
      }
      if (gamepadListener.getPlayers()) {
        const gamepadEvents = gamepadListener.listen()
        stateStack.processEvents(gamepadEvents.events)
        stateStack.processRealtimeInput(gamepadEvents.realtimeInput)
      }
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
      // app.runLoop(Config.performance.frameRate)
      app.runLoop(40)
    }
  }

  return app
}

export default App
