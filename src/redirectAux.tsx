import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from '@reach/router'
import { RootState } from './redux/rootReducer'

const RedirectAux = () => {
  const { secretToken } = useSelector((state: RootState) => state.auth)

  if (secretToken) {
    return <Redirect from='/' to='/my-schemes' />
  }

  return <Redirect from='/' to='/login' />
}

export default RedirectAux
