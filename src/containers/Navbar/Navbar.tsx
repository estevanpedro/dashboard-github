import React from 'react'

import { NavbarContainer, LinksWrapper, NavLink, ThemeButton } from './elements'
import NavOptions from './NavOptions'
import { useTheme } from '../../design/Theme/context/ThemeContext';

const isLogged = true

const Navbar = () => {
  const renderLink = (element: JSX.Element, needsLogin: boolean) => {
    if (needsLogin) return isLogged ? element : null

    return element
  }
  const themeToggle = useTheme();
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
      <ThemeButton  onClick={() => themeToggle.toggle()} >
          Theme
      </ThemeButton>
    </NavbarContainer>
  )
}

export default Navbar
