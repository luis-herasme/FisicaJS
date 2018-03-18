
import Vector from '../../Vector'

class StaticCircle {
  public position
  public radius
  public type

  constructor (position = new Vector(0, 0), radius = 5) {
    this.position = position
    this.radius = radius
    this.type = 'circle'
  }
}

export default StaticCircle
