import React from 'react'
import { navigate } from '@reach/router'

import { NavbarContainer, LinksWrapper, NavLink } from './elements'
import NavOptions from './NavOptions'
const isLogged = true

const Navbar = () => {
  const renderLink = (element: JSX.Element, needsLogin: boolean) => {
    if (needsLogin) return isLogged ? element : null

    return element
  }

  return (
    <NavbarContainer>
      <LinksWrapper>
        {NavOptions.map(option =>
          renderLink(
            <NavLink to={option.to}>{option.title}</NavLink>,
            option.needsLogin
          )
        )}
      </LinksWrapper>
    </NavbarContainer>
  )
}

export default Navbar
