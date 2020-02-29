import styled from 'styled-components'

import ds from '../design/designSystem'

export default styled.span<TextProps>`
  font-size: ${props =>
    props.size ? ds.fontSize[props.size] : ds.fontSize.regular};
  color: ${ds.colors.contrast}
`

interface TextProps {
  size?: 'small' | 'regular' | 'medium' | 'big' | 'title'
}
