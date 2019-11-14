const s = 1000
const m = 60 * s
const h = 60 * m
const d = 24 * h
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

  y,
  year: y,
  years: y
}

const reMatches = /(\d*\.?\d*\D+)/g
const reGroups = /(\d*\.?\d*)(\D+)/

module.exports = function humanToMilliseconds (input) {
  const matches = input.match(reMatches)
  return matches.reduce((acc, match) => {
    let [ _, amount, unit ] = reGroups.exec(match)
    amount = parseFloat(amount)
    unit = unit.trim().toLowerCase()
    return acc + (amount * units[unit])
  }, 0)
}
