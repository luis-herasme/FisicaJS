
const vector = require('vector_functions')

/**
 * This is a class that returns a line
 * @param {array} start This is a vector
 * @param {array} end This is a vector
 */
function Line (start, end) {
  this.start = start
  this.end = end
  this.move = function (movement) {
    this.start = vector.add(this.start, movement)
    this.end = vector.add(this.end, movement)
  }
  return this
}

module.exports = Line
