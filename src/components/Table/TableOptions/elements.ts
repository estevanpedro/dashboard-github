import styled from 'styled-components'

export const Option = styled.button<OptionProps>`
  width: 150px;
  height: 25px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background-color: ${props =>
    props.color ? props.theme.colors.contrast : props.theme.colors.primary};
  outline: none;
  color: ${props => props.theme.colors.background};
  font-size: ${props => props.theme.fontSize.small};
  cursor: pointer;
  margin: 0 2px 0 2px;
`

interface OptionProps {
  isFocused?: boolean
  color?: string
}
