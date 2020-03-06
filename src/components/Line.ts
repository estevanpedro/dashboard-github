import styled from 'styled-components'
import ds from '../design/designSystem'

export default styled.div<LineProps>`
  border-bottom: 1px solid ${ds.colors.contrast};
  opacity: 0.1;
  margin: ${props => props.margin};
`

interface LineProps {
  margin?: string
}
