import Player from './Player.js'

const GamepadListener = () => {
  // https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API
  let players = {}
  let cache = {}

  const gamepadListener = {
    getPlayers: () => {
      if (Object.keys(players).length) return players
      return false
    },

    addGamepad: (gamepad) => {
      console.log('a new challenger has joined')
      players[gamepad.index] = Player(gamepad)
      cache[gamepad.index] = {}
    },

    scanGamepads: () => {
      const gamepads = navigator.getGamepads ? navigator.getGamepads() : (
        navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []
      )
      Array.from(gamepads).forEach((gamepad) => {
        if (gamepad) {
          if (gamepad.index in players) {
            players[gamepad.index] = Player(gamepad)
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
      for (let j in players) {
        const buttonEvents = players[j].buttonEvents(cache)
        const axisEvents = players[j].axisEvents()

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
    delete players[gamepad.index]
  })

  return gamepadListener
}

export default GamepadListener
