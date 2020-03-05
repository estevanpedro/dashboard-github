import { combineReducers } from '@reduxjs/toolkit'

import authReducer from './ducks/auth'
import userReducer from './ducks/user'

// Node Options
import notifyReducer from './ducks/nodeOptions/notify'
import splitReducer from './ducks/nodeOptions/split'
import timerReducer from './ducks/nodeOptions/timer'

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  notify: notifyReducer,
  split: splitReducer,
  timer: timerReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
