class Viewport {
  // public stage: object
  public canvas: CanvasRenderingContext2D

  private ratio: number
  private maxWidth: number

  constructor() {
    const canvasElement: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas')
    this.canvas = canvasElement.getContext('2d')
    this.ratio = 16 / 9
    // Config.viewport.aspectRatio
    // this needs to be run again when window height changes
    this.maxWidth = window.innerHeight * this.ratio

    canvasElement.width = 1000 * this.ratio
    canvasElement.height = 1000
  }

  setAspectRatio() {
    const appContainer = <HTMLElement>document.querySelector('#app')
    appContainer.style.maxWidth = this.maxWidth + 'px'
    const gameContainer = <HTMLElement>document.querySelector('#game')
    gameContainer.style.setProperty('--aspect-ratio', `${this.ratio}`)
  }
}

export default Viewport
