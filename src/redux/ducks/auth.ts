import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  secretToken: string
}

const initialState: AuthState = {
  secretToken: '',
}

const reducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeSecretToken(state: AuthState, action: PayloadAction<string>) {
      state.secretToken = action.payload
    },
  },
})

export const { changeSecretToken } = reducer.actions

export default reducer.reducer
