import styled from 'styled-components'

export default styled.button<ButtonProps>`
  width: 217px;
  height: 50px;
  border-radius: 4px;
  background-color: ${props =>
    !props.isSecondary
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  outline: none;
  color: ${props =>
    props.isSecondary
      ? props.theme.colors.contrast
      : props.theme.colors.background};
  font-size: ${props => props.theme.fontSize.regular};
  font-weight: bold;
  margin: ${props => props.margin || 0};
  cursor: pointer;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.25);
  &:active {
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
  }
  align-self: ${props => props.align || 'auto'};
`

interface ButtonProps {
  isSecondary?: boolean
  margin?: string
  align?: 'stretch' | 'center' | 'flex-start' | 'flex-end'
}
