import React from 'react'
import { navigate } from '@reach/router'

import { NavbarContainer, LinksWrapper, Link } from './elements'
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
            <Link onClick={() => navigate(option.to)}>{option.title}</Link>,
            option.needsLogin
          )
        )}
      </LinksWrapper>
    </NavbarContainer>
  )
}

export default Navbar
