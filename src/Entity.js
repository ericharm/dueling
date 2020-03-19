import SceneNode from './SceneNode.js'
// import { Vector2, Rectangle } from './interfaces.ts'
const Entity = (args) => {
  // hitbox

  const entity = SceneNode()
  entity.hitbox = null
  entity.position = args.position || { x: 0, y: 0 }
  entity.size = args.size || { x: 10, y: 10 }

  entity.move = (vector) => {
    entity.position.x += vector.x
    entity.position.y += vector.y
  }

  entity.drawCurrent = (canvas) => {
    const pos = entity.position
    const sz = entity.size
    canvas.strokeStyle = '#00ff00'
    canvas.beginPath()
    canvas.rect(pos.x, pos.y, sz.x, sz.y)
    canvas.stroke()
  }
  return entity
}

export default Entity
