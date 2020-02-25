import { combineReducers } from '@reduxjs/toolkit'

import authReducer from './ducks/auth'
import userReducer from './ducks/user'

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
