import Player from '../Player.ts'
import SceneNode from '../SceneNode.ts'
import World from '../World.ts'
import Entity from '../Entity.ts'
import { Vector2, Command, State } from '../interfaces.ts'
import { Queue } from 'queue-typescript'


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
    this.world.draw(canvas)
  }
}

export default GameState
