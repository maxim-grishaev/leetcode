import { jump } from './jump'

it.each([
    //
    // [[2, 3, 1, 1, 4], 2],
    // [[2, 3, 0, 1, 4], 2],
    // [[1, 2, 3], 2],
    // [[2, 3, 1], 1],
    // [[2, 1, 1, 1, 1], 3],
    [[7, 0, 9, 6, 9, 6, 1, 7, 9, 0, 1, 2, 9, 0, 3], 2],
])(`%p => %p`, (given, expected) => {
    expect(jump(given)).toEqual(expected)
})
