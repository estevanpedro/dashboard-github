import styled from 'styled-components'

import { Node, NodeProps } from './elements'

const OptionNode = styled(Node) <OptionNode>`
  width: 90px;
  height: 62px;
  font-size: ${props => props.theme.fontSize.verySmall};
  margin: 0 10px;
  img {
    height: 18px;
    margin-bottom: 4px;
  }
  background-color: ${props => props.theme.colors.white};
  color: ${props =>
    props.primary ? props.theme.colors.primary : props.theme.colors.secondary};
  border: 2px solid
    ${props =>
    props.primary
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  flex-direction: column;
`

interface OptionNode extends NodeProps { }

export default OptionNode
