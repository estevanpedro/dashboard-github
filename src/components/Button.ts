import styled from 'styled-components'
import ds from '../design/designSystem'

export default styled.button<ButtonProps>`
  width: 217px;
  height: 50px;
  border-radius: 4px;
  background-color: ${props =>
    !props.isSecondary ? ds.colors.primary : ds.colors.secondary};
  outline: none;
  color: ${ds.colors.background};
  font-size: ${ds.fontSize.regular};
  font-weight: bold;
  margin: ${props => props.margin || 0};
  cursor: pointer;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.25);
  &:active {
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
  }
`

interface ButtonProps {
  isSecondary?: boolean
  margin?: string
  align?: 'stretch' | 'center' | 'flex-start' | 'flex-end'
}
