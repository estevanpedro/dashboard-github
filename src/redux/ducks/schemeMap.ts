import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
  addTreeNode,
  removeTreeNode,
  updateTreeNode,
} from '../../utils/treeUtils'

export type NodeType = 'split' | 'timer' | 'notify' | 'send' | 'swap' | 'event'

export declare type SchemeNode = {
  id: string
  type: NodeType
  children: SchemeNode[]
  info: any
}

export interface SchemeMapState {
  rootNode: SchemeNode
}

const initialState: SchemeMapState = {
  rootNode: {
    id: '0',
    type: 'split',
    children: [],
    info: {
      name: '',
    },
  },
}

const reducer = createSlice({
  name: 'schemeMap',
  initialState,
  reducers: {
    addNode(
      state: SchemeMapState,
      action: PayloadAction<{ id: string; node: SchemeNode }>
    ) {
      const { id, node } = action.payload
      const newTree = addTreeNode(id, state.rootNode, node)
      if (newTree) {
        state.rootNode = newTree
      }
    },

    removeNode(
      state: SchemeMapState,
      action: PayloadAction<{ id: string; parentId: string }>
    ) {
      const { id, parentId } = action.payload
      const newTree = removeTreeNode(parentId, id, state.rootNode)

      if (newTree) {
        state.rootNode = newTree
      }
    },

    updateNode(
      state: SchemeMapState,
      action: PayloadAction<{
        id: string
        attr: string
        value: string | number
      }>
    ) {
      const { id, attr, value } = action.payload
      const newTree = updateTreeNode(id, attr, value, state.rootNode)

      if (newTree) {
        state.rootNode = newTree
      }
    },
  },
})

export const { addNode } = reducer.actions

export default reducer.reducer
