
const vector = require('vector_functions')

function Figure () {
  this.points = []

  this.add = function (point) {
    this.points.push(point)
  }

  this.translate = function (vec) {
    this.points = this.points.map((x) => vector.add(x, vec))
  }

  this.rotate = function (vec) {
    this.points = this.points.map((x) => vector.rotate(x, vec))
  }

  this.scale = function (vec) {
    this.points = this.points.map((x) => vector.mult(x, vec))
  }

  this.calculateCenter = function () {

  }
}

module.exports = Figure
