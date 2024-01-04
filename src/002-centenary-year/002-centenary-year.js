const ERRORS = {
  INVALD_NUMBER: 'Please input a number',
  NEGATIVE_NUMBER: 'Please input a positive number'
}

export const centenaryYear = (year) => {
  if (typeof year !== 'number') return ERRORS.INVALD_NUMBER
  if (year < 0) return ERRORS.NEGATIVE_NUMBER
  return Math.ceil(year / 100)
}
