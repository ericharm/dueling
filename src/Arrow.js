import { Shape } from '@createjs/easeljs'

const Arrow = () => {
  const shape = new Shape()
  const size = 30
  shape.name = 'rect'
  shape.graphics.beginFill('green').drawRect(0, 0, size, size)
  shape.regX = size / 2
  shape.regY = size / 2

  // should move this into config
  // let speed = 8
  // const rotationSpeed = 6

  const arrow = {
    velocity: {
      x: 0, y: 0
    },

    position: {
      x: 0, y: 0
    },

    draw: (stage) => {
      stage.getChildByName('rect') || stage.addChild(shape)
    },

    update: () => {

    },

    shoot: (dueler) => {
      shape.x = dueler.x
      shape.y = dueler.y
      shape.rotation = dueler.rotation
      dueler.stage.addChild(shape)
    }
  }

  return arrow
}

export default Arrow
