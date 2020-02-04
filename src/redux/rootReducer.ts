import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  // reducers
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
