import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import uniqid from 'uniqid'

export interface SendState {
  name: string
  addresses: {
    id: string
    name: string
    address: string
    value: number
    percentage: number
  }[]
}

const initialState: SendState = {
  name: 'Send',
  addresses: [
    {
      id: '0',
      name: 'Address 1',
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
    updateSendName(state: SendState, action: PayloadAction<string>) {
      state.name = action.payload
    },
    addSend(state: SendState) {
      state.addresses = [
        ...state.addresses,
        {
          id: uniqid(),
          name: `Address ${state.addresses.length}`,
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
    updateSendAddressName(
      state: SendState,
      action: PayloadAction<{ id: string; name: string }>
    ) {
      state.addresses = state.addresses.map(address =>
        address.id === action.payload.id
          ? { ...address, name: action.payload.name }
          : address
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
  updateSendName,
  addSend,
  removeSend,
  updateSendAddressName,
  updateSendAddress,
  updateSendValue,
  updateSendPercentage,
} = reducer.actions

export default reducer.reducer
