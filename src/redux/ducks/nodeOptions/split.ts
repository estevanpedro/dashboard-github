import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Split {
  id: number
  address: string
  share: number
}

export interface SplitState {
  splits: Split[]
}

const initialState: SplitState = {
  splits: [
    {
      id: 0,
      address: '',
      share: 100,
    },
  ],
}

const reducer = createSlice({
  name: 'split',
  initialState,
  reducers: {
    addSplit(state: SplitState, action: PayloadAction<Split>) {
      state.splits = [...state.splits, action.payload]
    },
    removeSplit(state: SplitState, action: PayloadAction<number>) {
      state.splits = state.splits.filter(split => split.id !== action.payload)
    },
  },
})

export const { addSplit, removeSplit } = reducer.actions

export default reducer.reducer
