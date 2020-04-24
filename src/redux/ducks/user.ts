import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  user_id: string
  username: string
  email: string
  timezone: string
  user_type: string
}

const initialState: UserState = {
  user_id: '',
  username: '',
  email: '',
  timezone: '',
  user_type: '',
}

const reducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserInfo(state: UserState, action: PayloadAction<UserState>) {
      state.user_id = action.payload.username
      state.username = action.payload.username
      state.email = action.payload.email
      state.timezone = action.payload.timezone
      state.user_type = action.payload.user_type
    },
  },
})

export const { updateUserInfo } = reducer.actions

export default reducer.reducer
