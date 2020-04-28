import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RouteComponentProps, navigate } from '@reach/router'
import ScrollContainer from 'react-indiana-drag-scroll'

import { TextLink, Button, FlexContainer, Title } from '../../components'

import { RootState } from '../../redux/rootReducer'
import { loadRoot } from '../../redux/ducks/schemeMap'
import { setLoading } from '../../redux/ducks/loading'

import { findTreeNode } from '../../utils/treeUtils'

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
  schemeId?: string
}

const SchemeMap = ({ schemeId }: Props & RouteComponentProps) => {
  const [schemeInfo, setSchemeInfo] = useState<SchemeInfo | null>(null)
  const [menuId, setMenuId] = useState('')
  const { secretToken } = useSelector((state: RootState) => state.auth)
  const { rootNode } = useSelector((state: RootState) => state.schemeMap)

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchSchemeDetails = async () => {
      const id = schemeId
      if (id) {
        try {
          dispatch(setLoading(true))
          const response = await Api.getSchemeDetails({
            secretToken,
            schemeId: id,
          })
          dispatch(setLoading(false))

          if (response.data.tree) {
            setSchemeInfo(response.data)
            dispatch(loadRoot({ root: response.data.tree }))
          }
        } catch (err) {
          dispatch(setLoading(false))
          console.error(err)
        }
      }
    }
    fetchSchemeDetails()
  }, [dispatch, schemeId, secretToken])

  const handleSave = async () => {
    if (schemeInfo) {
      const schemeCopy = {
        name: schemeInfo.name,
        fee: schemeInfo.fee,
        payout: schemeInfo.payout,
        visibility: schemeInfo.visibility,
        tree: rootNode,
      }

      if (schemeId) {
        try {
          dispatch(setLoading(true))
          await Api.updateScheme(secretToken, schemeId, schemeCopy)
          dispatch(setLoading(false))
        } catch (err) {
          dispatch(setLoading(false))
          console.error(err)
        }
      }
    }
  }

  const handleGoToSchemeDetails = () => {
    navigate(`/scheme-details/${schemeId}`)
  }

  const handleMenuInfo = (info: SchemeNodeType) => {
    setMenuId(info.id)
  }

  const NodeColumn = ({ rootNode, ignoreLeftArrow, last }: NodeColumnProps) => {
    return (
      <FlexContainer
        align='flex-start'
        justify='flex-start'
        position='relative'
      >
        <SchemeNode
          onClick={() => handleMenuInfo(rootNode)}
          nodeData={rootNode}
          ignoreLeftArrow={ignoreLeftArrow}
          last={last}
        />

        <FlexContainer direction='column'>
          {rootNode &&
            rootNode.children &&
            rootNode.children.map((node: SchemeNodeType, index) => (
              <NodeColumn
                key={node.id}
                rootNode={node}
                last={index === rootNode.children.length - 1}
                setNodeInfo={handleMenuInfo}
              />
            ))}
        </FlexContainer>
      </FlexContainer>
    )
  }

  return (
    <>
      <FlexContainer width='100%' justify='space-between' align='center'>
        <FlexContainer direction='column'>
          <TextLink onClick={handleGoToSchemeDetails}>
            ← Scheme Details
          </TextLink>
          <Title>{schemeInfo && schemeInfo.name}</Title>
        </FlexContainer>
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
              key={1}
              rootNode={rootNode}
              ignoreLeftArrow={true}
              last={true}
              setNodeInfo={handleMenuInfo}
            />
          </FlexContainer>
        </ScrollContainer>
        <NodeMenu
          nodeInfo={findTreeNode(menuId, rootNode, n => n) || null}
          updateMenuInfo={handleMenuInfo}
        />
      </SchemeContainer>
    </>
  )
}

export default SchemeMap
