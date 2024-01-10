import { expect, test } from 'vitest'
import { maxAdjacentProduct } from './005-max-adjacent-product'

test('should return return 21 for this array [3, 6, -2, -5, 7, 3]', () => {
  const expected = maxAdjacentProduct([3, 6, -2, -5, 7, 3]) === 21
  expect(expected).toBe(true)
})

test('should return return 21 for this array [-23, 4, -3, 8, -12]', () => {
  const expected = maxAdjacentProduct([-23, 4, -3, 8, -12]) === -12
  expect(expected).toBe(true)
})

test('should return error if input not if a array', () => {
  // @ts-ignore
  expect(maxAdjacentProduct(null)).toBeInstanceOf(Error)
  
  // @ts-ignore
  expect(maxAdjacentProduct(false)).toBeInstanceOf(Error)
  
  // @ts-ignore
  expect(maxAdjacentProduct(true)).toBeInstanceOf(Error)
})

test('should return error if some element of array is not a number', () => {
  // @ts-ignore
  expect(maxAdjacentProduct([1, 2, 3, 'a'])).toBeInstanceOf(Error)
  
  // @ts-ignore
  expect(maxAdjacentProduct([1, 2, 3, null])).toBeInstanceOf(Error)
  
  // @ts-ignore
  expect(maxAdjacentProduct([1, 2, 3, undefined])).toBeInstanceOf(Error)
})

test('should return error if array input have less than 2 elements', () => {
  expect(maxAdjacentProduct([1])).toBeInstanceOf(Error)
})
