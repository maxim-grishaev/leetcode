import { hIndex } from './hIndex'

it.each([
    [[3, 0, 6, 1, 5], 3],
    [[1, 3, 1], 1],
    [[100], 1],
])('%p => %p', (arr, exp) => {
    expect(hIndex(arr)).toEqual(exp)
})
