
import { Vector2D } from 'vector_class'
import RectCollider from './Rect/RectCollider'
import DynamicRect from './Rect/Dynamic'

class World {
  public maxPositionX: number = 800
  public minPositionX: number = 0
  public maxPositionY: number = 600
  public minPositionY: number = 0

  private particles: Array<any>
  private dynamicParticles: Array<any>

  constructor() {
    this.dynamicParticles = []
    this.particles = []
  }

  setBounds(maxX: number, minX: number, maxY: number, minY: number): void {
    this.maxPositionX = maxX
    this.minPositionX = minX
    this.maxPositionY = maxY
    this.minPositionY = minY
  }

  add(particle): void {
    /*
    if (particle instanceof CircleCollider) {
      console.log('this is a circle')
      if (particle instanceof DynamicCircle) {
        console.log('this is a DynamicCircle')
      }
    }
    */
    if (particle instanceof RectCollider) {
      console.log('this is a rect')
      if (particle instanceof DynamicRect) {
        console.log('this is a DynamicRect')
      }
    }

    this.particles.push(particle)
    if (particle.dynamic) {
      this.dynamicParticles.push(particle)
    }
  }

  remove(particle): void {
    // this.particles = _.filter(this.particles, particle => toRemove.id !== particle.id)
  }

  insideWorldBounds(particle): void {
    if (particle.position.x + particle.radius > this.maxPositionX) {
      particle.position.x = this.maxPositionX - particle.radius
      particle.velocity.x *= -1
    } else if (particle.position.x - particle.radius < this.minPositionX) {
      particle.position.x = this.minPositionX + particle.radius
      particle.velocity.x *= -1
    }

    if (particle.position.y + particle.radius > this.maxPositionY) {
      particle.position.y = this.maxPositionY - particle.radius
      particle.velocity.y *= -1
    } else if (particle.position.y - particle.radius < this.minPositionY) {
      particle.position.y = this.minPositionY + particle.radius
      particle.velocity.y *= -1
    }
  }

  update(): void {
    /*
    this.dynamicParticles.forEach(particle => {
      particle.update()
      this.particles.forEach(other => particle.check(other))
    })
    */
    for (let index = 0; index < this.particles.length; index++) {
      const particle = this.particles[index]
      for (let index2 = 0; index2 < this.particles.length; index2++) {
        const particle2 = this.particles[index2]
        if (index !== index2) {
          particle.checkCollision(particle2)        
        }
      }
    }

    /*this.particles.forEach(particle => {
      if (particle.dynamic) {
        this.insideWorldBounds(particle)
        particle.update()
      }
      // this.particles.forEach(particle2 => particle.check(particle2))
    })*/
  }
}

export default World
/*

class World {
  public maxPositionX = 800
  public minPositionX = 0
  public maxPositionY = 600
  public minPositionY = 0
  private particles: Array<any>

  constructor() {
    this.particles = []
  }

  setBounds(maxX: number, minX: number, maxY: number, minY: number) {
    this.maxPositionX = maxX
    this.minPositionX = minX
    this.maxPositionY = maxY
    this.minPositionY = minY
  }

  add(particle) {
    this.particles.push(particle)
  }

  remove(toRemove) {
    this.particles.slice(this.particles.indexOf(toRemove), 1)
  }

  update() {
    this.particles.forEach((particle) => {
      if (particle.dynamic) {
        this.insideWorldBounds(particle)
        particle.update()
      }

      this.particles.forEach((particle2) => {
        particle.check(particle2)
      })
    })
  }

  insideWorldBounds(particle) {
    // Horizontal bounds
    if (particle.position.x + particle.radius > this.maxPositionX) {
      particle.position.x = this.maxPositionX - particle.radius
      particle.velocity.x *= -1
    } else if (particle.position.x - particle.radius < this.minPositionX) {
      particle.position.x = this.minPositionX + particle.radius
      particle.velocity.x *= -1
    }
    // Vectical bounds
    if (particle.position.y + particle.radius > this.maxPositionY) {
      particle.position.y = this.maxPositionY - particle.radius
      particle.velocity.y *= -1
    } else if (particle.position.y - particle.radius < this.minPositionY) {
      particle.position.y = this.minPositionY + particle.radius
      particle.velocity.y *= -1
    }
  }
}

export default World

*/