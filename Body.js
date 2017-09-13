
const vector = require('vector_functions')
const Line = require('./Line')

/**
 * This is a class that returns a line
 * @param {array} start This is a vector
 * @param {array} end This is a vector
 */
function Body (type, config) {
  this.lines = []

  this.aceleration = config.aceleration ? config.aceleration : [0, 0]
  this.velocity = config.velocity ? config.velocity : [0, 0]

  this.update = function () {
    this.velocity = vector.add(this.velocity, this.aceleration)
    this.lines.map((x) => x.move(this.velocity))
    this.aceleration = [0, 0]
  }.bind(this)

  this.addForce = function (force) {
    force.mult(1 / this.size)
    this.aceleration.add(force)
  }.bind(this)

  this.addLine = function (line) {
    this.lines.push(line)
  }.bind(this)

  this.load = function () {
    if (type) {
      if (type === 'Circle') {
        this.center = config.position
        this.radius = config.radius
      } else if (type === 'Mesh') {
        this.center = vector.average(this.points)
        this.far = this.lines.reduce((a, c) => {
          if (vector.ditance(this.center, c) > vector.ditance(this.center, a)) return c
          else return a
        }, 0)
      } else if (type === 'Box') {
        this.center = vector.add(config.position, [config.side / 2, config.side / 2])

        const pointY = vector.add(config.position, [0, config.side])
        const pointX = vector.add(config.position, [config.side, 0])
        const pointXY = vector.add(config.position, [config.side, config.side])

        this.addLine(new Line(config.position, pointX))
        this.addLine(new Line(config.position, pointY))
        this.addLine(new Line(pointY, pointXY))
        this.addLine(new Line(pointXY, pointX))

        this.far = Math.sqrt(2 * Math.pow(config.side / 2, 2))
      } else if (type === 'Rect') {
        this.center = vector.add(config.position, [config.width / 2, config.heigth / 2])

        const pointY = vector.add(config.position, [0, config.heigth])
        const pointX = vector.add(config.position, [config.width, 0])
        const pointXY = vector.add(config.position, [config.width, config.heigth])

        this.addLine(new Line(config.position, pointX))
        this.addLine(new Line(config.position, pointY))
        this.addLine(new Line(pointY, pointXY))
        this.addLine(new Line(pointXY, pointX))

        this.far = Math.sqrt(Math.pow(config.heigth / 2, 2) + Math.pow(config.width / 2, 2))
      }
    } else throw Error('No type defined in the body')
  }.bind(this)

  return this
}

module.exports = Body
