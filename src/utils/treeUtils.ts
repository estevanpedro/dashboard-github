import { SchemeNode } from '../redux/ducks/schemeMap'

/**
 * Function used to find node on the tree and execute a callback function with it
 * @param {string} id Searched node id
 * @param {SchemeNode} root root node to start the search
 * @param {function} callback callback function to be executed with the found node
 */
export const findTreeNode = (
  id: string,
  root: SchemeNode,
  callback: (node: SchemeNode) => SchemeNode
): SchemeNode | undefined => {
  if (root.id === id) {
    return callback(root)
  }

  for (let n of root.children) {
    return findTreeNode(id, n, callback)
  }
}

/**
 * Add a passed node to the tree
 * @param {string} id Node to be appended to
 * @param {SchemeNode }root Root node
 * @param {SchemeNode} node Node to be added
 */
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

/**
 * Remove node from the tree
 * @param {string} parentId Parent id from node to be removed
 * @param {string} id Id from node to be removed
 * @param {SchemeNode} root Root node
 */
export const removeTreeNode = (
  parentId: string,
  id: string,
  root: SchemeNode
): SchemeNode | undefined => {
  if (id === '0') return undefined

  const rootCopy = JSON.parse(JSON.stringify(root))

  return findTreeNode(parentId, rootCopy, n => {
    n.children.filter(child => child.id !== id)
    return rootCopy
  })
}

/**
 * Update an anttribute of a node from the three
 * @param {string} id Id from node to be updated
 * @param {string }attr Node attribute to be updated
 * @param {string} value New attribute value
 * @param {SchemeNode} root Root node
 */
export const updateTreeNode = (
  id: string,
  attr: string,
  value: string | number,
  root: SchemeNode
): SchemeNode | undefined => {
  const rootCopy = JSON.parse(JSON.stringify(root))

  return findTreeNode(id, rootCopy, n => {
    n.info[attr] = value
    return rootCopy
  })
}

/**
 * Return a node from the tree
 * @param {string} id Id from node to be read
 * @param {SchemeNode} root Root node
 */
export const readTreeNode = (
  id: string,
  root: SchemeNode
): SchemeNode | undefined => {
  const rootCopy = JSON.parse(JSON.stringify(root))

  return findTreeNode(id, rootCopy, n => {
    return n
  })
}
