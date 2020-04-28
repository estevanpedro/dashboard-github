import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import uniqid from 'uniqid'
import { SchemeNodeType } from '../../../containers/SchemeMap/SchemeNode/utils/nodeType'

export interface Split {
  name: string
  id: string
  address: string
  share: number
  children?: SchemeNodeType[]
}

export interface SplitState {
  name: string
  splitAddress: string
  splits: Split[]
}

const initialState: SplitState = {
  name: 'Split',
  splitAddress: '',
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
    updateSplitName(state: SplitState, action: PayloadAction<string>) {
      state.name = action.payload
    },
    updateSplitAddress(state: SplitState, action: PayloadAction<string>) {
      state.splitAddress = action.payload
    },
    updateAddressName(
      state: SplitState,
      action: PayloadAction<{ id: string; name: string }>
    ) {
      state.splits = state.splits.map(split =>
        split.id === action.payload.id
          ? { ...split, name: action.payload.name }
          : split
      )
    },
    updateAddressValue(
      state: SplitState,
      action: PayloadAction<{ id: string; address: string }>
    ) {
      state.splits = state.splits.map(split =>
        split.id === action.payload.id
          ? { ...split, address: action.payload.address }
          : split
      )
    },
    updateAddressShare(
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
  updateSplitName,
  updateSplitAddress,
  updateAddressName,
  updateAddressValue,
  updateAddressShare,
} = reducer.actions

export default reducer.reducer
