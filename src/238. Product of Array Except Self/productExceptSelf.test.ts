import { productExceptSelf } from './productExceptSelf'

it.each([
    //
    [
        [0, 0],
        [0, 0],
    ],
    [
        [1, 0],
        [0, 1],
    ],
    [
        [1, 2, 3, 4],
        [24, 12, 8, 6],
    ],
    [
        [-1, 1, 0, -3, 3],
        [0, 0, 9, 0, 0],
    ],
    [
        [4, 3, 2, 1, 2],
        [12, 16, 24, 48, 24],
    ],
])(`%p => %p`, (given, expected) => {
    expect(productExceptSelf(given)).toEqual(expected)
})
