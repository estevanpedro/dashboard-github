import { combineReducers } from '@reduxjs/toolkit'

import authReducer from './ducks/auth'
import userReducer from './ducks/user'
import schemeMapReducer from './ducks/schemeMap'

// Node Options
import notifyReducer from './ducks/nodeOptions/notify'
import sendReducer from './ducks/nodeOptions/send'
import splitReducer from './ducks/nodeOptions/split'
import timerReducer from './ducks/nodeOptions/timer'

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  notify: notifyReducer,
  split: splitReducer,
  timer: timerReducer,
  send: sendReducer,
  schemeMap: schemeMapReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
