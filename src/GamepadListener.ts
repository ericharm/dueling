// maybe move gamepad interfaces into this file
import { GamepadUpdate } from './interfaces.ts'

class GamepadListener {

  listen(): GamepadUpdate {
    return {
      events: [],
      realtimeInput: []
    }
  }

  getPlayers(): boolean {
    return true
  }
}

export default GamepadListener
