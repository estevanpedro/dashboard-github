import styled from 'styled-components'

import ds from '../../design/designSystem'

export const SchemeContainer = styled.div`
  height: 60%;
  padding: ${props => props.theme.spacing.lateral};
  border: 1px solid ${props => props.theme.colors.secondaryBg};
  border-radius: 4px;
  overflow: scroll;
`
