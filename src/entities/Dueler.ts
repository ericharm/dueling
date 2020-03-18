import Entity from '../Entity.ts'
import { Vector2 } from '../interfaces.ts'

class Dueler extends Entity {
  drawCurrent(canvas: CanvasRenderingContext2D): void {
    // canvas.rotate(20 * Math.PI / 180)
    let position: Vector2 = { x: 300, y: 100 }
    let size: Vector2 = { x: 50, y: 50 }
    canvas.strokeStyle = '#00ff00'
    canvas.beginPath()
    canvas.ellipse(position.x, position.y, size.x, size.y, 20, 0, 300)
    canvas.stroke()

    // canvas.setTransform(1, 0, 0, 1, 0, 0)
    //
    // position = { x: 400, y: 200 }
    // size = { x: 100, y: 100 }
    // canvas.fillStyle = '#0000ff'
    // canvas.fillRect(position.x, position.y, size.x, size.y)
  }
}

export default Dueler