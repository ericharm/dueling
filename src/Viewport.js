const Viewport = () => {
  const canvasElement = document.getElementById('canvas')
  const canvas = canvasElement.getContext('2d')
  const ratio = 16 / 9
  // Config.viewport.aspectRatio

  // this needs to be run again when window height changes
  const maxWidth = window.innerHeight * ratio

  canvasElement.width = 1000 * ratio
  canvasElement.height = 1000

  return {
    canvas,
    setAspectRatio: () => {
      const appContainer = document.querySelector('#app')
      appContainer.style.maxWidth = maxWidth + 'px'
      const gameContainer = document.querySelector('#game')
      gameContainer.style.setProperty('--aspect-ratio', `${ratio}`)
    }
  }
}

export default Viewport
