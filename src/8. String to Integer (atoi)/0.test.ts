import { myAtoi as myAtoi1 } from './1'

const testMap: Record<string, number> = {
    '42': 42,
    '   -42': -42,
    '4193 with words': 4193,
    '-91283472332': -2147483648,
    'words and 987': 0,
    '21474836460': 2147483647,
    '2147483648': 2147483647,
    '-2147483649': -2147483648,
}

it.each(Object.keys(testMap))('%p', (input) => {
    expect(myAtoi1(input)).toBe(testMap[input])
    // console.log(myAtoi1(input))
})
