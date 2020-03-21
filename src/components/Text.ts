import styled from 'styled-components'

export default styled.span<TextProps>`
  font-size: ${props =>
    props.size
      ? props.theme.fontSize[props.size]
      : props.theme.fontSize.regular};
  color: ${props => props.color || props.theme.colors.contrast};
  font-weight: ${props => props.weight || 'regular'};
`

interface TextProps {
  size?: 'small' | 'regular' | 'medium' | 'big' | 'title'
  weight?: 'bold' | 'normal' | 'italic'
  color?: string
}
