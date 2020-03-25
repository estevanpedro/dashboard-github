import styled from 'styled-components'

export default styled.span<TextProps>`
  margin: ${props => props.margin};
  font-size: ${props =>
    props.size
      ? props.theme.fontSize[props.size]
      : props.theme.fontSize.regular};
  color: ${props =>
    props.color
      ? props.theme.colors[props.color]
      : props.theme.colors.contrast};
  font-weight: ${props => props.weight || 'regular'};
  cursor: ${props => (props.curosorPointer ? 'pointer' : 'auto')};
`

interface TextProps {
  size?: 'small' | 'regular' | 'medium' | 'big' | 'title'
  color?:
    | 'primary'
    | 'secondary'
    | 'background'
    | 'secondaryBg'
    | 'contrast'
    | 'confirm'
    | 'cancel'
    | 'white'
    | 'line'
    | 'header'
    | 'contrastOpacity'
  curosorPointer?: boolean
  weight?: 'bold' | 'normal' | 'italic'
  margin?: string
}
