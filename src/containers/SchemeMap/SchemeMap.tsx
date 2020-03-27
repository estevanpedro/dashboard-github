import React from 'react'
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
  location?: any
}

const SchemeMap = ({ location }: Props & RouteComponentProps) => {
  const { rootNode } = useSelector((state: RootState) => state.schemeMap)
  console.log('Informations from MySchemes modal to create new schemes: ', location.state)
  console.log('schemeName: ', location.state.schemeName)
  console.log('isPublic: ', location.state.isPublic)
  return (
    <>
      <Title>{location.state.schemeName}</Title>
      <SchemeContainer>
        <NodeColumn rootNode={rootNode} ignoreLeftArrow={true} last={true} />
      </SchemeContainer>
    </>
  )
}

export default SchemeMap
