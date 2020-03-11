import { SchemeNode } from '../redux/ducks/schemeMap'

export const findTreeNode = (
  id: string,
  node: SchemeNode,
  callback: (node: SchemeNode) => SchemeNode
): SchemeNode | undefined => {
  if (node.id === id) {
    return callback(node)
  }

  for (let n of node.children) {
    return findTreeNode(id, n, callback)
  }
}

export const addTreeNode = (
  id: string,
  root: SchemeNode,
  node: SchemeNode
): SchemeNode | undefined => {
  const rootCopy = JSON.parse(JSON.stringify(root))

  return findTreeNode(id, rootCopy, n => {
    n.children = [...n.children, node]
    return rootCopy
  })
}
