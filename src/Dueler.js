import Config from '../config/config.js'
import { Shape } from '@createjs/easeljs'
import Arrow from './Arrow.js'

const Dueler = () => {
  const shape = new Shape()
  const size = 60
  shape.name = 'rect'
  shape.graphics.beginFill('blue').drawRect(0, 0, size, size)
  shape.regX = size / 2
  shape.regY = size / 2

  shape.updateColor = (color) => {
    shape.graphics.clear().beginFill(color).drawRect(0, 0, size, size).endFill()
  }

  // should move this into config
  let speed = 8
  const rotationSpeed = 6
  const Axes = {
    X: 0,
    Y: 1,
    Z: 2
  }

  const Buttons = {
    juke: 0,
    shoot: 7,
    stab: 6
  }

  const dueler = {
    charge: 0,

    velocity: {
      x: 0, y: 0
    },

    processEvents: (events) => {
      // move this stuff into command queue
      // so Dueler doesn't need to know about controllers
      for (let i in events) {
        const controller = events[i]
        controller.buttonEvents.forEach((event) => {
          if (event[Buttons.stab] === 'pressed') {
            shape.updateColor('green')
            setTimeout(() => {
              shape.updateColor('blue')
            }, Config.performance.frameRate * 4)
          }

          if (event[Buttons.juke] === 'pressed') {
            speed = 40
            // we will use the command queue and a cooldown to do this eventually
            // we will have timer helpers to do the frameRate math as well
            setTimeout(() => { speed = 12 }, Config.performance.frameRate)
          }

          if (event[Buttons.shoot] === 'pressed') {
            shape.updateColor('yellow')
          } else if (event[Buttons.shoot] === 'released') {
            shape.updateColor('blue')
            // instead of having the dueler place the arrow on the screen,
            // we will need to add a command to the command queue
            // and have the game state add the arrow on the screen
            //
            // then the game state can be responsible for updating all entities
            const arrow = Arrow()
            arrow.shoot({ ...dueler, ...shape, stage: shape.stage })
            dueler.charge = 0
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
            if (dueler.charge < 1) dueler.charge += 0.01
          }
        })

        controller.axisEvents.forEach((event) => {
          if (event.index === Axes.X) shape.x += event.axis * speed
          else if (event.index === Axes.Y) shape.y += event.axis * speed
          else if (event.index === Axes.Z) shape.rotation += event.axis * rotationSpeed
        })
      }
    },

    position: {
      x: 0, y: 0
    },

    draw: (stage) => {
      stage.getChildByName('rect') || stage.addChild(shape)
    },

    update: () => {
    }
  }

  shape.update = () => {
    dueler.update()
  }
  return dueler
}

export default Dueler
