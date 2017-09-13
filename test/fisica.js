
/* global describe, it */

const expect = require('chai').expect
const fisica = require('../fisica.js')

const body = new fisica.Body('Rect', {
  position: [100, 100],
  width: 10,
  heigth: 20
})

describe('Given an angle', function () {
  it('I should be able to convert that angle to degree', function () {
    console.log(body)
    body.load()
    console.log(body.lines)
    // expect(180).deep.equal(vector.toDegree(Math.PI))
  })
})
