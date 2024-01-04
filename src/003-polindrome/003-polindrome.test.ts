import { expect, test } from 'vitest'
import { polindrome } from './003-polindrome'

test('should return true if the given string is a palindrome  for example example: aabaa, a, rotator', () => {
  expect(polindrome('aabaa')).toBe(true)
  expect(polindrome('a')).toBe(true)
  expect(polindrome('rotator')).toBe(true)
})

test('should return true if the given string is a palindrome for example numbers: 1001, 12321, 123321', () => {
  expect(polindrome('1001')).toBe(true)
  expect(polindrome('12321')).toBe(true)
  expect(polindrome('123321')).toBe(true)
})

test('should return error if the given somthing else than string', () => {
  // @ts-ignore
  expect(polindrome(null)).toBe('error')
  
  // @ts-ignore
  expect(polindrome(false)).toBe('error')
  
  // @ts-ignore
  expect(polindrome(true)).toBe('error')
})
