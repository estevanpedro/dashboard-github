import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TimerState {
  name: string
  hours: number
  seconds: number
}

const initialState: TimerState = {
  name: '',
  hours: 0,
  seconds: 0,
}

const reducer = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    updateNameValue(state: TimerState, action: PayloadAction<string>) {
      state.name = action.payload
    },
    updateHoursValue(state: TimerState, action: PayloadAction<number>) {
      state.hours = action.payload
    },
    updateSecondsValue(state: TimerState, action: PayloadAction<number>) {
      state.seconds = action.payload
    },
  },
})

export const {
  updateNameValue,
  updateHoursValue,
  updateSecondsValue,
} = reducer.actions

export default reducer.reducer
