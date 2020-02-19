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

const App = (): JSX.Element => (
  <>
    <GlobalStyle />
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Navbar />
        <Container>
          <Router>
            <Route path='/login' component={<Login />} />
            {/* <Route path="/" component={}/> */}
          </Router>
        </Container>
      </PersistGate>
    </Provider>
  </>
)

export default App
