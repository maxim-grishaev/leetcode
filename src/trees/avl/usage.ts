import { drawBSTLeftToRight } from '../drawBST'
import { AVLTree } from './tree'

// Usage example
const avlTree = new AVLTree<number>((x, y) => x - y)

avlTree.insert(10)
avlTree.insert(20)
avlTree.insert(30)
avlTree.insert(40)
avlTree.insert(50)
avlTree.insert(59)
avlTree.insert(58)
avlTree.insert(57)
avlTree.insert(56)
avlTree.insert(55)
avlTree.insert(54)
avlTree.insert(53)
avlTree.insert(52)
avlTree.insert(51)
avlTree.remove(50)
avlTree.insert(50)
new Array(1000).fill(0).forEach((_, i) => {
    avlTree.insert(-200 - i)
})
new Array(1000).fill(0).forEach((_, i) => {
    avlTree.remove(-200 - i)
})

drawBSTLeftToRight(avlTree.root)
console.log('In-order traversal:', avlTree.root?.value)

const arr: number[] = []
avlTree.forEach((v) => {
    arr.push(v)
})
console.log(arr.join(' '))
