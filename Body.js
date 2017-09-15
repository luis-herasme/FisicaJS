
const Vector = require('vector_class')
const vec = require('vector_functions')
const Figure = require('./Figure')

function Body (type, config) {
  this.vertices = new Figure()
  this.mass = config.mass ? config.mass : 1
  this.aceleration = config.aceleration ? new Vector(...config.aceleration) : new Vector(0, 0)
  this.velocity = config.velocity ? new Vector(...config.velocity) : new Vector(0, 0)

  this.update = () => {
    this.velocity.add(this.aceleration)
    this.vertices.translate(this.velocity) // PROBLEM WITH CIRCLE
    this.center = this.vertices.center()
    this.aceleration.mult(0)
  }

  this.addForce = (force) => {
    force.mult(1 / this.mass)
    this.aceleration.add(force)
  }

  this.addVertex = (vertex) => this.vertices.push(vertex)

  this.load = () => {
    if (type === 'Circle') {
      this.center = config.position
      this.radius = config.radius
    } else {
      if (type === 'Mesh') {
        config.vertices.forEach((vertex) => this.vertices.add(vertex))
      } else if (type === 'Box') {
        const pointY = vec.add(config.position, [0, config.side])
        const pointX = vec.add(config.position, [config.side, 0])
        const pointXY = vec.add(config.position, [config.side, config.side])

        this.vertices.add(config.position)
        this.vertices.add(pointX)
        this.vertices.add(pointY)
        this.vertices.add(pointXY)
      } else if (type === 'Rect') {
        const pointY = vec.add(config.position, [0, config.heigth])
        const pointX = vec.add(config.position, [config.width, 0])
        const pointXY = vec.add(config.position, [config.width, config.heigth])

        this.vertices.add(config.position)
        this.vertices.add(pointX)
        this.vertices.add(pointY)
        this.vertices.add(pointXY)
      }
      this.far = this.vertices.far()
      this.center = this.vertices.center()
    }
  }
  return this
}

module.exports = Body
