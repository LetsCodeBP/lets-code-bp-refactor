'use strict'

const test = require('ava')

const transformation = require('./transformation')

test(t => {
  t.is(transformation.double(6), 12)
})
