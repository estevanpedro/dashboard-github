import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RouteComponentProps } from '@reach/router'

import FlexContainer from '../../components/FlexContainer'
import Title from '../../components/Title'

import { RootState } from '../../redux/rootReducer'

import SchemeNode from './SchemeNode'
import { SchemeContainer } from './elements'
import { SchemeNodeType } from './SchemeNode/utils/nodeType'

interface NodeColumnProps {
  rootNode: SchemeNodeType
  ignoreLeftArrow?: boolean
  last?: boolean
}

const NodeColumn = ({ rootNode, ignoreLeftArrow, last }: NodeColumnProps) => {
  return (
    <FlexContainer align='flex-start' justify='flex-start' position='relative'>
      <SchemeNode
        nodeData={rootNode}
        ignoreLeftArrow={ignoreLeftArrow}
        last={last}
      />

      <FlexContainer direction='column'>
        {rootNode.children.map((node: SchemeNodeType, index) => (
          <NodeColumn
            rootNode={node}
            last={index === rootNode.children.length - 1}
          />
        ))}
      </FlexContainer>
    </FlexContainer>
  )
}

interface Props {
  schemeId?: string
}

const SchemeMap = ({ schemeId }: Props & RouteComponentProps) => {
  const { rootNode } = useSelector((state: RootState) => state.schemeMap)

  return (
    <>
      <Title>SchemeMap</Title>
      <SchemeContainer>
        <NodeColumn rootNode={rootNode} ignoreLeftArrow={true} last={true} />
      </SchemeContainer>
    </>
  )
}

export default SchemeMap
