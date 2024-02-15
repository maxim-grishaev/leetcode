type Triangle = number[]

function maximumPerimeterTriangle(sticks: number[]): Triangle {
    // Write your code here
    const uniq = new Set<string>()
    const triangles = new Map<number, Array<Triangle>>()
    for (let i = 0; i < sticks.length; i++) {
        for (let j = i + 1; j < sticks.length; j++) {
            for (let k = j + 1; k < sticks.length; k++) {
                if (!isTtriangle(sticks[i], sticks[j], sticks[k])) {
                    continue
                }
                const a = sticks[i]
                const b = sticks[j]
                const c = sticks[k]
                // const sorted = [a, b, c]
                // sorted.sort((a, b) => a - b)
                const max = Math.max(a, b, c)
                const min = Math.min(a, b, c)
                const perim = a + b + c
                const sorted = [min, perim - min - max, max]
                const key = sorted.join(',')
                if (uniq.has(key)) {
                    continue
                }

                const list = triangles.get(perim) ?? []
                list.push(sorted)
                triangles.set(perim, list)
            }
        }
    }
    if (triangles.size === 0) {
        return [-1]
    }
    const perims = Array.from(triangles.keys())
    const maxPerim = Math.max(...perims)
    let found = triangles.get(maxPerim)
    if (found === undefined) {
        throw new Error('maxPerimTri is undefined')
    }
    if (found.length === 1) {
        return found[0]
    }

    const maxBigSide = found.reduce((mem, [, , c]) => Math.max(mem, c), -1)
    found = found.filter(([, , c]) => c === maxBigSide)
    if (found.length === 1) {
        return found[0]
    }

    const maxSmSide = found.reduce((mem, [a]) => Math.max(mem, a), -1)
    found = found.filter(([a]) => a === maxSmSide)
    return found[0]
}

function isTtriangle(a: number, b: number, c: number): boolean {
    return a + b > c && a + c > b && b + c > a
}

export { maximumPerimeterTriangle }
