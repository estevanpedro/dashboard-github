import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UsernameState {
  username: string
}

const initialState: UsernameState = {
  username: '',
}

const reducer = createSlice({
  name: 'username',
  initialState,
  reducers: {
    setUsername(state: UsernameState, action: PayloadAction<string>) {
      state.username = action.payload
    },
  },
})

export const { setUsername } = reducer.actions

export default reducer.reducer
