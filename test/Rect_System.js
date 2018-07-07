
const expect = require('chai').expect
const fisica = require('../dist/bundle_server')

const Vector2D = fisica.Vector2D
const world = new fisica.Rect.World()

describe('Given a rect instance', () => {
  const rect = new fisica.Rect.Rect(new Vector2D(0, 0), 1, true)

  it('I should be able to add a force', () => {
    rect.addForce(new Vector2D(1, 0))
    expect(rect.acceleration).to.deep.equal(new Vector2D(1, 0))
  })

  it('I should be able to get the momentum of the rect', () => {
    expect(rect.momentum()).deep.equal(Vector2D.mult(rect.velocity, rect.mass))
  })

  it('The velocity should change with an acceleration', () => {
    rect.update()
    expect(rect.velocity).to.deep.equal(new Vector2D(1 / rect.mass, 0))
  })
})
