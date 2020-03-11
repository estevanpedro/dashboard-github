import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { addTreeNode } from '../../utils/treeUtils'

export type NodeType = 'split' | 'timer' | 'notify' | 'send' | 'swap' | 'event'

export declare type SchemeNode = {
  id: string
  type: NodeType
  children: SchemeNode[]
  info: {}
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
      const rootAux = addTreeNode(id, state.rootNode, node)
      console.log(rootAux)
      if (rootAux) {
        state.rootNode = rootAux
      }
    },
  },
})

export const { addNode } = reducer.actions

export default reducer.reducer
