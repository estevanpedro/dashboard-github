import React, { useContext } from 'react'

import { NavbarContainer, LinksWrapper, NavLink, ThemeButton } from './elements'
import NavOptions from './NavOptions'
import ThemeContext from '../../contexts/ThemeContext'

const isLogged = true

const Navbar = () => {
  const renderLink = (element: JSX.Element, needsLogin: boolean) => {
    if (needsLogin) return isLogged ? element : null

    return element
  }
  const { toggle } = useContext(ThemeContext)

  return (
    <NavbarContainer>
      <LinksWrapper>
        {NavOptions.map(option =>
          renderLink(
            <NavLink to={option.to} key={option.id}>
              {option.title}
            </NavLink>,
            option.needsLogin
          )
        )}
      </LinksWrapper>
      <ThemeButton onClick={toggle}>Theme</ThemeButton>
    </NavbarContainer>
  )
}

export default Navbar
