import styled from 'styled-components'

import ds from '../../../design/designSystem'

import { Node, NodeProps } from './elements'

const OptionNode = styled(Node)<OptionNode>`
  width: 90px;
  height: 62px;
  font-size: ${ds.fontSize.verySmall};
  margin: 0 10px;
  img {
    height: 18px;
    margin-bottom: 4px;
  }
  background-color: ${ds.colors.white};
  color: ${props => (props.primary ? ds.colors.primary : ds.colors.secondary)};
  border: 2px solid
    ${props => (props.primary ? ds.colors.primary : ds.colors.secondary)};
  flex-direction: column;
`

interface OptionNode extends NodeProps {}

export default OptionNode
