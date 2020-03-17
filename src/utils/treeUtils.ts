import { SchemeNodeType } from '../containers/SchemeMap/SchemeNode/nodeType'

/**
 * Function used to find node on the tree and execute a callback function with it
 * @param {string} id Searched node id
 * @param {SchemeNodeType} root root node to start the search
 * @param {function} callback callback function to be executed with the found node
 */
export const findTreeNode = (
  id: string,
  root: SchemeNodeType,
  callback: (node: SchemeNodeType) => SchemeNodeType
): SchemeNodeType | undefined => {
  if (root.id === id) {
    return callback(root)
  }

  for (let n = 0; n < root.children.length; n++) {
    const node = findTreeNode(id, root.children[n], callback)
    if (node) return node
  }
}

/**
 * Add a passed node to the tree
 * @param {string} id Node to be appended to
 * @param {SchemeNodeType }root Root node
 * @param {SchemeNodeType} node Node to be added
 */
export const addTreeNode = (
  id: string,
  root: SchemeNodeType,
  node: SchemeNodeType
): SchemeNodeType | undefined => {
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
 * @param {SchemeNodeType} root Root node
 */
export const removeTreeNode = (
  parentId: string,
  id: string,
  root: SchemeNodeType
): SchemeNodeType | undefined => {
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
 * @param {SchemeNodeType} root Root node
 */
export const updateTreeNode = (
  id: string,
  attr: string,
  value: string | number,
  root: SchemeNodeType
): SchemeNodeType | undefined => {
  const rootCopy = JSON.parse(JSON.stringify(root))

  return findTreeNode(id, rootCopy, n => {
    n.info[attr] = value
    return rootCopy
  })
}

/**
 * Return a node from the tree
 * @param {string} id Id from node to be read
 * @param {SchemeNodeType} root Root node
 */
export const readTreeNode = (
  id: string,
  root: SchemeNodeType
): SchemeNodeType | undefined => {
  const rootCopy = JSON.parse(JSON.stringify(root))

  return findTreeNode(id, rootCopy, n => {
    return n
  })
}
