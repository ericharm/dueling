// import Dueler from '../Dueler.js'
// import Player from '../Player.ts'
// import SceneNode from '../SceneNode.ts'
import World from '../World.js'
// import Entity from '../Entity.ts'
// import { Vector2, Command, State } from '../interfaces.ts'
// import { Queue } from 'queue-typescript'

const Game = () => {
  // gotta do one for each controller
  // const dueler = Dueler()
  const commands = []
  const world = World()

  return {
    processEvents: (events) => {
      // dueler.processEvents(events)
    },

    processRealtimeInput: (realtimeInput) => {
      // dueler.processRealtimeInput(realtimeInput)
    },

    draw: (canvas) => {
      world.draw(canvas)
      /*
      stage.children.forEach((child) => {
        child.update()
      })
      dueler.draw(stage)
      stage.update()
      */
    },

    update: (deltaTime) => {
      world.update(deltaTime, commands)
    }
  }
}

export default Game
