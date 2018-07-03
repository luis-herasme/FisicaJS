
import Vector from 'vector_class'
import RectCollider from './RectCollider'

class RectTrigger extends RectCollider {
  private particlesInside: Array<any>

  update(other) {
    const distance = Vector.sub(this.position, other.position)
    if (this.check(other)) { // Is inside
      if (!includes(this.particlesInside, other)) { // Is not in the list
        other.gamObject.onTriggerEnter()
        this.particlesInside.push(other)
      } else {  // Is in the list
        other.gamObject.onTriggerStay()
      }
    } else {
      if (includes(this.particlesInside, other)) { // Is outside but is in the list
        this.particlesInside.slice(this.particlesInside.indexOf(other), 1)
        other.gamObject.onTriggerExit()
      }
    }
  }
}

function includes(arr, foo) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == foo) {
      return true
    }
  }
  return false
}

export default RectTrigger
