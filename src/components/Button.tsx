import styled from 'styled-components'
import ds from '../style/designSystem'

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
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &:active {
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
  }
`

interface ButtonProps {
  isSecondary?: boolean
}
