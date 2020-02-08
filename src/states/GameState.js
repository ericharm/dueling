import { Shape } from '@createjs/easeljs'
const Game = () => {
  const shape = new Shape()
  const size = 60
  shape.name = 'rect'
  shape.graphics.beginFill('blue').drawRect(0, 0, size, size)
  shape.regX = size / 2
  shape.regY = size / 2

  const speed = 12
  const rotationSpeed = 6
  const Axes = {
    X: 0,
    Y: 1,
    Z: 2
  }

  const Buttons = {
    shoot: 7
  }

  return {
    processEvents: (events) => {
      for (let i in events) {
        const controller = events[i]
        controller.buttonEvents.forEach((event) => {
          if (event[Buttons.shoot] === 'pressed') {
            shape.graphics.clear().beginFill(
              'yellow'
            ).drawRect(0, 0, size, size).endFill()
          } else if (event[Buttons.shoot] === 'released') {
            shape.graphics.clear().beginFill(
              'blue'
            ).drawRect(0, 0, size, size).endFill()
          }
        })
      }
    },

    processRealtimeInput: (realtimeInput) => {
      for (let i in realtimeInput) {
        const controller = realtimeInput[i]
        controller.buttonEvents.forEach((event) => {
          if (event.index === Buttons.shoot) {
            console.log('charging')
          }
        })

        controller.axisEvents.forEach((event) => {
          if (event.index === Axes.X) shape.x += event.axis * speed
          else if (event.index === Axes.Y) shape.y += event.axis * speed
          else if (event.index === Axes.Z) shape.rotation += event.axis * rotationSpeed
        })
      }
    },

    draw: (stage) => {
      stage.getChildByName('rect') || stage.addChild(shape)
      stage.update()
      // console.log('draw')
      // canvas.fillRect(
      //   100, 100, 100, 100
      // )
    },

    update: (deltaTime) => {
      // console.log(deltaTime)
    }
  }
}

export default Game
