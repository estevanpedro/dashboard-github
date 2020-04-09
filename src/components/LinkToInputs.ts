import styled from 'styled-components'
import { Link } from '@reach/router'

export default styled(Link)`
  margin: -20px 0 0 0;
  font-size: ${props => props.theme.fontSize.verySmall};
  color: ${props => props.theme.colors.primary};
  /* border-bottom: 2px solid ${props => props.theme.colors.primary}; */
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.secondary};
    border-color: ${props => props.theme.colors.secondary};
  }
  align-self: flex-end;
`

export const TextLink = styled.a<TextLinkProps>`
  font-size: ${props => props.theme.fontSize.regular};
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  cursor: pointer;
`

interface TextLinkProps {
    margin?: string
}
