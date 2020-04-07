import React, { useEffect, FunctionComponent } from 'react'
import { RouteComponentProps } from '@reach/router'

import Navbar from '../containers/Navbar'
import Loading from '../containers/Loading'
import Container from '../components/Container'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/rootReducer'
interface Props extends RouteComponentProps {
  component: FunctionComponent
}

export const Route: FunctionComponent<Props> = ({
  component: Component,
  ...rest
}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Navbar />
      <Container>
        <Component {...rest} />
      </Container>
    </>
  )
}

export const LoggedRoute: FunctionComponent<Props> = ({
  component: Component,
  ...rest
}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { secretToken } = useSelector((state: RootState) => state.auth)

  if (secretToken) {
    return (
      <>
        <Navbar />
        <Container>
          <Loading />
          <Component {...rest} />
        </Container>
      </>
    )
  }

  return <></>
}
