import React from 'react'
import { Router } from '@reach/router'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import dotenv from 'dotenv'

import store, { persistor } from './redux/store'
import GlobalStyle from './design/GlobalStyle'
import { Route } from './utils/routerUtils'

import Login from './containers/Login'
import SignUp from './containers/SignUp'
import MySchemes from './containers/MySchemes'
import Library from './containers/Library'
import Api from './containers/Api'
import Profile from './containers/Profile'
import SchemeMap from './containers/SchemeMap'

dotenv.config()

const App = (): JSX.Element => (
  <>
    <GlobalStyle />
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Router>
          <Route path='/login' component={<Login />} />
          <Route path='/sign-up' component={<SignUp />} />
          <Route path='/my-schemes' component={<MySchemes />} />
          <Route path='/library' component={<Library />} />
          <Route path='/api' component={<Api />} />
          <Route path='/profile' component={<Profile />} />
          <Route path='/scheme' component={<SchemeMap />} />
          {/* <Route path="/" component={}/> */}
        </Router>
      </PersistGate>
    </Provider>
  </>
)

export default App
