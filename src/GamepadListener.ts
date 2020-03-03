import { GamepadUpdate, GamepadInput } from './interfaces.ts'
// maybe move gamepad interfaces into this file

interface GamepadInputUpdate {
}

interface GamepadButtonEvent {
  button: GamepadButton
  index: number
}

class Controller {
  private gamepad: Gamepad

  public constructor(gamepad: Gamepad) {
    this.gamepad = gamepad
  }

  // export interface GamepadUpdate {
    // events: object[]
    // realtimeInput: object[]
  // }

  buttonEvents(cache: { [key: number]: { [key: number]: string } }): GamepadButtonEvent[] {
    let events: GamepadInput[] = []
    let realtimeInput: GamepadInput[] = []

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
  private cache: { [key: number]: any } // i don't yet know what type the values are
  private navigator: Navigator

  public constructor() {
    this.controllers = {}
    this.cache  = {}
    this.navigator = window.navigator
    window.addEventListener('gamepadconnected', (e: GamepadEvent) => {
      this.addGamepad(e.gamepad)
    })

    window.addEventListener('gamepaddisconnected', (e) => {
      // const gamepad = e.gamepad
      // delete this.controllers[gamepad.index]
    })
  }

  private scanGamepads() {
    const gamepads = this.navigator.getGamepads()

    debugger
    Array.from(gamepads).forEach((gamepad) => {
      if (gamepad) {
        // if (gamepad.index in this.controllers) {
          // this.controllers[gamepad.index] = new Controller(gamepad)
        // } else {
          // this.addGamepad(gamepad)
        // }
      }
    })
  }

  private addGamepad(gamepad: Gamepad) {
  // private addGamepad(gamepad: Gamepad) {
    console.log('a new challenger has joined')
    debugger
    this.controllers[gamepad.index] = new Controller(gamepad)
    this.cache[gamepad.index] = {}
  }

  // listen(): GamepadUpdate {
  listen(): { [key: string]: object } {
    console.log('listen')
    this.scanGamepads()
    let realtimeInput = {}
    // let events: GamepadUpdate = {}
    let events: { [key: number]: { [key: string]: { [key: number]: string }[] } } = {}
    for (let j in this.controllers) {
      const buttonEvents = this.controllers[j].buttonEvents(this.cache)
      // const axisEvents = this.controllers[j].axisEvents()

      // realtimeInput[j] = { axisEvents, buttonEvents: buttonEvents.realtimeInput }
      events[j] = { buttonEvents: buttonEvents.events }
      // events[j] = { buttonEvents: buttonEvents.events }
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
