import React, { useContext, useState } from 'react'
import Logo from '../../components/Logo'
import { NavbarContainer, LinksWrapper, NavLink, ThemeButton } from './elements'
import NavOptions from './NavOptions'
import ThemeContext from '../../contexts/ThemeContext'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/rootReducer'
import { changeSecretToken } from '../../redux/ducks/auth'
import { MdInvertColors } from 'react-icons/md'

const Navbar = () => {
  const { secretToken } = useSelector((state: RootState) => state.auth)

  const dispatch = useDispatch()

  const [isLogged, setIsLogged] = useState(secretToken ? true : false)

  const renderLink = (element: any, needsLogin: boolean) => {

    if (isLogged && element.key === '5') return null

    if (needsLogin) return isLogged ? element : null

    return element
  }
  const { toggle } = useContext(ThemeContext)

  function Logout(id: number) {
    if (id === 4) {
      dispatch(changeSecretToken(''))
    }
  }

  return (
    <NavbarContainer>
      <Logo />
      <LinksWrapper>
        {NavOptions.map(option =>
          renderLink(
            <NavLink to={option.to} key={option.id} onClick={() => { Logout(option.id) }}>
              {option.title}

            </NavLink>,
            option.needsLogin
          )
        )}
      </LinksWrapper>
      <ThemeButton onClick={toggle}><MdInvertColors size='30' /></ThemeButton>
    </NavbarContainer>
  )
}

export default Navbar
