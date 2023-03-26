import { maxPoints } from './best'

const createCase = (out: number, points: Array<[number, number]>) => ({
    points,
    out,
})

it.each([
    createCase(2, [
        [0, 0],
        [1, -1],
        [1, 1],
    ]),
    createCase(3, [
        [1, 1],
        [2, 2],
        [3, 3],
    ]),
    createCase(4, [
        [1, 1],
        [3, 2],
        [5, 3],
        [4, 1],
        [2, 3],
        [1, 4],
    ]),
    createCase(2, [
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1],
    ]),
])('149. Max Points on a Line %i', ({ points, out }) => {
    expect(maxPoints(points)).toEqual(out)
})
