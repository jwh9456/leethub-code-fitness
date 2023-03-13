/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric(root) {
    if (root == null) return true;
    return recursiveSymmetric(root.left, root.right);
}

function recursiveSymmetric(left, right) {
    if (left == null && right == null) return true;
    if (left == null || right == null || left.val != right.val) return false;
    return recursiveSymmetric(left.left, right.right) && recursiveSymmetric(right.left, left.right);
}