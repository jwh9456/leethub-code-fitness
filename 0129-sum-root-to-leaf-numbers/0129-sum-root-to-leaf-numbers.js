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
 * @return {number}
 */
var sumNumbers = function(root) {
 
    return sum(root,0)
};

var sum = function(root, s){
	if (root == null) return 0;
	if (root.right == null && root.left == null) return s*10 + root.val;
	return sum(root.left, s*10 + root.val) + sum(root.right, s*10 + root.val);
}