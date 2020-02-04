import React from 'react'
import { Router } from '@reach/router'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import store, { persistor } from './redux/store'
import GlobalStyle from './style/GlobalStyle'
import { Route } from './utils/routerUtils'

const App = (): JSX.Element => (
  <>
    <GlobalStyle />
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Router>
          {/* <Route path="/" component={}/> */}
          {/* <Route path="/" component={}/> */}
        </Router>
      </PersistGate>
    </Provider>
  </>
)

export default App
