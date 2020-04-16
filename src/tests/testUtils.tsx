import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { render as rtlRender } from '@testing-library/react'

import store, { persistor } from '../redux/store'
import ThemeService from '../services/ThemeService'

export const render = (ui: ReactElement) => {
  return rtlRender(
    <Provider store={store}>
      <ThemeService>
        <PersistGate persistor={persistor} loading={null}>
          {ui}
        </PersistGate>
      </ThemeService>
    </Provider>
  )
}
