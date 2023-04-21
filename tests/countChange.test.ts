import { countChange } from '../src/index'

describe('countChange', () => {
  it('should return the correct number of ways to make change for a given amount', () => {
    expect(countChange(4, [1, 2])).toEqual(3)
    expect(countChange(10, [5, 2, 3])).toEqual(4)
    expect(countChange(11, [5, 7])).toEqual(0)
    expect(countChange(0, [1, 2])).toEqual(1)
    expect(countChange(5, [1, 2, 3])).toEqual(5)
    expect(countChange(100, [1, 5, 10, 25])).toEqual(242)
  })

  it('should return 0 if no denominations are provided', () => {
    expect(countChange(5, [])).toEqual(0)
  })
})
