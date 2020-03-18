import { GamepadUpdate, GamepadInput } from './interfaces.ts'

type StringList = { [key: number]: string }
type Cache = { [key: number]: StringList }

interface ControllerListInput {
  realtimeInput: any
  events: any
}

interface RealtimeButtonEvent {
  button: GamepadButton
  index: number
}

interface AxisEvent {
  axis: number
  value: string
  index: number
}

// class AEvent extends EventEmitter {
/*
class AEvent {
  public axis: number

}
 */

interface GamepadEventList {
  axisEvents: AxisEvent[]
  buttonEvents: RealtimeButtonEvent[]
}

interface GamepadInputUpdate {
  events: StringList[]
  realtimeInput: RealtimeButtonEvent[]
}

class Controller {
  private gamepad: Gamepad

  public constructor(gamepad: Gamepad) {
    this.gamepad = gamepad
  }

  public axisEvents(): AxisEvent[] {
    // var event = new Event('axis')

    let realtimeInput: AxisEvent[] = []
    this.gamepad.axes.forEach((axis: number, i: number) => {
      const value_: number = axis
      const value__ = value_.toFixed(4)
      if (Number(value__) > 0.2 || Number(value__) < -0.2) {
        // let ev = new AEvent('axis')
        let ev = new Event(null)
        // ev.axis = axis
        let rti = { axis, value: value__.toString(), index: i }
        document.dispatchEvent(ev)
        realtimeInput.push(rti)
      }
    })
    return realtimeInput
  }

  public buttonEvents(cache: Cache): GamepadInputUpdate {
    let events: StringList[] = []
    let realtimeInput: RealtimeButtonEvent[] = []

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
    console.log('a new challenger has joined')
    this.controllers[gamepad.index] = new Controller(gamepad)
    this.cache[gamepad.index] = {}
  }

  public listen(): ControllerListInput {
    this.scanGamepads()
    let realtimeInput: { [key: string]: GamepadEventList } = {}
    let events: { [key: number]: { [key: string]: StringList[] } } = {}
    for (let j in this.controllers) {
      const buttonEvents = this.controllers[j].buttonEvents(this.cache)
      const axisEvents = this.controllers[j].axisEvents()

      realtimeInput[j] = { axisEvents, buttonEvents: buttonEvents.realtimeInput }
      events[j] = { buttonEvents: buttonEvents.events }
    }
    return { realtimeInput, events }
  }

  public hasControllers(): { [key: number]: Controller } {
    if (Object.keys(this.controllers).length) return this.controllers
  }
}

export default GamepadListener
