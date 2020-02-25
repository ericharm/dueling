import Player from './Player.ts'

interface State {
  processEvents(players: Player[]): void
  processRealtimeInput(players: Player[]): void
  update(deltaTime: number): void
  draw(c: CanvasRenderingContext2D): void
}

export default State
