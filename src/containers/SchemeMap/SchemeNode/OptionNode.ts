import styled from 'styled-components'

import ds from '../../../design/designSystem'

import { Node } from './elements'

const OptionNode = styled(Node)`
  width: 90px;
  height: 62px;
  font-size: ${ds.fontSize.verySmall};
  margin: 0 10px;
  img {
    height: 18px;
    margin-bottom: 4px;
  }
  background-color: transparent;
  color: ${ds.colors.primary};
  border: 2px solid ${ds.colors.primary};
  flex-direction: column;
`

export default OptionNode
