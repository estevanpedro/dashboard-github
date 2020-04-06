import React, { FunctionComponent } from 'react'

import {
  Container,
  Node,
  RelativeContainer,
  VerticalArrow,
  Arrow,
} from './elements'
import { SchemeNodeType } from './utils/nodeType'

interface Props {
  nodeData: SchemeNodeType
  ignoreLeftArrow?: boolean
  last?: boolean
  onClick?: () => void
}

const SchemeNode = ({ nodeData, ignoreLeftArrow, last, onClick }: Props) => {
  const hasChildren = nodeData.children.length > 0

  const nodeClass = () => {
    switch (nodeData.type) {
      case 'timer':
      case 'notify':
      case 'send':
      case 'swap':
      case 'event':
        return 'tool'

      case 'address':
        return 'address'

      default:
        return
    }
  }

  return (
    <Container hasChildren={hasChildren}>
      {!ignoreLeftArrow && (
        <RelativeContainer>
          <Arrow margin='right' />
        </RelativeContainer>
      )}
      {!last && <VerticalArrow />}
      <Node primary onClick={onClick} className={nodeClass()}>
        {nodeData.info.name}
      </Node>
      {hasChildren && <Arrow margin='left' />}
    </Container>
  )
}

export default SchemeNode
