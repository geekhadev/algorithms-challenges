import { expect, test } from 'vitest'
import { sum } from './001-sum-two-numbers'

test('should return the sum if both numbers are positive', () => {
  const result = sum(1, 2)
  expect(result).toBe(3)
})

test('should return the sum if both numbers are negative', () => {
  const result = sum(-1, -2)
  expect(result).toBe(-3)
})

test('should return the sum if some number is negative', () => {
  const result = sum(-1, 2)
  expect(result).toBe(1)
})

test('should return the sum if some number is positive', () => {
  const result = sum(1, -2)
  expect(result).toBe(-1)
})

test('should return the sum if some number is zero', () => {
  const result = sum(1, 0)
  expect(result).toBe(1)
})

test('should return the sum if some number is decimal', () => {
  const result = sum(1.2, 2)
  expect(result).toBe(3.2)
})

test('should return error if some or both numbers are not numbers', () => {
  const result = sum('1', 2)
  expect(result).toBe('error')
})
