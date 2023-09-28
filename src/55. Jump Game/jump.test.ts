import { canJump } from './jump'

it.each([
    //
    [[2, 3, 1, 1, 4], true],
    [[3, 2, 1, 0, 4], false],
])(`%s`, (given, expected) => {
    expect(canJump(given)).toEqual(expected)
})
