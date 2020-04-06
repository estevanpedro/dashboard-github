import React from 'react'
import { Router } from '@reach/router'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import dotenv from 'dotenv'

import store, { persistor } from './redux/store'
import { Route, LoggedRoute } from './utils/routerUtils'

import Login from './containers/Login'
import SignUp from './containers/SignUp'
import MySchemes from './containers/MySchemes'
import Library from './containers/Library/Library'
import Api from './containers/Api'
import Profile from './containers/Profile'
import SchemeMap from './containers/SchemeMap'
import SplitDetails from './containers/SplitDetails'
import ThemeService from './services/ThemeService'

dotenv.config()

const App = (): JSX.Element => (
  <>
    <Provider store={store}>
      <ThemeService>
        <PersistGate persistor={persistor} loading={null}>
          <Router id='router-container'>
            <Route path='/login' component={Login} />
            <Route path='/sign-up' component={SignUp} />
            <LoggedRoute path='/my-schemes' component={MySchemes} />
            <Route path='/library' component={Library} />
            <Route path='/api' component={Api} />
            <LoggedRoute path='/profile' component={Profile} />
            <LoggedRoute path='/scheme/:schemeId' component={SchemeMap} />
            <Route path='/split-details/:schemeId' component={SplitDetails} />
            {/* <Route path="/" component={}/> */}
          </Router>
        </PersistGate>
      </ThemeService>
    </Provider>
  </>
)

export default App
