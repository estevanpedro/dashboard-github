import React, { useEffect, FunctionComponent, Component } from 'react'
import { RouteComponentProps } from '@reach/router'

import Navbar from '../containers/Navbar'
import Container from '../components/Container'

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
