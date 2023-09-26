import { Comparator } from '../../../lib/types'

interface AVLTreeNode<T = number> {
    value: T
    left: AVLTreeNode<T> | null
    right: AVLTreeNode<T> | null
    height: number
}

type AnyAVLTreeNode = AVLTreeNode<unknown>

const createAVLTreeNode = <T>(value: T): AVLTreeNode<T> => ({
    value,
    left: null,
    right: null,
    height: 1,
})

// Helper function to get the height of a node
const getAVLNodeHeight = (node: AnyAVLTreeNode | null) =>
    node === null ? 0 : node.height

// Helper function to update the height of a node based on its children
const getAVLHeightByChildren = (node: AnyAVLTreeNode) =>
    Math.max(getAVLNodeHeight(node.left), getAVLNodeHeight(node.right)) + 1

// Recursive helper method for in-order traversal
const visitAllInOrder = <T>(
    node: AVLTreeNode<T> | null,
    visit: (v: T) => void,
): void => {
    if (node !== null) {
        visitAllInOrder(node.left, visit)
        visit(node.value)
        visitAllInOrder(node.right, visit)
    }
}

// Helper function to perform a right rotation (LL Rotation)
const rotateRight = <T>(y: AVLTreeNode<T>): AVLTreeNode<T> => {
    if (y.left === null) {
        throw new Error("Can't rotate right: y.left is null")
    }
    const x = y.left
    const temp = x.right

    x.right = y
    y.left = temp

    y.height = getAVLHeightByChildren(y)
    x.height = getAVLHeightByChildren(x)

    return x
}

// Helper function to perform a left rotation (RR Rotation)
const rotateLeft = <T>(x: AVLTreeNode<T>): AVLTreeNode<T> => {
    if (x.right === null) {
        throw new Error("Can't rotate left: x.right is null")
    }
    const y = x.right
    const T2 = y.left

    y.left = x
    x.right = T2

    x.height = getAVLHeightByChildren(x)
    y.height = getAVLHeightByChildren(y)

    return y
}

// Helper function to balance a node and update its height
const balance = <T>(node: AVLTreeNode<T>) => {
    const bf = getBalanceFactor(node)

    // Check if the tree is left-heavy
    if (bf > 1) {
        // Check if the left subtree is right-heavy (LR case)
        if (getBalanceFactor(node.left) < 0) {
            if (node.left === null) {
                throw new Error(
                    `[Invariant] node.left is null - balance is: ${bf} (LR case)`,
                )
            }
            node.left = rotateLeft(node.left)
        }
        return rotateRight(node)
    }

    // Check if the tree is right-heavy
    if (bf < -1) {
        // Check if the right subtree is left-heavy (RL case)
        if (getBalanceFactor(node.right) > 0) {
            if (node.right === null) {
                throw new Error(
                    `[Invariant] node.right is null - balance is: ${bf} (RL case)`,
                )
            }
            node.right = rotateRight(node.right) // Right-rotate the right subtree
        }
        return rotateLeft(node) // Left-rotate the current node
    }

    // If the tree is already balanced, return the node
    return node
}

// Recursive helper method for insertion
const insertNode = <T>(
    rootNode: AVLTreeNode<T> | null,
    value: T,
    compare: Comparator<T>,
): AVLTreeNode<T> => {
    if (rootNode === null) {
        return createAVLTreeNode(value)
    }

    const comp = compare(value, rootNode.value)
    if (comp === 0) {
        // Duplicate values are not allowed
        return rootNode
    }

    if (comp < 0) {
        rootNode.left = insertNode(rootNode.left, value, compare)
    } else if (comp > 0) {
        rootNode.right = insertNode(rootNode.right, value, compare)
    }

    // Update height and balance the node
    rootNode.height = getAVLHeightByChildren(rootNode)
    return balance(rootNode)
}

const getBalanceFactor = (node: AnyAVLTreeNode | null): number =>
    node === null
        ? 0
        : getAVLNodeHeight(node.left) - getAVLNodeHeight(node.right)

// Helper function to find the node with the minimum value
const findMinNode = <T>(node: AVLTreeNode<T>): AVLTreeNode<T> | null => {
    if (node.left === null) {
        return node
    }
    return findMinNode(node.left)
}

// Helper function to find the node with the maximum value
const findMaxNode = <T>(node: AVLTreeNode<T>): AVLTreeNode<T> | null => {
    if (node.right === null) {
        return node
    }
    return findMaxNode(node.right)
}

// Recursive helper method for removing a node from the AVL tree
const removeNode = <T>(
    node: AVLTreeNode<T> | null,
    value: T,
    compare: Comparator<T>,
): AVLTreeNode<T> | null => {
    if (node === null) {
        return node // Value not found, return null (no change)
    }

    // Compare the value with the current node's value
    const comp = compare(value, node.value)

    if (comp < 0) {
        // The value to be deleted is in the left subtree
        node.left = removeNode(node.left, value, compare)
    } else if (comp > 0) {
        // The value to be deleted is in the right subtree
        node.right = removeNode(node.right, value, compare)
    } else {
        // Value to be deleted is found

        // Node with only one child or no child
        if (node.left === null || node.right === null) {
            const temp = node.left || node.right

            // No child case
            if (temp === null) {
                node = null
            } else {
                // Copy the contents of the non-empty child
                node.value = temp.value
                node.left = null
                node.right = null
            }
        } else {
            // Node with two children: Get the inorder successor (smallest
            // in the right subtree)
            const successor = findMinNode(node.right)
            if (successor === null) {
                throw new Error('[Invariant] successor is null')
            }

            // Copy the inorder successor's data to this node
            node.value = successor.value

            // Delete the inorder successor
            node.right = removeNode(node.right, successor.value, compare)
        }
    }

    // If the tree had only one node, return
    if (node === null) {
        return node
    }

    // Update height and balance the node
    node.height = getAVLHeightByChildren(node)
    return balance(node)
}

export class AVLTree<T> {
    root: AVLTreeNode<T> | null
    size = 0
    compare: Comparator<T>

    constructor(compare: Comparator<T>) {
        this.root = null
        this.compare = compare
    }

    public mergeArray = (values: T[]): this => {
        values.forEach((v) => this.insert(v))
        return this
    }
    public toArray(): T[] {
        const arr = new Array<T>(this.size)
        let i = 0
        this.forEach((v) => {
            arr[i++] = v
        })
        return arr
    }

    // Public method to insert a value into the AVL tree
    insert(value: T): this {
        this.root = insertNode(this.root, value, this.compare)
        this.size += 1
        return this
    }

    remove(value: T): this {
        this.root = removeNode(this.root, value, this.compare)
        this.size -= 1
        return this
    }

    // Public method to perform an in-order traversal of the AVL tree
    forEach(visit: (v: T) => void): this {
        visitAllInOrder(this.root, visit)
        return this
    }
}
