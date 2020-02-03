const Gamepad = function () {
  let controllers = {}

  const gamepadListener = {

    addGamepad: (gamepad) => {
      controllers[gamepad.index] = gamepad
    },

    scangamepads: () => {
      const gamepads = navigator.getGamepads ? navigator.getGamepads() : (
        navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []
      )
      Array.from(gamepads).forEach(function (gamepad) {
        if (gamepad) {
          if (gamepad.index in controllers) {
            controllers[gamepad.index] = gamepad
          } else {
            console.log('from scan', gamepad)
            gamepadListener.addGamepad(gamepad)
          }
        }
      })
    },

    listen: () => {
      gamepadListener.scangamepads()

      for (var j in controllers) {
        var controller = controllers[j]

        for (var i = 0; i < controller.buttons.length; i++) {
          var val = controller.buttons[i]
          var pressed = val === 1.0
          if (typeof val === 'object') {
            pressed = val.pressed
            val = val.value
          }

          if (pressed) {
            console.log('pressed', i)
          } else {
            // b.className = 'button'
          }
        }

        for (var k = 0; k < controller.axes.length; k++) {
          const value = controller.axes[k].toFixed(4)
          if (value > 0.2 || value < -0.2) console.log('axis', k, value)
        }
      }
    }
  }

  window.addEventListener('gamepadconnected', function (e) {
    gamepadListener.addGamepad(e.gamepad)
  })

  window.addEventListener('gamepaddisconnected', function (e) {
    const gamepad = e.gamepad
    delete controllers[gamepad.index]
  })
  return gamepadListener
}

export default Gamepad
