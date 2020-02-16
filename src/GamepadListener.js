const GamepadListener = () => {
  // https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API
  let controllers = {}
  let cache = {}

  const Controller = (gamepad) => {
    const self = {

      handlePressed: (events, index) => {
        if (!cache[gamepad.index][index]) {
          cache[gamepad.index][index] = true
          let event = {}
          event[index] = 'pressed'
          events.push(event)
        }
      },

      handleNotPressed: (events, index) => {
        if (cache[gamepad.index][index]) {
          delete cache[gamepad.index][index]
          let event = {}
          event[index] = 'released'
          events.push(event)
        }
      },

      buttonEvents: () => {
        let events = []
        let realtimeInput = []

        gamepad.buttons.forEach((button, i) => {
          let val = button
          let pressed = val === 1.0
          if (typeof val === 'object') {
            pressed = val.pressed
            val = val.value
          }

          if (pressed) {
            realtimeInput.push({ button, index: i })
            self.handlePressed(events, i)
          } else self.handleNotPressed(events, i)
        })
        return { events, realtimeInput }
      },

      axisEvents: () => {
        let realtimeInput = []
        gamepad.axes.forEach((axis, i) => {
          const value = axis.toFixed(4)
          if (value > 0.2 || value < -0.2) realtimeInput.push({ axis, value, index: i })
        })
        return realtimeInput
      }
    }

    return self
  }

  const gamepadListener = {
    getControllers: () => {
      if (Object.keys(controllers).length) return controllers
      return false
    },

    addGamepad: (gamepad) => {
      console.log('a new challenger has joined')
      controllers[gamepad.index] = Controller(gamepad)
      cache[gamepad.index] = {}
    },

    scanGamepads: () => {
      const gamepads = navigator.getGamepads ? navigator.getGamepads() : (
        navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []
      )
      Array.from(gamepads).forEach((gamepad) => {
        if (gamepad) {
          if (gamepad.index in controllers) {
            controllers[gamepad.index] = Controller(gamepad)
          } else {
            gamepadListener.addGamepad(gamepad)
          }
        }
      })
    },

    listen: () => {
      gamepadListener.scanGamepads()
      let realtimeInput = {}
      let events = {}
      for (let j in controllers) {
        const buttonEvents = controllers[j].buttonEvents()
        const axisEvents = controllers[j].axisEvents()

        realtimeInput[j] = { axisEvents, buttonEvents: buttonEvents.realtimeInput }
        events[j] = { buttonEvents: buttonEvents.events }
      }
      return { realtimeInput, events }
    }
  }

  window.addEventListener('gamepadconnected', (e) => {
    gamepadListener.addGamepad(e.gamepad)
  })

  window.addEventListener('gamepaddisconnected', (e) => {
    const gamepad = e.gamepad
    delete controllers[gamepad.index]
  })

  return gamepadListener
}

export default GamepadListener
