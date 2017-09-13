
const vector = require('vector_functions')

/**
 * This is a class that returns a line
 * @param {array} start This is a vector
 * @param {array} end This is a vector
 */
function Engine () {
  this.bodies = []

  this.add = function (body) {
    this.bodies.push(body)
  }

  this.setBounds = function (minX, maxX, minY, maxY) {
    this.boundSet = true
    this.minX = minX
    this.maxX = maxX
    this.minY = minY
    this.maxY = maxY
  }

  this.removeBounds = function () {
    this.boundSet = false
  }

  this.update = function () {
    this.bodies.forEach(function (body, index) {
      /*
      if (this.boundSet) {
        if (body.position.x <= this.minX) {
          body.position.x = this.minX
          body.velocity.mult(this.restitution)
          body.velocity.inverse()
        }
        if (body.position.x >= this.maxX) {
          body.positio n.x = this.maxX
          body.velocity.mult(this.restitution)
          body.velocity.inverse()
        }
        if (body.position.y <= this.minY) {
          body.position.y = this.minY
          body.velocity.mult(this.restitution)
          body.velocity.inverse()
        }
        if (body.position.y >= this.maxY) {
          body.position.y = this.maxY
          body.velocity.mult(this.restitution)
          body.velocity.inverse()
        }
      }
      */
      this.bodies.forEach(function (_body, _index) {
        if (index !== _index) {
          if (vector.distance(body.center, _body.center) > body.far + _body.far) {
            if (body.type !== 'Circle' && _body.type !== 'Circle') {
              body.lines.forEach(function (line, index) {
                _body.lines.forEach(function (_line, _index) {
                  const intersection = vector.lineIntersect(
                    line.start, line.end,
                    _line.start, line.end
                  )
                  if (intersection[0] !== 1 || intersection[1] !== 1) {
                    if (body.onCollision) body.onCollision(_body)
                    if (_body.onCollision) _body.onCollision(body)
                  }
                })
              })
            } else if (body.type !== 'Circle' && _body.type === 'Circle') {
              body.lines.forEach(function (line) {
                if (vector.distance(line.start, _body.center) < _body.radius) {
                  if (body.onCollision) body.onCollision(_body)
                  if (_body.onCollision) _body.onCollision(body)
                }
                if (vector.distance(line.end, body.center) < body.radius) {
                  if (body.onCollision) body.onCollision(_body)
                  if (_body.onCollision) _body.onCollision(body)
                }
              })
            } else if (body.type === 'Circle' && _body.type !== 'Circle') {
              _body.lines.forEach(function (line) {
                if (vector.distance(line.start, body.center) < body.radius) {
                  if (body.onCollision) body.onCollision(_body)
                  if (_body.onCollision) _body.onCollision(body)
                }
                if (vector.distance(line.end, body.center) < body.radius) {
                  if (body.onCollision) body.onCollision(_body)
                  if (_body.onCollision) _body.onCollision(body)
                }
              })
            } else {
              if (vector.distance(body.center, _body.center) < body.radius + _body.radius) {
                if (body.onCollision) body.onCollision(_body)
                if (_body.onCollision) _body.onCollision(body)
              }
            }
          }
        }
      })
    })
  }
}

module.exports = Engine
