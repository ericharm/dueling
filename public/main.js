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
