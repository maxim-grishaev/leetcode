import { trap } from './1'

it.each([
    [[2, 0, 2], 2],
    [[1, 0, 3, 0, 2, 0, 1], 4],
    [[2, 0, 0, 2], 4],
    [[2, 0, 0, 0, 1], 3],
    [[1, 0, 1, 0, 1], 2],
    [[2, 0, 1, 0, 2], 5],
    [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], 6],
    [[4, 2, 0, 3, 2, 5], 9],
])(`42. Trapping Rain Water %i`, (height, out) => {
    expect(trap(height)).toEqual(out)
})