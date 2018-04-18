'use strict'

const test = require('ava')

const doubling = require('./doubling')

test(t => {
  const request = {
    number: 5
  }
  t.deepEqual(doubling(request).result, 10)
})

test(t => {
  const request = {
    number: 5
  }
  t.deepEqual(doubling(request).received, 5)
})

test(t => {
  const request = {
    number: '5'
  }
  t.deepEqual(doubling(request).received, 5)
})

test(t => {
  const request = {
    number: undefined
  }
  const error = t.throws(() => doubling(request))
  t.is(error.message, 'Please provide an input!')
})
