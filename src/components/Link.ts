import styled from 'styled-components'
import { Link } from '@reach/router'

import ds from '../design/designSystem'

export default styled(Link)`
  font-size: ${ds.fontSize.regular};
  color: ${ds.colors.primary};
  border-bottom: 2px solid ${ds.colors.primary};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: ${ds.colors.secondary};
    border-color: ${ds.colors.secondary};
  }
`
