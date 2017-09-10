
/* global describe, it */

const expect = require('chai').expect
const vector = require('../vector')

describe('Given an angle', function () {
  it('I should be able to convert that angle to degree', function () {
    expect(180).deep.equal(vector.toDegree(Math.PI))
  })
})

describe('Given an instance of the vector functions set', function () {
  it('I should be able to add 2 vectors', function () {
    expect([1, 10]).deep.equal(vector.add([0, 10], [1, 0]))
    expect([0, 5, 10]).deep.equal(vector.add([0, 3.5], [0, 1.5], [0, 0, 10]))
  })

  it('I should be able to subtract 2 vectors', function () {
    expect([9, 10]).deep.equal(vector.sub([10, 20], [1, 10]))
  })
})
