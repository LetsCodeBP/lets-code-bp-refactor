'use strict'

const doubling = require('./doubling')

function doublingController (req, res) {
  try {
    const number = req.query.input
    res.json(doubling({number}))
  } catch(err) {
    res.status(400).json({
      error: err.message
    })
  }
}

module.exports = doublingController
