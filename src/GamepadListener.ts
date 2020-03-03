import { GamepadUpdate, GamepadInput } from './interfaces.ts'
// maybe move gamepad interfaces into this file
type StringList = { [key: number]: string }
type Cache = { [key: number]: StringList }

interface Buddy {
  realtimeInput: any
  events: any
}

interface RealtimeInputEvent {
  button: GamepadButton
  index: number
}

interface Other {
  axisEvents: any[]
  buttonEvents: RealtimeInputEvent[] }
}

interface AxisEvent {
  axis: number
  value: string
  index: number
}

interface GamepadInputUpdate {
  events: StringList[]
  realtimeInput: RealtimeInputEvent[]
}

class Controller {
  private gamepad: Gamepad

  public constructor(gamepad: Gamepad) {
    this.gamepad = gamepad
  }

  public axisEvents(): AxisEvent[] {
    let realtimeInput: AxisEvent[] = []
    gamepad.axes.forEach((axis, i: number) => {
      const value = axis.toFixed(4)
      if (value > 0.2 || value < -0.2) realtimeInput.push({ axis, value, index: i })
    })
    return realtimeInput
  }

  public buttonEvents(cache: Cache): GamepadInputUpdate {
    let events: StringList[] = []
    let realtimeInput: RealtimeInputEvent[] = []

    // const buttons: GamepadButton[] = this.gamepad.buttons
    this.gamepad.buttons.forEach((button: GamepadButton, i: number) => {
      let val = button
      let pressed = false
      if (typeof val === 'object') {
        pressed = val.pressed
        // val = val.value
      }

      if (pressed) {
        realtimeInput.push({ button, index: i })
        // this.handlePressed(events, i, cache)
      } // else this.handleNotPressed(events, i, cache)
    })

    return { events, realtimeInput }
  }
}

class GamepadListener {

  private controllers: { [key: number]: Controller }
  private cache: Cache
  private navigator: Navigator

  public constructor() {
    this.controllers = {}
    this.cache  = {}
    this.navigator = window.navigator
    window.addEventListener('gamepadconnected', (e: GamepadEvent) => {
      this.addGamepad(e.gamepad)
    })

    window.addEventListener('gamepaddisconnected', (e: GamepadEvent) => {
      const gamepad = e.gamepad
      delete this.controllers[gamepad.index]
    })
  }

  private scanGamepads() {
    const gamepads = this.navigator.getGamepads()

    Array.from(gamepads).forEach((gamepad) => {
      if (gamepad) {
        if (gamepad.index in this.controllers) {
          this.controllers[gamepad.index] = new Controller(gamepad)
        } else {
          this.addGamepad(gamepad)
        }
      }
    })
  }

  private addGamepad(gamepad: Gamepad) {
  // private addGamepad(gamepad: Gamepad) {
    console.log('a new challenger has joined')
    this.controllers[gamepad.index] = new Controller(gamepad)
    this.cache[gamepad.index] = {}
  }

  // listen(): GamepadUpdate {
  listen(): Buddy {
    this.scanGamepads()
    let realtimeInput: { [key: string]: Other } = {}
    let events: { [key: number]: { [key: string]: StringList[] } } = {}
    for (let j in this.controllers) {
      const buttonEvents = this.controllers[j].buttonEvents(this.cache)
      const axisEvents = this.controllers[j].axisEvents()

      realtimeInput[j] = { axisEvents, buttonEvents: buttonEvents.realtimeInput }
      events[j] = { buttonEvents: buttonEvents.events }
    }
    return { realtimeInput, events }

    // return {
      // events: [],
      // realtimeInput: []
    // }
  }

  hasControllers(): { [key: number]: Controller } {
    if (Object.keys(this.controllers).length) return this.controllers
  }
}

export default GamepadListener
