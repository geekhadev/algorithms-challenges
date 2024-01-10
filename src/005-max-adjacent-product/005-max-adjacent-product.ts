export function maxAdjacentProduct (numbers: number[]): number | Error {
  try {
    if (Array.isArray(numbers) === false) {
      throw new Error('Error')
    }

    if (numbers.some((n) => typeof n !== 'number')) {
      throw new Error('Error')
    }

    if(numbers.length < 2) {
      throw new Error('Error')
    }

    let productResult : number = 0
    numbers.forEach((current, index) => {

      const next = numbers[index + 1]
      const product = current * next

      if (index === 0 || product > productResult) {
        productResult = product
      }
    })

    return productResult
  } catch (error) {
    return new Error('Error')
  }
}
