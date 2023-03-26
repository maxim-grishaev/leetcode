type PointIndex = number // index in points
type Slope = number // ratio

type Line = {
    points: Set<PointIndex>
    slope: Slope
}
export type Point = [number, number]

const getSlope = (p1: Point, p2: Point): Slope => {
    if (p1[0] === p2[0]) {
        return Infinity
    }
    return (p1[1] - p2[1]) / (p1[0] - p2[0])
}

const getLongestLineSize = (lines: Line[]) => {
    let maxSize = 0
    lines.forEach((line) => {
        if (line.points.size > maxSize) {
            maxSize = line.points.size
        }
    })
    return maxSize
}

export function maxPoints(points: Point[]): number {
    if (points.length < 3) {
        return points.length
    }

    const linesList: Line[] = []

    const ln = points.length
    for (let ci = 0; ci < ln; ci++) {
        const center = points[ci]
        for (let pi = ci + 1; pi < ln; pi++) {
            const point = points[pi]
            const slope = getSlope(center, point)
            const linesLn = linesList.length

            let foundLine: Line | null = null

            for (let li = 0; li < linesLn; li++) {
                const line = linesList[li]
                if (slope !== line.slope) {
                    continue
                }
                if (line.points.has(ci)) {
                    foundLine = line
                    line.points.add(pi)
                    break
                }
            }

            if (!foundLine) {
                // new line
                linesList[linesLn] = {
                    points: new Set([ci, pi]),
                    slope,
                }
            }
        }
    }

    return getLongestLineSize(linesList)
}
