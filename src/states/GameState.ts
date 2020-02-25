import Player from '../Player.ts'
import SceneNode from '../SceneNode.ts'
import { Vector2, Command, State } from '../interfaces.ts'
import { Queue } from 'queue-typescript'

class Dueler extends SceneNode {

}

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
}

class GameState implements State {

  private commands: Queue<Command>
  private world: World

  public constructor() {
    //let items: number[] = [4, 5, 6, 7];
    //let queue = new Queue<number>(...items);
    this.commands = new Queue<Command>()
    this.world = new World()
  }

  processEvents(players: Player[]): void {
  }

  processRealtimeInput(players: Player[]): void {
  }

  update(deltaTime: number): void {
    this.world.update(deltaTime, this.commands)
  }

  draw(canvas: CanvasRenderingContext2D): void {
    // canvas.rotate(20 * Math.PI / 180)
    let position: Vector2 = { x: 300, y: 100 }
    let size: Vector2 = { x: 50, y: 50 }
    canvas.strokeStyle = '#00ff00'
    canvas.beginPath()
    canvas.ellipse(position.x, position.y, size.x, size.y, 20, 0, 300)
    canvas.stroke()

    canvas.setTransform(1, 0, 0, 1, 0, 0)

    position = { x: 400, y: 200 }
    size = { x: 100, y: 100 }
    canvas.fillStyle = '#0000ff'
    canvas.fillRect(position.x, position.y, size.x, size.y)
  }
}

export default GameState
