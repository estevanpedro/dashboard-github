import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import uniqid from 'uniqid'

export interface SendState {
  addresses: {
    id: string
    address: string
    value: number
    percentage: number
  }[]
}

const initialState: SendState = {
  addresses: [
    {
      id: '0',
      address: '',
      value: 0,
      percentage: 0,
    },
  ],
}

const reducer = createSlice({
  name: 'send',
  initialState,
  reducers: {
    addSend(state: SendState) {
      state.addresses = [
        ...state.addresses,
        {
          id: uniqid(),
          address: '',
          value: 0,
          percentage: 0,
        },
      ]
    },
    removeSend(state: SendState, action: PayloadAction<string>) {
      state.addresses = state.addresses.filter(
        address => address.id !== action.payload
      )
    },
    updateSendAddress(
      state: SendState,
      action: PayloadAction<{ id: string; address: string }>
    ) {
      state.addresses = state.addresses.map(address =>
        address.id === action.payload.id
          ? { ...address, address: action.payload.address }
          : address
      )
    },
    updateSendValue(
      state: SendState,
      action: PayloadAction<{ id: string; value: number }>
    ) {
      state.addresses = state.addresses.map(address =>
        address.id === action.payload.id
          ? { ...address, value: action.payload.value }
          : address
      )
    },
    updateSendPercentage(
      state: SendState,
      action: PayloadAction<{ id: string; percentage: number }>
    ) {
      state.addresses = state.addresses.map(address =>
        address.id === action.payload.id
          ? { ...address, percentage: action.payload.percentage }
          : address
      )
    },
  },
})

export const {
  addSend,
  removeSend,
  updateSendAddress,
  updateSendValue,
  updateSendPercentage,
} = reducer.actions

export default reducer.reducer
