import { expect, test } from 'vitest'
import { polindrome } from './003-polindrome'

// For inputString = "aabaa", the output should be solution(inputString) = true;
// For inputString = "abac", the output should be solution(inputString) = false;
// For inputString = "a", the output should be solution(inputString) = true.

// should return true if the given string is a palindrome for example example: 'aabaa', 'a', 'rotator'
test('should return true if the given string is a palindrome  for example example: aabaa, a, rotator', () => {
  expect(polindrome('aabaa')).toBe(true)
  expect(polindrome('a')).toBe(true)
  expect(polindrome('rotator')).toBe(true)
})

// should return true if the given string is a palindrome for example example numbers: '1001', '12321', '123321'
test('should return true if the given string is a palindrome for example numbers: 1001, 12321, 123321', () => {
  expect(polindrome('1001')).toBe(true)
  expect(polindrome('12321')).toBe(true)
  expect(polindrome('123321')).toBe(true)
})

// should return error if the given somthing else than string
test('should return error if the given somthing else than string', () => {
  expect(polindrome(null)).toBe('error')
  expect(polindrome(false)).toBe('error')
  expect(polindrome(true)).toBe('error')
})
