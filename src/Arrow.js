import { Shape } from '@createjs/easeljs'

const Arrow = () => {
  const shape = new Shape()
  const size = 30
  shape.name = 'rect'
  shape.graphics.beginFill('green').drawRect(0, 0, size, size)
  shape.regX = size / 2
  shape.regY = size / 2
  let speed = 10

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
      const rads = shape.rotation * Math.PI / 180
      const x = Math.cos(rads)
      const y = Math.sin(rads)
      shape.x -= x * speed
      shape.y -= y * speed
    },

    shoot: (dueler) => {
      shape.x = dueler.x
      shape.y = dueler.y
      shape.rotation = dueler.rotation
      speed += dueler.charge * 20
      dueler.stage.addChild(shape)
    }
  }

  shape.update = () => {
    arrow.update()
  }

  return arrow
}

export default Arrow
