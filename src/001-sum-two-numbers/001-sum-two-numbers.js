export function sum (a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'error'
  }
  return a + b
}