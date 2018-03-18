
import Vector from '../../Vector'

class StaticBox {
  public position
  public size
  public type

  constructor (position = new Vector(0, 0), size = new Vector(5, 5)) {
    this.position = position
    this.size = size
    this.type = 'rect'
  }
}

export default StaticBox
