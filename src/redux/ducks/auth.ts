import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  secret_token: string
}

const initialState: AuthState = {
  secret_token: '',
}

const reducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeSecretToken(state: AuthState, action: PayloadAction<string>) {
      state.secret_token = action.payload
    },
  },
})

export const { changeSecretToken } = reducer.actions

export default reducer.reducer
