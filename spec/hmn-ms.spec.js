const ms = require('../index')

const s = 1000
const m = 60 * s
const h = 60 * m
const d = 24 * h
const w = 7 * d
const y = 365.25 * d

describe('Testing', function() {
  it('case sensitivity', () => expect(ms('1 minute 30 SECONDS')).toBe(90 * s)) // 90 seconds

  it('white-space', () => expect(ms('1m30s')).toBe(90 * s)) // 90 seconds

  it('decimal', () => expect(ms('1.5 s')).toBe(1.5 * s))
  it('decimal', () => expect(ms('.5 s')).toBe(.5 * s))
  it('decimal', () => expect(ms('1. s')).toBe(1 * s))

  it('1h 30m', () => expect(ms('1h 30m')).toBe(90 * m)) // 90 minutes
  it('.5h 40m 1200s', () => expect(ms('.5h 40m 1200s')).toBe(90 * m)) // 90 minutes

  it('1 week 3 days', () => expect(ms('1 week 3 days')).toBe(10 * d)) // 10 days
  it('5 days 120 hours', () => expect(ms('5 days 120 hours')).toBe(10 * d)) // 10 days

  it('error handling', () => expect(() => ms('. minute')).toThrow(new Error('. minute is not a valid format')))
  it('error handling', () => expect(() => ms('m')).toThrow(new Error('m is not a valid format')))
  it('error handling', () => expect(() => ms('1')).toThrow(new Error('1 is not a valid format')))
  it('error handling', () => expect(() => ms('10 eternities')).toThrow(new Error('10 eternities is not a valid format')))
})
