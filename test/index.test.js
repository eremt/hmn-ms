import { test, describe } from 'node:test'
import { strict as assert } from 'node:assert'
import ms from '../index.js'

const s = 1000
const m = 60 * s
const h = 60 * m
const d = 24 * h
const w = 7 * d
const y = 365.25 * d

describe('Testing', () => {
  test('case sensitivity', assert.equal(ms('1 minute 30 SECONDS'), 90 * s))
  test('white-space', assert.equal(ms('1m30s'), 90 * s))

  test('decimal', assert.equal(ms('1.5 s'), 1.5 * s))
  test('decimal', assert.equal(ms('.5 s'), .5 * s))
  test('decimal', assert.equal(ms('1. s'), 1 * s))

  test('1h 30m', assert.equal(ms('1h 30m'), 90 * m))
  test('.5h 40m 1200s', assert.equal(ms('.5h 40m 1200s'), 90 * m))

  test('1 week 3 days', assert.equal(ms('1 week 3 days'), 10 * d))
  test('5 days 120 hours', assert.equal(ms('5 days 120 hours'), 10 * d))

  test('error handling', assert.throws(
    () => ms('. minute'),
    new Error('. minute is not a valid format')
  ))
  test('error handling', assert.throws(
    () => ms('m'),
    new Error('m is not a valid format')
  ))
  test('error handling', assert.throws(
    () => ms('1'),
    new Error('1 is not a valid format')
  ))
  test('error handling', assert.throws(
    () => ms('10 eternities'),
    new Error('10 eternities is not a valid format')
  ))
})
