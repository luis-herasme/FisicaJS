
import {Vector2D} from 'vector_class'

class StaticBox {
  public position
  public side
  public type
  constructor (position = new Vector2D(0, 0), side = 5) {
    this.position = position
    this.side = side
    this.type = 'box'
  }
}

export default StaticBox
