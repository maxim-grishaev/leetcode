type Leaf<T> = TreeNode<T> | null
type TreeNode<T> = {
    val: T
    left: TreeNode<T> | null
    right: TreeNode<T> | null
}

const createTreeNode = <T>(
    val: T,
    {
        left = null,
        right = null,
    }: {
        left?: Leaf<T>
        right?: Leaf<T>
    } = {},
): TreeNode<T> => ({
    val,
    left,
    right,
})

const getTreeHeight = () => {
    //
}

class Tree<T = number> {
    public root: TreeNode<T> | null = null

    constructor(val: T | null) {
        this.root = val === null ? null : createTreeNode(val)
    }
}

export { TreeNode, Tree, createTreeNode }
