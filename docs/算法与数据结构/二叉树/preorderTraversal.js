// 先序遍历
module.exports = function preorderTraversal(node) {
  if (node) {
    console.log(node.value)
    preorderTraversal(node.left)
    preorderTraversal(node.right)
  }
}
