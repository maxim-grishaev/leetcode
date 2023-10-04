import { canJump } from './canJump.ok'

it.each([
    //
    [[2, 0, 0], true],
    [[0, 1], false],
    [[1, 0, 1, 0], false],
    [[2, 3, 1, 1, 4], true],
    [[3, 2, 1, 0, 4], false],
    [[3, 9, 0, 1, 0, 0, 0], true],
    [[1, 0, 9, 0, 1, 0, 0, 0], false],
])(`%p => %p`, (given, expected) => {
    expect(canJump(given)).toEqual(expected)
})
