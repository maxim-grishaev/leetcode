import { alignLeft, fullJustify, getLine, justifyLine } from './just'

describe('getLine', () => {
    it('gets first line', () => {
        const line = getLine(['This', 'is', 'an', 'example'], 16, 0)
        expect(line).toEqual({
            hasMore: true,
            line: ['This', 'is', 'an'],
            wordCount: 3,
            letterCount: 8,
        })
    })

    it('gets last line', () => {
        const line = getLine(['This', 'is', 'an', 'example'], 16, 3)
        expect(line).toEqual({
            hasMore: false,
            line: ['example'],
            wordCount: 1,
            letterCount: 7,
        })
    })

    it('gets line short', () => {
        const line = getLine(['I', 'am', 'ok'], 10, 0)
        expect(line).toEqual({
            hasMore: false,
            line: ['I', 'am', 'ok'],
            wordCount: 3,
            letterCount: 5,
        })
    })
})

describe('justifyLine', () => {
    it('one word => alignLeft', () => {
        const line = justifyLine(['example'], 16, 1, 7)
        expect(line).toEqual('example         ')
    })

    it('justifies equally', () => {
        const line = justifyLine(['We', 'are', 'ok'], 11, 3, 7)
        expect(line).toEqual('We  are  ok')
    })

    it('justifies aundant spaces 1', () => {
        const line = justifyLine(['This', 'is', 'an'], 16, 3, 8)
        expect(line).toEqual('This    is    an')
    })

    it('justifies aundant spaces 2', () => {
        const line = justifyLine(['I', 'am', 'ok'], 10, 3, 5)
        expect(line).toEqual('I   am  ok')
    })
})

describe('alignLeft', () => {
    it('justifies', () => {
        const line = alignLeft(['This', 'is', 'an'], 16, 3, 8)
        expect(line).toEqual('This is an      ')
    })

    it('justifies last', () => {
        const line = alignLeft(['example'], 16, 1, 7)
        expect(line).toEqual('example         ')
    })
})

describe('fullJustify', () => {
    it('justifies', () => {
        const text = fullJustify(
            ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'],
            16,
        )
        expect(text).toEqual([
            'This    is    an',
            'example  of text',
            'justification.  ',
        ])
        expect(text.every((line) => line.length === 16)).toBeTruthy()
    })

    it('justifies short', () => {
        const text = fullJustify(['I', 'am', 'ok'], 3)
        expect(text).toEqual(['I  ', 'am ', 'ok '])
    })

    it('returns equal line size', () => {
        const text = fullJustify(
            [
                'One',
                'two',
                'three',
                'four',
                'five',
                'six',
                'seven',
                'eight',
                'nine',
                'ten',
                'eleven',
            ],
            8,
        )
        expect(text).toEqual([
            'One  two',
            'three   ',
            'four    ',
            'five six',
            'seven   ',
            'eight   ',
            'nine ten',
            'eleven  ',
        ])
    })
})
