
const vector = require('vector')

function Body () {
  this.lines = []

  this.addLine = function (line) {
    this.lines.push(line)
  }.bind(this)

  this.center = vector.average()
  this.far = function () {
    let far = {}
    this.lines.forEach(function (line) {
      if (vector.distance(line)) {

      }
    }, this)
  }
  return this
}
/**
 * This is a class that returns a line
 * @param {array} start This is a vector
 * @param {array} end This is a vector
 */
function Line (start, end) {
  this.start = start
  this.end = end
  return this
}

function Engine () {
  this.bodies = []

  this.add = function (body) {
    this.bodies.push(body)
  }

  this.update = function () {
    this.bodies.forEach(function (body, index) {
      this.bodies.forEach(function (_body, _index) {
        if (index !== _index) {
          if (vector.distance(body.center, _body.center) > body.far + _body.far) {
            body.lines.forEach(function (line, index) {
              _body.lines.forEach(function (_line, _index) {
                const intersection = vector.lineIntersect(
                  line.start, line.end,
                  _line.start, line.end
                )
                if (vector.add(intersection) !== 2) {

                }
              })
            })
          }
        }
      })
    })
  }
}

module.exports = { Body, Engine, Line }
