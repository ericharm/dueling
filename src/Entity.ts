import SceneNode from './SceneNode.ts'
import { Vector2, Rectangle } from './interfaces.ts'

class Hitbox {
  private Box: Rectangle
}

class Entity extends SceneNode {
  private position: Vector2
  private hitbox: Hitbox

  move(vector: Vector2) {
    this.position.x += vector.x
    this.position.y += vector.y
  }
}

export default Entity
