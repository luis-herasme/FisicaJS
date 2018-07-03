
import DynamicBody from './DynamicBody'

class DynamicBox extends DynamicBody {
  constructor (position, size, restitution = 1) {
    super(position, restitution)
    this.size = size
    this.mass = Math.pow(this.size.x, 2)
  }
}

export default DynamicBox
