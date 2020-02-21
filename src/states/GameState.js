import Dueler from '../Dueler.js'

const Game = () => {
  // gotta do one for each controller
  const dueler = Dueler()

  return {
    processEvents: (events) => {
      dueler.processEvents(events)
    },

    processRealtimeInput: (realtimeInput) => {
      dueler.processRealtimeInput(realtimeInput)
    },

    draw: (stage) => {
      stage.children.forEach((child) => {
        child.update()
      })
      dueler.draw(stage)
      stage.update()
    },

    update: (deltaTime) => {
    }
  }
}

export default Game
