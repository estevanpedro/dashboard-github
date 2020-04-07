import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface LoadingState {
  isLoading: boolean
}

const initialState: LoadingState = {
  isLoading: false,
}

const reducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading(state: LoadingState, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
  },
})

export const { setLoading } = reducer.actions

export default reducer.reducer
