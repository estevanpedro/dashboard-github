import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  username: string
  email: string
  timezone: string
}

const initialState: UserState = {
  username: '',
  email: '',
  timezone: '',
}

const reducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserInfo(state: UserState, action: PayloadAction<UserState>) {
      state.username = action.payload.username
      state.email = action.payload.email
      state.timezone = action.payload.timezone
    },
  },
})

export const { updateUserInfo } = reducer.actions

export default reducer.reducer
