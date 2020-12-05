// 后序遍历
module.exports = function postorderTraversal(node) {
  if (node) {
    preorderTraversal(node.left)
    preorderTraversal(node.right)
    console.log(node.value)
  }
}
