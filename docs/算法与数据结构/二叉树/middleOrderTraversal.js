// 中序遍历
module.exports = function middleOrderTraversal(node) {
  if (node) {
    preorderTraversal(node.left)
    console.log(node.value)
    preorderTraversal(node.right)
  }
}
