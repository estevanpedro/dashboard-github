import React from 'react'

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
  const hasChildren =
    nodeData && nodeData.children && nodeData.children.length > 0

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

      case 'root':
        return 'root'

      case 'scheme':
        return 'scheme'

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
        {nodeData.type === 'root' ? 'root' : nodeData.name}
      </Node>
      {hasChildren && <Arrow margin='left' />}
    </Container>
  )
}

export default SchemeNode
