import styled from 'styled-components'
import { Link } from '@reach/router'

export default styled(Link)`
  font-size: ${props => props.theme.fontSize.regular};
  color: ${props => props.theme.colors.primary};
  border-bottom: 2px solid ${props => props.theme.colors.primary};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.secondary};
    border-color: ${props => props.theme.colors.secondary};
  }
`

export const TextLink = styled.a<TextLinkProps>`
  margin: ${props => props.margin || '0'};
  font-size: ${props => props.theme.fontSize.regular};
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  cursor: pointer;
`

interface TextLinkProps {
  margin?: string
}
