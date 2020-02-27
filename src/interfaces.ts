import SceneNode from './SceneNode.ts'
import Player from './Player.ts'
import Category from './Category.ts'

export interface Vector2 {
  x: number
  y: number
}

export interface Command {
  action: (this: SceneNode) => void
  categories: Category[]
}

export interface State {
  processEvents(players: Player[]): void
  processRealtimeInput(players: Player[]): void
  update(deltaTime: number): void
  draw(c: CanvasRenderingContext2D): void
}

export interface GamepadUpdate {
  events: object[]
  realtimeInput: object[]
}
