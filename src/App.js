import Viewport from './Viewport.js'
import StateStack from './StateStack.js'
import GamepadListener from './GamepadListener.js'

const App = () => {
  const viewport = Viewport()
  const stateStack = StateStack()
  const gamepadListener = GamepadListener()

  const app = {
    tick: (deltaTime) => {
      if (stateStack.isEmpty()) {
        // terminate
      }
      if (gamepadListener.hasControllers()) {
        const gamepadEvents = gamepadListener.listen()
        stateStack.processEvents(gamepadEvents.events)
        stateStack.processRealtimeInput(gamepadEvents.realtimeInput)
      }
      stateStack.update(deltaTime)
      stateStack.draw(viewport.canvas)
    },

    runLoop: (fps) => {
      console.log('run loop')
      let previous = window.performance.now()
      setInterval(() => {
        const now = window.performance.now()
        const delta = now - previous
        this.tick(delta / fps)
        previous = window.performance.now()
      }, 1000 / fps)
    },

    init: (args) => {
      console.log('init')
      viewport.setAspectRatio()
      window.onresize = () => {
        viewport.setAspectRatio()
      }
      this.runLoop(args.frameRate)

      document.addEventListener('axis', (event) => {
        console.log('axis event', event)
      })
    }
  }

  return app
}

export default App
