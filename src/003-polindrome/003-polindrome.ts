export function polindrome (string: string|number) {
  if (typeof string !== 'string' || typeof string === 'number') return 'error'

  const reverseString = string.split('').reverse().join('')
  return reverseString === string
}
