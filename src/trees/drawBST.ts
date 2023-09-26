interface BSTNode<T = unknown> {
    value: T
    left: BSTNode<T> | null
    right: BSTNode<T> | null
}

export const drawBSTLeftToRight = <T>(
    node: BSTNode<T> | null,
    prefix = '',
    isBottom = true,
    level = 0,
): void => {
    if (node === null) {
        if (level === 0) {
            console.log('XXX')
        }
        return
    }

    // Print the right subtree
    drawBSTLeftToRight(
        node.right,
        level === 0 ? '' : prefix + (isBottom ? '│ ' : '  '),
        node.left === null,
        level + 1,
    )

    if (level === 0) {
        console.log(node.value)
    } else {
        // Print the current node
        if (node.right === null) {
            console.log(`${prefix}${isBottom ? '│' : ' '} ┌○`)
        }
        console.log(`${prefix}${isBottom ? '└─┼─' : '┌─┼─'}`, node.value)
        if (node.left === null) {
            console.log(`${prefix}${isBottom ? ' ' : '│'} └○`)
        }
    }

    // Recursively print the left subtree
    drawBSTLeftToRight(
        node.left,
        level === 0 ? '' : prefix + (isBottom ? '  ' : '│ '),
        true,
        level + 1,
    )
}
