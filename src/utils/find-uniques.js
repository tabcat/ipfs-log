'use strict'

function findUniques (value, key) {
  const uniques = new Set()
  return value.filter(e => {
    e = key ? e[key] : e
    // if uniques has e return false, otherwise add e and return true
    return !uniques.has(e) && uniques.add(e)
  })
}

module.exports = findUniques
