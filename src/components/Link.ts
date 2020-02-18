import styled from 'styled-components'
import ds from '../design/designSystem'

export default styled.a`
  font-size: ${ds.fontSize.regular};
  color: ${ds.colors.primary};
  border-bottom: 2px solid ${ds.colors.primary};
  cursor: pointer;
  &:hover {
    color: ${ds.colors.secondary};
    border-color: ${ds.colors.secondary};
  }
`
