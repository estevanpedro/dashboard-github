import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RouteComponentProps, NavigateOptions } from '@reach/router'

import Button from '../../components/Button'
import FlexContainer from '../../components/FlexContainer'
import Title from '../../components/Title'

import { RootState } from '../../redux/rootReducer'

import SchemeNode from './SchemeNode'
import NodeMenu from './NodeMenu'
import { SchemeContainer } from './elements'
import { SchemeNodeType } from './SchemeNode/utils/nodeType'

interface NodeColumnProps {
  rootNode: SchemeNodeType
  setNodeInfo: (nodeInfo: SchemeNodeType) => void
  ignoreLeftArrow?: boolean
  last?: boolean
}

interface Props {
  location?: NavigateOptions<{ schemeName: string }>
}

const SchemeMap = ({ location }: Props & RouteComponentProps) => {
  const { rootNode } = useSelector((state: RootState) => state.schemeMap)
  const [menuInfo, setMenuInfo] = useState<SchemeNodeType | null>(null)

  const handleSave = () => {
    // TODO: API INTEGRATION
    console.log(rootNode)
  }

  const NodeColumn = ({ rootNode, ignoreLeftArrow, last }: NodeColumnProps) => {
    return (
      <FlexContainer
        align='flex-start'
        justify='flex-start'
        position='relative'
      >
        <SchemeNode
          onClick={() => setMenuInfo(rootNode)}
          nodeData={rootNode}
          ignoreLeftArrow={ignoreLeftArrow}
          last={last}
        />

        <FlexContainer direction='column'>
          {rootNode.children.map((node: SchemeNodeType, index) => (
            <NodeColumn
              rootNode={node}
              last={index === rootNode.children.length - 1}
              setNodeInfo={setMenuInfo}
            />
          ))}
        </FlexContainer>
      </FlexContainer>
    )
  }

  return (
    <>
      <FlexContainer width='100%' justify='space-between'>
        <Title>{location && location.state && location.state.schemeName}</Title>
        <Button onClick={handleSave}>Save</Button>
      </FlexContainer>

      <SchemeContainer>
        <FlexContainer
          width='82%'
          height='100%'
          overflow='scroll'
          justify='flex-start'
        >
          <NodeColumn
            rootNode={rootNode}
            ignoreLeftArrow={true}
            last={true}
            setNodeInfo={setMenuInfo}
          />
        </FlexContainer>
        <NodeMenu nodeInfo={menuInfo} updateMenuInfo={setMenuInfo} />
      </SchemeContainer>
    </>
  )
}

export default SchemeMap
