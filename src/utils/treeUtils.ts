import { SchemeNodeType } from '../containers/SchemeMap/SchemeNode/utils/nodeType'

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

  if (root.children) {
    for (let n = 0; n < root.children.length; n++) {
      const node = findTreeNode(id, root.children[n], callback)
      if (node) return node
    }
  }
}

export const findNodeParent = (
  id: string,
  root: SchemeNodeType,
  callback: (node: SchemeNodeType) => SchemeNodeType
): SchemeNodeType | undefined => {
  if (root.children.some(child => child.id === id)) {
    return callback(root)
  }

  for (let n = 0; n < root.children.length; n++) {
    const node = findNodeParent(id, root.children[n], callback)
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
    console.log(n)
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
  id: string,
  root: SchemeNodeType
): SchemeNodeType | undefined => {
  if (id === '0') return undefined

  const rootCopy = JSON.parse(JSON.stringify(root))

  return findNodeParent(id, rootCopy, n => {
    n.children = n.children.filter(child => child.id !== id)
    return rootCopy
  })
}

/**
 * Update an anttribute of a node from the three
 * @param {string} id Id from node to be updated
 * @param {string} value New node value
 * @param {SchemeNodeType} root Root node
 */
export const updateTreeNode = (
  id: string,
  value: SchemeNodeType,
  root: SchemeNodeType
): SchemeNodeType | undefined => {
  const rootCopy = JSON.parse(JSON.stringify(root))

  return findTreeNode(id, rootCopy, n => {
    n.name = value.name
    n.address = value.address
    n.children = value.children
    n.info = value.info
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
