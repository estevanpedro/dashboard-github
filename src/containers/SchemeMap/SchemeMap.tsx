import React, { useState, useEffect } from 'react'
import uniqid from 'uniqid'
import { useSelector, useDispatch } from 'react-redux'
import { RouteComponentProps, NavigateOptions } from '@reach/router'
import ScrollContainer from 'react-indiana-drag-scroll'

import Button from '../../components/Button'
import FlexContainer from '../../components/FlexContainer'
import Title from '../../components/Title'

import { RootState } from '../../redux/rootReducer'
import { loadRoot } from '../../redux/ducks/schemeMap'
import { setLoading } from '../../redux/ducks/loading'

import Api from '../../Api'
import { SchemeInfo } from '../../apiTypes'

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
  schemeId?: string
}

const SchemeMap = ({ location, schemeId }: Props & RouteComponentProps) => {
  const { secretToken } = useSelector((state: RootState) => state.auth)
  const [schemeInfo, setSchemeInfo] = useState<SchemeInfo | null>(null)
  const { rootNode } = useSelector((state: RootState) => state.schemeMap)
  const [menuInfo, setMenuInfo] = useState<SchemeNodeType | null>(null)

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchScheme = async () => {
      const id = schemeId
      if (id) {
        dispatch(setLoading(true))
        const response = await Api.splitDetails({ secretToken, schemeId: id })
        dispatch(setLoading(false))
        setSchemeInfo(response.data)
        dispatch(loadRoot({ root: response.data.tree }))
      }
    }
    fetchScheme()
  }, [])

  const handleSave = async () => {
    if (schemeInfo) {
      const schemeCopy = {
        name: schemeInfo.name,
        fee: schemeInfo.fee,
        payout: schemeInfo.payout,
        visibility: schemeInfo.visibility,
        tree: rootNode,
      }

      console.log(schemeCopy)

      if (schemeId) {
        await Api.updateScheme(secretToken, schemeId, schemeCopy)
      }
    }
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
          {rootNode &&
            rootNode.children &&
            rootNode.children.map((node: SchemeNodeType, index) => (
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
        <Title>{schemeInfo && schemeInfo.name}</Title>
        <Button onClick={handleSave} margin='0 0 20px 0'>
          Save
        </Button>
      </FlexContainer>

      <SchemeContainer>
        <ScrollContainer style={{ height: '100%', width: '100%' }}>
          <FlexContainer
            width='500%'
            height='500%'
            justify='flex-start'
            position='relative'
            top='10%'
            left='5%'
          >
            <NodeColumn
              rootNode={rootNode}
              ignoreLeftArrow={true}
              last={true}
              setNodeInfo={setMenuInfo}
            />
          </FlexContainer>
        </ScrollContainer>
        <NodeMenu nodeInfo={menuInfo} updateMenuInfo={setMenuInfo} />
      </SchemeContainer>
    </>
  )
}

export default SchemeMap
