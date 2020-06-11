import React, { useContext } from 'react'
import Logo from '../../components/Logo'
import { NavbarContainer, LinksWrapper, NavLink, ThemeButton } from './elements'
import NavOptions from './NavOptions'
import ThemeContext from '../../contexts/ThemeContext'

import { MdInvertColors } from 'react-icons/md'

const Navbar = () => {
  const { toggle } = useContext(ThemeContext)

  return (
    <NavbarContainer>
      <Logo />
      <LinksWrapper>
        {NavOptions.map(option =>
          <NavLink to={option.to} key={option.id} >
            {option.title}
          </NavLink>)}
      </LinksWrapper>
      <ThemeButton onClick={toggle}>
        <MdInvertColors size='30' />
      </ThemeButton>
    </NavbarContainer>
  )
}

export default Navbar
