import styled from 'styled-components'
import ds from '../design/designSystem'

export default styled.div<LineProps>`
  border-bottom: 2px solid ${props => props.theme.colors.contrast};
  opacity: 0.6;
  margin: ${props => props.margin || '20px 0'};
`

interface LineProps {
  margin?: string
}
