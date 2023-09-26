import { minSubArrayLen } from './one'

it.each([
    // [[2, 3, 1, 2, 4, 3], 7, 2],
    // [[1, 4, 4], 4, 1],
    // [[1, 1, 1], 5, 0],
    [[12, 28, 83, 4, 25, 26, 25, 2, 25, 25, 25, 12], 213, 8],
])('%p, %p', (input, total, expected) => {
    expect(minSubArrayLen(total, input)).toBe(expected)
})
