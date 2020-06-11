import { combineReducers } from '@reduxjs/toolkit'

import usernameReducer from './ducks/username'
import loadingReducer from './ducks/loading'

const rootReducer = combineReducers({
  username: usernameReducer,
  loading: loadingReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
