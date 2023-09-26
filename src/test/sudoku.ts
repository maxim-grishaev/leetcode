const validate9 = (arr: string[]) => {
    const s = new Set()
    let n = '.'
    for (let i = 0; i < arr.length; i++) {
        n = arr[i]
        if (n === '.') {
            continue
        }
        if (s.has(n)) {
            return false
        }
        s.add(n)
    }
    return true
}

const getCols = (board: string[][], size: number) => {
    const cols: string[][] = []
    for (let i = 0; i < size; i++) {
        const col: string[] = []
        for (let j = 0; j < size; j++) {
            col.push(board[j][i])
        }
        cols.push(col)
    }
    return cols
}

const getSquares = (board: string[][], len: number, sq: number): string[][] => {
    const sqList: string[][] = []
    for (let top = 0; top < len; top += sq) {
        for (let left = 0; left < len; left += sq) {
            const square: string[] = []
            for (let dt = 0; dt < sq; dt += 1) {
                for (let dl = 0; dl < sq; dl += 1) {
                    square.push(board[top + dt][left + dl])
                }
            }
            sqList.push(square)
        }
    }
    return sqList
}

function isValidSudoku(board: string[][]): boolean {
    const h = board.every(validate9)
    if (!h) {
        return false
    }
    const v = getCols(board, 9).every(validate9)
    if (!v) {
        return false
    }
    const sq = getSquares(board, 9, 3).every(validate9)
    if (!sq) {
        return false
    }
    return true
}

console.log(
    getSquares(
        [
            ['1', '.', '.', '2', '.', '.', '3', '.', '.'],
            ['2', '.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '3', '.', '.', '.', '.', '.', '.', '.'],

            ['4', '.', '.', '5', '.', '.', '6', '.', '.'],
            ['9', '.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '1', '.', '.', '.', '.', '.', '.', '.'],

            ['7', '.', '.', '8', '.', '.', '9', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ],
        9,
        3,
    ),
)
