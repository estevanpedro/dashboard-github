import React, { useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'

import Navbar from '../containers/Navbar'
import Container from '../components/Container'

export const Route = (
  props: { component: JSX.Element } & RouteComponentProps
) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <Container>{props.component}</Container>
    </>
  )
}
