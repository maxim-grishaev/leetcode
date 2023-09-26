// interface BSTNode<T> {
//   value: T,
//   left: BSTNode<T> | null,
//   right: BSTNode<T> | null,
// };
// type BSTRoot<T> = BSTNode<T> | null;

// const addNode = <T>(node: BSTNode<T>, value: T): BSTNode<T> => {
//   const newNode = {
//     value,
//     left: null,
//     right: null,
//   };
//   if (!node) {
//     return newNode;
//   }
//   if (value < node.value) {
//     if (node.left) {
//       addNode(node.left, value);
//     } else {
//       node.left = newNode;
//     }
//   } else {
//     if (node.right) {
//       addNode(node.right, value);
//     } else {
//       node.right = newNode;
//     }
//   }
//   return node;
// }

// const createBST = <T>(values: T[]): BSTRoot<T> => {
//   let bst: BSTRoot<T> | null = null;
//   values.forEach(v => {
//     bst = addNode(bst, v);
//   });
//   return bst;
// }

// type BSTVisitor<T> = (node: BSTNode<T>) => void;
// const visitBST = <T>(node: BSTNode<T>, visitor: (node: BSTNode<T>) => void) => {
//   if (!node) {
//     return;
//   }
//   visitor(node);
//   visitBST(node.left, visitor);
//   visitBST(node.right, visitor);
// }
