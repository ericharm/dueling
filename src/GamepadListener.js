const GamepadListener = () => {
  // https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API
  let controllers = {}

  const Controller = (gamepad) => {
    return {
      buttonEvents: () => {
        let events = []
        gamepad.buttons.forEach((button, i) => {
          let val = button
          let pressed = val === 1.0
          if (typeof val === 'object') {
            pressed = val.pressed
            val = val.value
          }

          if (pressed) {
            events.push({ button, index: i })
          } else {
            // b.className = 'button'
          }
        })
        return events
      },

      axisEvents: () => {
        let events = []
        gamepad.axes.forEach((axis, i) => {
          const value = axis.toFixed(4)
          if (value > 0.2 || value < -0.2) events.push({ axis, value, index: i })
        })
        return events
      }
    }
  }

  const gamepadListener = {
    getControllers: () => {
      if (Object.keys(controllers).length) return controllers
      return false
    },

    addGamepad: (gamepad) => {
      console.log('a new challenger has joined')
      controllers[gamepad.index] = Controller(gamepad)
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
      let events = {}
      for (let j in controllers) {
        const buttonEvents = controllers[j].buttonEvents()
        const axisEvents = controllers[j].axisEvents()
        events[j] = { buttonEvents, axisEvents }
      }
      return events
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
