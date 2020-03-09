import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import uniqid from 'uniqid'

interface Split {
  id: string
  address: string
  share: number
}

export interface SplitState {
  splits: Split[]
}

const initialState: SplitState = {
  splits: [
    {
      id: '0',
      address: '',
      share: 100,
    },
  ],
}

const reducer = createSlice({
  name: 'split',
  initialState,
  reducers: {
    addSplit(state: SplitState) {
      state.splits = [
        ...state.splits,
        {
          id: uniqid(),
          address: '',
          share: 0,
        },
      ]
    },
    removeSplit(state: SplitState, action: PayloadAction<string>) {
      state.splits = state.splits.filter(split => split.id !== action.payload)
    },
    updateSplitAddress(
      state: SplitState,
      action: PayloadAction<{ id: string; address: string }>
    ) {
      state.splits = state.splits.map(split =>
        split.id === action.payload.id
          ? { ...split, address: action.payload.address }
          : split
      )
    },
    updateSplitShare(
      state: SplitState,
      action: PayloadAction<{ id: string; share: number }>
    ) {
      state.splits = state.splits.map(split =>
        split.id === action.payload.id
          ? { ...split, share: action.payload.share }
          : split
      )
    },
  },
})

export const {
  addSplit,
  removeSplit,
  updateSplitAddress,
  updateSplitShare,
} = reducer.actions

export default reducer.reducer
