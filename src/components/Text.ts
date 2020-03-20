import styled from 'styled-components'
import ds from '../design/designSystem'
import { ThemeSet } from 'styled-theming'

export default styled.span<TextProps>`
  font-size: ${props =>
    props.size ? ds.fontSize[props.size] : ds.fontSize.regular};
  color: ${props => props.color || ds.colors.contrast};
  font-weight: ${props => props.weight || 'regular'};
`

interface TextProps {
  size?: 'small' | 'regular' | 'medium' | 'big' | 'title'
  weight?: 'bold' | 'normal' | 'italic'
  color?: string
}
