// import Player from './Player.ts'
// import State from './State.ts'
// import { GamepadUpdate } from './interfaces.ts'

const StateStack = () => {
  const states = []

  return {
    push: (state) => {
      states.push(state)
    },

    pop: () => {
      states.pop()
    },

    emptyStack: () => {
      while (states.length > 0) {
        states.pop()
      }
    },

    processRealtimeInput: (players) => {
      for (let i = states.length - 1; i >= 0; i--) {
        // pass events to each state from top of stack to bottom
        states[i].processRealtimeInput(players)
      }
    },

    processEvents: (players) => {
      const stackSize = states.length
      if (stackSize > 0) {
        const topState = states[stackSize - 1]
        topState.processEvents(players)
      }
    },

    update: (deltaTime) => {
      const stackSize = states.length
      if (stackSize > 0) {
        const topState = states[stackSize - 1]
        topState.update(deltaTime)
        // if (topState.fluid) update the other states
      }
    },

    draw: (canvas) => {
      states.forEach((state) => {
        state.draw(canvas)
      })
    },

    isEmpty: () => {
      return (states.length === 0)
    }
  }
}

export default StateStack
