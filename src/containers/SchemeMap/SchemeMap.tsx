import React from 'react'
import { useSelector } from 'react-redux'
import { RouteComponentProps, NavigateOptions } from '@reach/router'

import Button from '../../components/Button'
import FlexContainer from '../../components/FlexContainer'
import Title from '../../components/Title'

import { RootState } from '../../redux/rootReducer'

import SchemeNode from './SchemeNode'
import { SchemeContainer } from './elements'
import { SchemeNodeType } from './SchemeNode/utils/nodeType'
import { locationsAreEqual } from 'history'

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
  location?: NavigateOptions<{ schemeName: string }>
}

const SchemeMap = ({ location }: Props & RouteComponentProps) => {
  const { rootNode } = useSelector((state: RootState) => state.schemeMap)

  const handleSave = () => {
    // TODO: API INTEGRATION
    console.log(rootNode)
  }

  return (
    <>
      <FlexContainer width='100%' justify='space-between'>
        <Title>{location && location.state && location.state.schemeName}</Title>
        <Button onClick={handleSave}>Save</Button>
      </FlexContainer>

      <SchemeContainer>
        <NodeColumn rootNode={rootNode} ignoreLeftArrow={true} last={true} />
      </SchemeContainer>
    </>
  )
}

export default SchemeMap
