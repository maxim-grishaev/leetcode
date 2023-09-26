import { Comparator } from '../../lib/types'
import { AVLTree } from '../trees/avl/tree'

export const sortAVL = (arr: number[], compare: Comparator<number>): number[] =>
    new AVLTree(compare).mergeArray(arr).toArray()
