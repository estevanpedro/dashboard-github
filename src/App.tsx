import React from 'react'
import { Router, Redirect } from '@reach/router'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import dotenv from 'dotenv'

import store, { persistor } from './redux/store'
import { Route } from './utils/routerUtils'
import ThemeService from './services/ThemeService'

import Details from './containers/Details'
import Repos from './containers/Repos'
import Users from './containers/Users'
import Username from './containers/Username'



dotenv.config()

// HIDE CONSOLES IN PRODUCTION
if (process.env.NODE_ENV === 'production') {
  console.log = function () { }
  console.warn = function () { }
  console.error = function () { }
}

const App = (): JSX.Element => (
  <>
    <Provider store={store}>
      <ThemeService>
        <PersistGate persistor={persistor} loading={null}>
          <Router id='router-container'>
            <Redirect
              from='/'
              to={'/username'}
            />
            <Route path='/username' component={Username} />
            <Route path='/details' component={Details} />
            <Route path='/repos' component={Repos} />
            <Route path='/users' component={Users} />
          </Router>
        </PersistGate>
      </ThemeService>
    </Provider>
  </>
)

export default App
