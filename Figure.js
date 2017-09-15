
const vector = require('vector_functions')

function Figure () {
  this.points = []

  this.add = (point) => {
    this.points.push(point)
  }

  this.translate = (vec) => {
    this.points = this.points.map((x) => vector.add(x, vec))
  }

  this.rotate = (vec) => {
    this.points = this.points.map((x) => vector.rotate(x, vec))
  }

  this.scale = (vec) => {
    this.points = this.points.map((x) => vector.mult(x, vec))
  }

  this.center = () => vector.average(this.points)

  return this
}

module.exports = Figure
