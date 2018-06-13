'use strict'

const express = require('express')

const generateMockBackend = ({inputAnswer, noInputAnswer}) => {
  const SITE_URL = 'http://localhost:8080'
  const mockBackend = express()

  mockBackend.use('/assets', express.static('assets'));
  mockBackend.get('/doubling', (req, res) => {
    if (req.query.input) {
      inputAnswer(res)
    } else {
      noInputAnswer(res)
    }
  })
  mockBackend.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
  })
  const server = mockBackend.listen(8080)

  return {
    server,
    SITE_URL
  }
}

module.exports = generateMockBackend
