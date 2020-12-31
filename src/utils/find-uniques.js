'use strict'

function findUniques (value, key, existing = []) {
  const findE = e => key ? e[key] : e
  const uniques = new Set(existing.map(findE))
  return value.filter(e => {
    e = findE(e)
    // if uniques has e return false, otherwise add e and return true
    return !uniques.has(e) && uniques.add(e)
  })
}

module.exports = findUniques
