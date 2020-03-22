import styled from 'styled-components'

import ds from '../design/designSystem'

export default styled.span<TextProps>`
  font-size: ${props =>
    props.size ? ds.fontSize[props.size] : ds.fontSize.regular};
  color: ${props =>
    props.color ? ds.colors[props.color] : ds.colors.contrast};
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
}
