
const vector = require('vector_functions')

function Engine () {
  this.bodies = []

  this.add = (body) => {
    this.bodies.push(body)
  }

  this.collision = function (body, body2) {
    if (body.onCollision) body.onCollision(body2)
    if (body2.onCollision) body2.onCollision(body)
  }

  this.setBounds = (minX, maxX, minY, maxY) => {
    this.bounds = true
    this.minX = minX
    this.maxX = maxX
    this.minY = minY
    this.maxY = maxY
  }

  this.removeBounds = () => {
    this.bounds = false
  }

  this.update = () => {
    this.bodies.forEach(function (body, index) {
      if (this.bounds) {
        if (body.position.x <= this.minX) {
          body.position.x = this.minX
          body.velocity.mult(this.restitution)
          body.velocity.inverse()
        }

        if (body.position.x >= this.maxX) {
          body.position.x = this.maxX
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

      this.bodies.forEach((body2, index2) => {
        if (index !== index2) {
          if (body.center.distance(body2.center) > body.far + body2.far) {
            if (body.type !== 'Circle' && body2.type !== 'Circle') {
              for (let bodyIndex = 0; bodyIndex < body.vertices.length - 1; bodyIndex++) {
                for (let body2Index = 0; body2Index < body2.vertices.length - 1; body2Index++) {
                  const intersection = vector.lineIntersect(
                    body.vertices.points[bodyIndex], body.vertices.points[bodyIndex + 1],
                    body2.vertices.points[body2Index], body2.vertices.points[body2Index + 1]
                  )
                  if (intersection[0] !== 1 || intersection[1] !== 1) this.collision(body, body2)
                }
              }
            } else if (body.type !== 'Circle' && body2.type === 'Circle') {
              body.vertices.points.forEach((vertex) => {
                if (vector.distance(vertex, body2.center) < body2.radius) this.collision(body, body2)
              })
            } else if (body.type === 'Circle' && body2.type !== 'Circle') {
              body2.vertices.points.forEach((vertex) => {
                if (vector.distance(vertex, body.center) < body2.radius) this.collision(body, body2)
              })
            } else {
              if (body.center.distance(body2.center) < body.radius + body2.radius) {
                this.collision(body, body2)
              }
            }
          }
        }
      })
    })
  }
}

module.exports = Engine
