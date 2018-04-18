'use strict'

const test = require('ava')
const supertest = require('supertest')

const app = require('./app')

test('doubling without input', t => {
  return supertest(app)
    .get('/doubling')
    .expect(400)
    .then(res => {
      t.is(res.body.error, 'Please provide an input!')
    })
})

test('doubling 5', t => {
  return supertest(app)
    .get('/doubling?input=5')
    .expect(200)
    .then(res => {
      t.is(res.body.received, 5)
      t.is(res.body.result, 10)
    })
})
