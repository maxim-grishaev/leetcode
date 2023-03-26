const ratio = (x1: number, y1: number, x2: number, y2: number) =>
    Math.abs((x1 - x2) / (y1 - y2))

export function maxPoints(points: number[][]): number {
    if (points.length < 3) {
        return points.length
    }
    let max = 0
    for (let i = 0; i < points.length; i++) {
        const [x1, y1] = points[i]
        const slopes: Record<string, number> = {}
        let duplicates = 0
        for (let j = i + 1; j < points.length; j++) {
            const [x2, y2] = points[j]
            if (x1 === x2 && y1 === y2) {
                duplicates += 1
                continue
            }
            const slope = ratio(x1, y1, x2, y2)
            if (slope in slopes) {
                slopes[slope] += 1
            } else {
                slopes[slope] = 2
            }
        }
        const maxSlope = Math.max(...Object.values(slopes))
        max = Math.max(max, maxSlope + duplicates)
    }
    return max
}
