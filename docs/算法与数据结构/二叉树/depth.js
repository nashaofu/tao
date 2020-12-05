module.exports = function(node) {
  const queen = []
  let depth = 0

  if (node) {
    queen.push(node)
  }

  while (queen.length) {
    let len = queen.length
    depth++
    while (len > 0) {
      len--
      const n = queen.shift()
      if (n.left) queen.push(n.left)
      if (n.right) queen.push(n.right)
    }
  }

  return depth
}
