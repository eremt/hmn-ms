const s = 1000
const m = 60 * s
const h = 60 * m
const d = 24 * h
const w = 7 * d
const y = 365.25 * d

const units = {
  s,
  sec: s,
  secs: s,
  second: s,
  seconds: s,

  m,
  min: m,
  mins: m,
  minute: m,
  minutes: m,

  h,
  hour: h,
  hours: h,

  d,
  day: d,
  days: d,

  w,
  week: w,
  weeks: w,

  y,
  year: y,
  years: y
}

const reMatches = /\d*\.\d+\D+|\d+\.\d*\D+|\d+\D+/g
const reGroups = /(\d*\.?\d*)(\D+)/

const ERROR_INVALID = 'is not a valid format'

/**
 * Convert a string to milliseconds
 * @param {String} input 
 * @return {Number} 
 */
function humanToMilliseconds (input) {
  if (typeof input !== 'string') throw new Error('Expected argument to be of type string')

  const matches = input.match(reMatches)
  if (!matches) throw new Error(`${input} ${ERROR_INVALID}`)

  return matches.reduce((total, match) => {
    let [ _, amount, unit ] = reGroups.exec(match)
    amount = parseFloat(amount)
    unit = unit.trim().toLowerCase()

    if (!amount || !units[unit]) throw new Error(`${match} ${ERROR_INVALID}`)

    return total + (amount * units[unit])
  }, 0)
}

module.exports = humanToMilliseconds
