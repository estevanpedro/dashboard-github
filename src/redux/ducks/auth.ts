import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  secretToken: string
  userId: string
}

const initialState: AuthState = {
  secretToken: '',
  userId: '',
}

const reducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeSecretToken(state: AuthState, action: PayloadAction<string>) {
      state.secretToken = action.payload
    },
    setUserId(state: AuthState, action: PayloadAction<string>) {
      state.userId = action.payload
    },
  },
})

export const { changeSecretToken, setUserId } = reducer.actions

export default reducer.reducer
