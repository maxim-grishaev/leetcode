type LinkedListItem<T> = {
    val: T
    prev: LinkedListItem<T> | null
}
const createLL = <T>(val: T): LinkedListItem<T> => ({
    val,
    prev: null,
})

const calcMin = (last: LinkedListItem<number>): number => {
    let cur = last
    let min = last.val
    for (;;) {
        if (cur.val < min) {
            min = cur.val
        }
        if (cur.prev === null) {
            break
        }
        cur = cur.prev
    }
    return min
}

class MinStack {
    private first: LinkedListItem<number> | null = null
    private last: LinkedListItem<number> | null = null
    private min = NaN
    constructor() {
        //
    }

    push(val: number): void {
        if (
            this.first === null ||
            this.last === null ||
            this.min !== this.min
        ) {
            this.first = this.last = createLL(val)
            this.min = val
            return
        }
        const last = createLL(val)
        last.prev = this.last
        this.last = last
        this.min = Math.min(this.min, val)
    }

    pop(): void {
        if (this.last === null) {
            return
        }
        const exLast = this.last
        this.last = exLast.prev
        if (this.last === null) {
            this.first = null
        }
        // find new min
        this.min =
            exLast.val === this.min
                ? this.last === null
                    ? NaN
                    : calcMin(this.last)
                : this.min
    }

    top(): number {
        if (this.last === null) {
            return NaN
        }
        return this.last.val
    }

    getMin(): number {
        return this.min
    }
}

export { MinStack }

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
