import { createTreeNode } from '../trees/tree'
import { leftFace } from './leftFace'

it.each([
    [
        createTreeNode(1, {
            left: createTreeNode(2),
            right: createTreeNode(3),
        }),
        [1, 2],
    ],
    [
        createTreeNode(1, {
            left: createTreeNode(2, {
                left: createTreeNode(4),
            }),
            right: createTreeNode(3),
        }),
        [1, 2, 4],
    ],
    [
        createTreeNode(1, {
            left: createTreeNode(2, {
                right: createTreeNode(4),
            }),
            right: createTreeNode(3),
        }),
        [1, 2, 4],
    ],
    [
        createTreeNode(1, {
            left: createTreeNode(2),
            right: createTreeNode(3, {
                left: createTreeNode(4),
            }),
        }),
        [1, 2, 4],
    ],
    [
        createTreeNode(1, {
            left: createTreeNode(2),
            right: createTreeNode(3, {
                right: createTreeNode(4),
            }),
        }),
        [1, 2, 4],
    ],
    [
        createTreeNode(1, {
            left: createTreeNode(2),
            right: createTreeNode(3, {
                left: createTreeNode(4),
                right: createTreeNode(5),
            }),
        }),
        [1, 2, 4],
    ],
])('should return the left face of the tree', (tree, expected) => {
    expect(leftFace(tree)).toEqual(expected)
})
