import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import uniqid from 'uniqid'
import { string } from 'prop-types'

interface Split {
  name: string
  id: string
  address: string
  share: number
}

export interface SplitState {
  name: string
  splits: Split[]
}

const initialState: SplitState = {
  name: 'Split',
  splits: [
    {
      name: 'Address 1',
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
          name: `Address ${state.splits.length + 1}`,
          id: uniqid(),
          address: '',
          share: 0,
        },
      ]
    },
    removeSplit(state: SplitState, action: PayloadAction<string>) {
      state.splits = state.splits.filter(split => split.id !== action.payload)
    },
    updateName(state: SplitState, action: PayloadAction<string>) {
      state.name = action.payload
    },
    updateSplitName(
      state: SplitState,
      action: PayloadAction<{ id: string; name: string }>
    ) {
      state.splits = state.splits.map(split =>
        split.id === action.payload.id
          ? { ...split, name: action.payload.name }
          : split
      )
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
  updateName,
  updateSplitName,
  updateSplitAddress,
  updateSplitShare,
} = reducer.actions

export default reducer.reducer
