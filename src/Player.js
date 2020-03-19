const Player = (gamepad) => {
  const player = {

    handlePressed: (events, index, cache) => {
      if (!cache[gamepad.index][index]) {
        cache[gamepad.index][index] = true
        let event = {}
        event[index] = 'pressed'
        events.push(event)
      }
    },

    handleNotPressed: (events, index, cache) => {
      if (cache[gamepad.index][index]) {
        delete cache[gamepad.index][index]
        let event = {}
        event[index] = 'released'
        events.push(event)

        const ev = new window.CustomEvent('buttonRelease', {
          detail: { gamepad, index }
        })
        document.dispatchEvent(ev)
      }
    },

    buttonEvents: (cache) => {
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
          const event = new window.CustomEvent('buttonPress', {
            detail: { gamepad, index: i }
          })
          document.dispatchEvent(event)

          realtimeInput.push({ button, index: i })
          player.handlePressed(events, i, cache)
        } else player.handleNotPressed(events, i, cache)
      })
      return { events, realtimeInput }
    },

    axisEvents: () => {
      let realtimeInput = []
      gamepad.axes.forEach((axis, i) => {
        const value = axis.toFixed(4)
        if (value > 0.2 || value < -0.2) {
          realtimeInput.push({ axis, value, index: i })

          const event = new window.CustomEvent('axis', {
            detail: { gamepad, index: i, axis, value }
          })
          document.dispatchEvent(event)
        }
      })
      return realtimeInput
    }
  }

  return player
}

export default Player
