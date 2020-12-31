'use strict'

const findUniques = require('./find-uniques')

function difference (a, b, key) {
  // get set difference of b and a
  return findUniques(b, key, findUniques(a, key))
}

module.exports = difference
