// let stage = new Stage("myCanvas");
import Config from '../config/config.js'
import { Stage } from '@createjs/easeljs'

const Viewport = () => {
  // const context = {}
  const canvasElement = document.getElementById('canvas')

  const ratio = Config.viewport.aspectRatio
  const maxWidth = window.innerHeight * ratio

  canvasElement.width = 1000 * ratio
  canvasElement.height = 1000

  const stage = new Stage('canvas')

  // if (canvasElement.getContext) {
  //   const ctx = canvasElement.getContext('2d')
  //   context.canvas = ctx
  //   context.commandQueue = [] // this should end up somewhere
  // }

  return {
    // canvas: context.canvas,
    stage,

    setAspectRatio: () => {
      document.querySelector('#app').style.maxWidth = maxWidth + 'px'
      document.querySelector('#game').style.setProperty('--aspect-ratio', `${ratio}`)
    }
  }
}

export default Viewport
