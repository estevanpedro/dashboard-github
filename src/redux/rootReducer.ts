import { combineReducers } from '@reduxjs/toolkit'

import authReducer from './ducks/auth'
import loadingReducer from './ducks/loading'
import userReducer from './ducks/user'
import schemeMapReducer from './ducks/schemeMap'

const rootReducer = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  user: userReducer,
  schemeMap: schemeMapReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
