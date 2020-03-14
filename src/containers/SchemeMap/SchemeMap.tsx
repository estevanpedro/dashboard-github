import React from 'react'
import { useSelector } from 'react-redux'

import Title from '../../components/Title'

import { RootState } from '../../redux/rootReducer'

import SchemeNode from './SchemeNode'
import { SchemeContainer } from './elements'
import { SchemeNodeType } from './SchemeNode/nodeType'

import styled from 'styled-components' // TEMP

const Row = styled.div`
  align-items: flex-start;
  display: flex;
  position: relative;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

// const mockData = {
//   name: 'Split 01',
// }

const NodeColumn = ({
  rootNode,
  ignoreLeftArrow,
  last,
}: {
  rootNode: SchemeNodeType
  ignoreLeftArrow?: boolean
  last?: boolean
}) => {
  return (
    <Row>
      <SchemeNode
        nodeData={rootNode}
        ignoreLeftArrow={ignoreLeftArrow}
        last={last}
      />

      <Column>
        {rootNode.children.map((node: SchemeNodeType, index) => (
          <NodeColumn
            rootNode={node}
            last={index === rootNode.children.length - 1}
          />
        ))}
      </Column>
    </Row>
  )
}

const SchemeMap = () => {
  const { rootNode } = useSelector((state: RootState) => state.schemeMap)

  return (
    <>
      <Title>SchemeMap</Title>
      <SchemeContainer>
        <NodeColumn rootNode={rootNode} ignoreLeftArrow={true} last={true} />
        {/* <SchemeNode nodeData={rootNode} /> */}
      </SchemeContainer>
    </>
  )
}

export default SchemeMap
