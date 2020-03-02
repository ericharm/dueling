import Viewport from './Viewport.ts'
import StateStack from './StateStack.ts'
import GamepadListener from './GamepadListener.ts'
import { GamepadUpdate } from './interfaces.ts'

interface Config {
  frameRate: number
}

class Application {

  public stateStack: StateStack
  public viewport: Viewport
  public gamepadListener: GamepadListener

  constructor () {
    this.viewport = new Viewport()
    this.stateStack = new StateStack()
    this.gamepadListener = new GamepadListener()
  }

  tick(deltaTime: number): void {
    if (this.stateStack.isEmpty()) {
      // terminate
    }
    if (this.gamepadListener.hasControllers()) {
      const gamepadEvents: GamepadUpdate = this.gamepadListener.listen()
    //   this.stateStack.processEvents(gamepadEvents.events)
    //   this.stateStack.processRealtimeInput(gamepadEvents.realtimeInput)
    }
    this.stateStack.update(deltaTime)
    this.stateStack.draw(this.viewport.canvas)
  }

  runLoop (fps: number): void {
    let previous = window.performance.now()
    setInterval(() => {
      const now = window.performance.now()
      const delta = now - previous
      this.tick(delta / fps)
      previous = window.performance.now()
    }, 1000 / fps)
  }

  init (args: Config): void  {
    this.viewport.setAspectRatio()
    window.onresize = () => {
      this.viewport.setAspectRatio()
    }
    this.runLoop(args.frameRate)
  }
}

export default Application
