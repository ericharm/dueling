import Viewport from './Viewport.ts'
import StateStack from './StateStack.ts'
import GamepadListener from './GamepadListener.ts'

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
    console.log('tick')
    if (this.stateStack.isEmpty()) {
      // terminate
    }
    if (this.gamepadListener.getPlayers()) {
      const gamepadEvents: any = this.gamepadListener.listen()
      this.stateStack.processEvents(gamepadEvents.events)
      this.stateStack.processRealtimeInput(gamepadEvents.realtimeInput)
    }
    this.stateStack.update(deltaTime)
    this.stateStack.draw(this.viewport.canvas)
  }

  runLoop (fps: number): void {
    let previous: number = window.performance.now()
    setInterval(() => {
      const now: number = window.performance.now()
      const delta: number = now - previous
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
