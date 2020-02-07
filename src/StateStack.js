const StateStack = () => {
  return {
    states: [],

    push: function (state) {
      this.states.push(state)
    },

    pop: function () {
      this.states.pop()
    },

    emptyStack: function () {
      while (this.states.length > 0) {
        this.states.pop()
      }
    },

    isEmpty: function () {
      return (this.states.length === 0)
    },

    update: function (deltaTime) {
      const stackSize = this.states.length
      if (stackSize > 0) {
        const topState = this.states[stackSize - 1]
        topState.update(deltaTime)
        // if (topState.fluid) update the other states
      }
    },

    draw: function (stage) {
      // clear window
      // canvas.fillStyle = "#000000";
      // canvas.fillRect(0, 0, Config.canvasWidth, Config.canvasHeight);
      this.states.forEach((state) => {
        state.draw(stage)
      })
    },

    processRealtimeInput: function (events) {
      for (let i = this.states.length - 1; i >= 0; i--) {
        // pass events to each state from top of stack to bottom
        this.states[i].processRealtimeInput(events)
      }
    },

    processEvent: function (event) {
      const stackSize = this.states.length
      if (stackSize > 0) {
        const topState = this.states[stackSize - 1]
        topState.processEvent(event)
        // if (topState.fluid) update the other states
      }
      // for (var i = this.stack.length - 1; i >= 0; i--) {
      // this.stack[i].processEvent(event);
      // }
    }
  }
}

export default StateStack
