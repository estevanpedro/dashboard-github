import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TimerState {
  name: string
  hours: number
  minutes: number
  seconds: number
}

const initialState: TimerState = {
  name: 'Timer',
  hours: 0,
  minutes: 0,
  seconds: 0,
}

const reducer = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    updateTimerName(state: TimerState, action: PayloadAction<string>) {
      state.name = action.payload
    },
    updateHoursValue(state: TimerState, action: PayloadAction<number>) {
      state.hours = action.payload
    },
    updateMinutesValue(state: TimerState, action: PayloadAction<number>) {
      state.minutes = action.payload
    },
    updateSecondsValue(state: TimerState, action: PayloadAction<number>) {
      state.seconds = action.payload
    },
  },
})

export const {
  updateTimerName,
  updateHoursValue,
  updateMinutesValue,
  updateSecondsValue,
} = reducer.actions

export default reducer.reducer
