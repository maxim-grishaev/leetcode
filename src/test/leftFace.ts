import { TreeNode } from '../trees/tree'

const leftFace = (tree: TreeNode<number>): number[] => {
    const res: number[] = []
    traverse(tree, res, 0)
    return res
}

const traverse = (
    tree: TreeNode<number> | null,
    arr: number[],
    level: number,
): number[] => {
    if (tree === null) {
        return arr
    }
    if (arr[level] === undefined) {
        arr[level] = tree.val
    }
    traverse(tree.left, arr, level + 1)
    traverse(tree.right, arr, level + 1)
    return arr
}

export { leftFace }
