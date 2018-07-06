
/* global describe, it */

const expect = require('chai').expect
const fisica = require('../dist/bundle_server')

const Vector2D = fisica.Vector2D
const world = new fisica.Circle.World()

describe('Given a Circle instance', () => {
  const circle = new fisica.Circle.Circle(new Vector2D(0, 0), 1, true)

  it('I should be able to add a force', () => {
    circle.addForce(new Vector2D(1, 0))
    expect(circle.acceleration).to.deep.equal(new Vector2D(1, 0))
  })

  it('I should be able to get the momentum of the circle', () => {
    expect(circle.momentum()).deep.equal(Vector2D.mult(circle.velocity, circle.mass))
  })

  it('The velocity should change with an acceleration', () => {
    circle.update()
    expect(circle.velocity).to.deep.equal(new Vector2D(1 / circle.mass, 0)) // 
  })
})
