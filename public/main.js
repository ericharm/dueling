var ar = 16 / 9

function fitCanvasToAspectRatio (aspectRatio) {
  var maxWidth = window.innerHeight * aspectRatio
  document.querySelector('#app').style.maxWidth = maxWidth + 'px'
}

// on ready
fitCanvasToAspectRatio(ar)

window.onresize = function () {
  fitCanvasToAspectRatio(ar)
}

window.addEventListener('gamepadconnected', function (e) {
  console.log(
    'Gamepad connected at index %d: %s. %d buttons, %d axes.',
    e.gamepad.index, e.gamepad.id,
    e.gamepad.buttons.length, e.gamepad.axes.length
  )
})
