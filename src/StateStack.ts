import Player from './Player.ts'
import State from './State.ts'

class StateStack {
  states: State[]

  constructor() {
    this.states = []
  }

  push(state: State): void {
    this.states.push(state)
  }

  pop(): void {
    this.states.pop()
  }

  emptyStack(): void {
    while (this.states.length > 0) {
      this.states.pop()
    }
  }

  processRealtimeInput(players: Player[]) {
    for (let i = this.states.length - 1; i >= 0; i--) {
      // pass events to each state from top of stack to bottom
      this.states[i].processRealtimeInput(players)
    }
  }

  processEvents(players: Player[]) {
    const stackSize: number = this.states.length
    if (stackSize > 0) {
      const topState: State = this.states[stackSize - 1]
      topState.processEvents(players)
    }
  }

  update(deltaTime: number): void {
    const stackSize = this.states.length
    if (stackSize > 0) {
      const topState = this.states[stackSize - 1]
      topState.update(deltaTime)
      // if (topState.fluid) update the other states
    }
  }

  draw(canvas: CanvasRenderingContext2D) {
    this.states.forEach((state) => {
      state.draw(canvas)
    })
  }

  isEmpty(): boolean {
    return (this.states.length === 0)
  }
}

export default StateStack
