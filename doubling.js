'use strict'

const transformation = require('./transformation')

function doubling(request) {
  if (request.number === undefined) {
    throw new Error("Please provide an input!")
  }
  const number = Number(request.number)
  return {
    received: number,
    result: transformation.double(number)
  }
}

module.exports = doubling
