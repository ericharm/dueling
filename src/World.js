import SceneNode from './SceneNode.js'
import Entity from './Entity.js'
// import Dueler from './entities/Dueler.ts'
// import { Vector2, Command, State } from './interfaces.ts'
// import { Queue } from 'queue-typescript'

const World = () => {
  const sceneGraph = SceneNode()
  sceneGraph.addNode(Entity({
    position: { x: 100, y: 200 },
    size: { x: 100, y: 200 }
  }))

  return {
    update: (deltaTime, commands) => {
      /** Execute all queued commands */
      while (commands.length > 0) {
        // sceneGraph.onCommand(commands.dequeue(), deltaTime)
        sceneGraph.onCommand(commands.shift(), deltaTime)
      }

      /** Update all of the scene nodes */
      sceneGraph.update(deltaTime, commands)
      // handleCollisions();
    },

    draw: (canvas) => {
      sceneGraph.draw(canvas)
    }
  }
}

export default World
