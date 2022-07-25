/*
Find Value in a Binary Tree
An array that represents a Binary Tree is in the following form: binaryTree = [val, arrLeft, arrRight]
When arrLeft is the left side of the tree and arrRight is the right side of the tree.

To illustrate:
const arr1 = [3, [ 8, [ 5, null, null], null], [ 7, null, null]]

// arr1 represents the following Binary Tree:

                    3
                   / \
                  8   7
                 /\   /\
                5  N N  N
               /\
               N N

// Where N represents null.

Create a function that takes an array that represent a Binary Tree and a value and return true if the value is in the tree and, false otherwise.

Notes
The tree will contain integers only and will be presented by an array in the specified format.
*/

const tree = [3, [ 8, [ 5, null, null], null], [ 7, null, null]]

function valueInTree(tree, val) {
    if(tree[0] === val) {
        return true;
    }

    if(tree[1]) {
        if(valueInTree(tree[1], val)) {
            return true;
        }
    }

    if(tree[2]) {
        return valueInTree(tree[2], val)
    }

    return false;
}

console.log(valueInTree(tree, 5)) // ➞ true
console.log(valueInTree(tree, 9)) // ➞ false
console.log(valueInTree(tree, 51)) // ➞ false
console.log(valueInTree(tree, 8)) // ➞ true