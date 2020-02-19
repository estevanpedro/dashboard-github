import styled from 'styled-components'
import { Link } from '@reach/router'

import ds from '../../design/designSystem'

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 60px;
  padding: 0 60px;
  position: fixed;
  background-color: ${ds.colors.contrast};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
`

export const LinksWrapper = styled.span`
  display: flex;
  justify-content: space-between;
`

export const NavLink = styled(Link)`
  margin-left: 35px;
  color: ${ds.colors.background};
  font-size: ${ds.fontSize.small};
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s ease color;
  &:hover {
    color: ${ds.colors.primary};
  }
`
