import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RouteComponentProps, navigate } from '@reach/router'
import ScrollContainer from 'react-indiana-drag-scroll'
import { useTranslation } from 'react-i18next'

import { TextLink, Button, FlexContainer, Title, Text } from '../../components'

import { RootState } from '../../redux/rootReducer'
import { loadRoot } from '../../redux/ducks/schemeMap'
import { setLoading } from '../../redux/ducks/loading'

import { findTreeNode } from '../../utils/treeUtils'

import Api from '../../Api'
import { SchemeInfo } from '../../apiTypes'

import SchemeNode from './SchemeNode'
import NodeMenu from './NodeMenu'
import { SchemeContainer } from './elements'
import { SchemeNodeType } from './utils/nodeType'

interface NodeColumnProps {
  rootNode: SchemeNodeType
  setNodeInfo: (nodeInfo: SchemeNodeType) => void
  ignoreLeftArrow?: boolean
  last?: boolean
}

interface Props {
  schemeId?: string
}

interface SaveMessage {
  status: 'error' | 'success'
  message: string
}

const SchemeMap = ({ schemeId }: Props & RouteComponentProps) => {
  const { t } = useTranslation()
  const [schemeInfo, setSchemeInfo] = useState<SchemeInfo | null>(null)
  const [menuId, setMenuId] = useState('')
  const [saveMessage, setSaveMessage] = useState<SaveMessage>({
    status: 'success',
    message: '',
  })
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
        own_addresses: schemeInfo.own_addresses,
      }

      if (schemeId) {
        dispatch(setLoading(true))
        const response = await Api.updateScheme(
          secretToken,
          schemeId,
          schemeCopy
        )
        dispatch(setLoading(false))
        if (response.status) {
          setSaveMessage({
            status: 'success',
            message: t('schemeMap.SchemeSavedSuccessfully'),
          })
          return
        }
        setSaveMessage({
          status: 'error',
          message: response,
        })
      }
    }
  }

  const handleGoToSchemeDetails = () => {
    navigate(`/scheme-details/${schemeId}`)
  }

  const handleMenuInfo = (info: SchemeNodeType | null) => {
    if (!info) {
      setMenuId('')
      return
    }

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
            ← {t('schemeMap.SchemeDetails')}
          </TextLink>
          <Title>{schemeInfo && schemeInfo.name}</Title>
        </FlexContainer>
        <FlexContainer justify='space-between' align='center'>
          <Text
            color={saveMessage.status === 'success' ? 'confirm' : 'cancel'}
            margin='0 15px 0 0 '
          >
            {saveMessage.message}
          </Text>
          <Button onClick={handleSave}>
            {t('schemeMap.save')}
          </Button>
        </FlexContainer>
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
          ownAddresses={schemeInfo ? schemeInfo.own_addresses : []}
        />
      </SchemeContainer>
    </>
  )
}

export default SchemeMap
