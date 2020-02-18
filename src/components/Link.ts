import styled from 'styled-components'
import ds from '../design/designSystem'

export default styled.a`
  color: ${ds.colors.primary};
  &:hover {
    color: ${ds.colors.secondary};
  }
`
