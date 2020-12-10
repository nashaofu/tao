export default function camelCase(str) {
  return str.replace(/[^a-z]+([a-z])/gi, (match, $1) => {
    return $1.toUpperCase()
  })
}

camelCase('as_sdsad')
