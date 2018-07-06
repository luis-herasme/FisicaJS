
import { Vector2D } from 'vector_class'

class Circle {

  public mass: number
  public radius: number
  public position: Vector2D
  public restitution: number
  public onCollision: Function
  public dynamic: boolean = true
  public velocity: Vector2D = new Vector2D(0, 0)
  public acceleration: Vector2D = new Vector2D(0, 0)

  public collision: Function

  constructor(position = new Vector2D(0, 0), radius = 5, dynamic = false, restitution = 1) {
    this.dynamic = dynamic
    this.radius = radius
    this.position = position
    this.restitution = restitution
    this.mass = Math.PI * Math.pow(this.radius, 2)

    if (!this.dynamic) {
      this.collision = (other: Circle): void => {
        const distance = Vector2D.distance(this.position, other.position)
        if (distance.mag() < this.radius + other.radius) {
          const direction = Vector2D.normalize(distance)
          direction.mult(this.radius + other.radius)
          // direction.sub(distance)
          this.position.add(direction)
          if (this.onCollision) this.onCollision()
        }
      }
    } else {
      this.collision = (other: Circle): void => {
        const distance = Vector2D.distance(this.position, other.position)
        if (distance.mag() < this.radius + other.radius) {
          const direction = Vector2D.normalize(distance)
          direction.mult(this.radius + other.radius)
          // direction.sub(distance)
          this.position.add(direction)
          if (other.dynamic) this.inelasticCollision(other)
          else this.velocity.inverse * this.restitution  
          if (this.onCollision) this.onCollision()
        }
      }
    }
  }

  addForce(force: Vector2D): void {
    this.acceleration.add(force)
  }

  momentum(): Vector2D {
    return Vector2D.mult(this.velocity, this.mass)
  }

  inelasticCollision(other): void {
    const velocity1 = this.velocity
    const velocity2 = other.velocity
    const totalMomentum = other.momentum()
    totalMomentum.add(this.momentum())
    const totalMass = this.mass + other.mass

    // This velocity
    this.velocity = Vector2D.sub(velocity2, velocity1)
    this.velocity.mult(this.restitution * other.mass)
    this.velocity.add(totalMomentum)
    this.velocity.div(totalMass)

    // Other velocity
    other.velocity = Vector2D.sub(velocity1, velocity2)
    other.velocity.mult(other.restitution * this.mass)
    other.velocity.add(totalMomentum)
    other.velocity.div(totalMass)
  }

  update(): void {
    this.acceleration.div(this.mass)
    this.velocity.add(this.acceleration)
    this.position.add(this.velocity)
    this.acceleration.zero()
  }
}

export default Circle
