import styled from 'styled-components'
import ds from '../../../design/designSystem'

export const Option = styled.button<OptionProps>`
  width: 150px;
  height: 25px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background-color: ${props =>
    props.color ? ds.colors.contrast : ds.colors.primary};
  outline: none;
  color: ${ds.colors.background};
  font-size: ${ds.fontSize.small};
  cursor: pointer;
  margin: 0 2px 0 2px;
`

interface OptionProps {
  isFocused?: boolean
  color?: string
}
