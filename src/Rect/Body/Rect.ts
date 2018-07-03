
import {Vector2D} from 'vector_class'

class Rect {
  public position:Vector2D = new Vector2D(0, 0)
  public size: Vector2D = new Vector2D(10, 10)

  constructor (position, size) {
    this.position = position
    this.size = size
  }
}

export default Rect
