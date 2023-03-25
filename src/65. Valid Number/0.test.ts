import { isNumber } from './1'

const addTo = (
    map: Record<string, boolean>,
    value: boolean,
    keys: string[],
) => {
    keys.forEach((key) => {
        map[key] = value
    })
}

const testMap: Record<string, boolean> = {}

addTo(testMap, true, [
    '0',
    '2',
    '0089',
    '-0.1',
    '+3.14',
    '4.',
    '-.9',
    '2e10',
    '-90E3',
    '3e+7',
    '+6e-1',
    '53.5e93',
    '-123.456e789',
])
addTo(testMap, false, [
    'e',
    '.',
    'abc',
    '1a',
    '1e',
    'e3',
    '99e2.5',
    '--6',
    '-+3',
    '95a54e53',
])

it.each(Object.keys(testMap))('%p', (input) => {
    expect(isNumber(input)).toBe(testMap[input])
    // console.log(myAtoi1(input))
})
