import SceneNode from './SceneNode.ts'
import Dueler from './entities/Dueler.ts'
import { Vector2, Command, State } from './interfaces.ts'
import { Queue } from 'queue-typescript'

class World {
  private sceneGraph: SceneNode

  public constructor() {
    this.sceneGraph = new SceneNode()
    this.sceneGraph.addNode(new Dueler())
  }

  update(deltaTime: number, commands: Queue<Command>) {
    /** Execute all queued commands */
    while (commands.length > 0) {
      this.sceneGraph.onCommand(commands.dequeue(), deltaTime)
    }

    /** Update all of the scene nodes */
    this.sceneGraph.update(deltaTime, commands)
    // handleCollisions();
  }

  draw(canvas: CanvasRenderingContext2D): void {
    this.sceneGraph.draw(canvas)
  }
}

export default World
