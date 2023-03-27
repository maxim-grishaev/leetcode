import { isMatch } from './1'

it.each([
    ['aa', 'a', false],
    ['aa', '*', true],
    ['aa', '??', true],
    ['cb', '?a', false],
    ['cb', '*a', false],
    ['cb', 'c*b', true],
])(`42. Trapping Rain Water %p + %p = %p`, (str, ptrn, out) => {
    expect(isMatch(str, ptrn)).toEqual(out)
})
