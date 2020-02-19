import React from 'react'
import { Router } from '@reach/router'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import store, { persistor } from './redux/store'
import GlobalStyle from './design/GlobalStyle'
import { Route } from './utils/routerUtils'

import Container from './components/Container'
import Navbar from './containers/Navbar'

import Login from './containers/Login'
import MySchemes from './containers/MySchemes'
import Library from './containers/Library'
import Api from './containers/Api'
import Profile from './containers/Profile'

const App = (): JSX.Element => (
  <>
    <GlobalStyle />
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Navbar />
        <Container>
          <Router>
            <Route path='/login' component={<Login />} />
            <Route path='/my-schemes' component={<MySchemes />} />
            <Route path='/library' component={<Library />} />
            <Route path='/api' component={<Api />} />
            <Route path='/profile' component={<Profile />} />
            {/* <Route path="/" component={}/> */}
          </Router>
        </Container>
      </PersistGate>
    </Provider>
  </>
)

export default App
