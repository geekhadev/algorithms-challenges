import { expect, test } from 'vitest'
import { centenaryYear } from './002-centenary-year'

test('centenaryYear should return the year of the century case 1: 1905 => 20', () => {
  expect(centenaryYear(1905)).toEqual(20)
})

test('centenaryYear should return the year of the century case 2: 1700 => 17', () => {
  expect(centenaryYear(1700)).toEqual(17)
})

test('centenaryYear should return error message if input is not a number', () => {
  expect(centenaryYear('1905')).toEqual('Please input a number')
})

test('centenaryYear should return error message if input is a negative number', () => {
  expect(centenaryYear(-1905)).toEqual('Please input a positive number')
})
