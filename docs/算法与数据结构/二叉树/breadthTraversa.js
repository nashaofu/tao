// 广度优先遍历
module.exports = function breadthTraversa(node) {
  const queen = []
  if (node) {
    queen.push(node)
  }
  while (queen.length) {
    const n = queen.shift()
    console.log(n.value)
    if (n.left) queen.push(n.left)
    if (n.right) queen.push(n.right)
  }
}
