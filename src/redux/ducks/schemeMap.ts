import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
  addTreeNode,
  removeTreeNode,
  updateTreeNode,
} from '../../utils/treeUtils'

import { SchemeNodeType } from '../../containers/SchemeMap/SchemeNode/utils/nodeType'

export interface SchemeMapState {
  rootNode: SchemeNodeType
}

const initialState: SchemeMapState = {
  rootNode: {
    id: '0',
    type: 'root',
    name: 'root',
    children: [],
  },
}

const reducer = createSlice({
  name: 'schemeMap',
  initialState,
  reducers: {
    loadRoot(
      state: SchemeMapState,
      action: PayloadAction<{ root: SchemeNodeType }>
    ) {
      const { root } = action.payload
      state.rootNode = action.payload.root
    },
    addNode(
      state: SchemeMapState,
      action: PayloadAction<{ id: string; node: SchemeNodeType }>
    ) {
      const { id, node } = action.payload
      const newTree = addTreeNode(id, state.rootNode, node)
      if (newTree) {
        state.rootNode = newTree
      }
    },

    removeNode(state: SchemeMapState, action: PayloadAction<{ id: string }>) {
      const { id } = action.payload
      const newTree = removeTreeNode(id, state.rootNode)

      if (newTree) {
        state.rootNode = newTree
      }
    },

    updateNode(
      state: SchemeMapState,
      action: PayloadAction<{
        id: string
        nodeValue: SchemeNodeType
      }>
    ) {
      const { id, nodeValue } = action.payload
      const newTree = updateTreeNode(id, nodeValue, state.rootNode)
      if (newTree) {
        state.rootNode = newTree
      }
    },
  },
})

export const { loadRoot, addNode, removeNode, updateNode } = reducer.actions

export default reducer.reducer
