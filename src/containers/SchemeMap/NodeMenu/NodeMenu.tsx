import React, { useState, useEffect } from 'react'

import {
  FlexContainer,
  Text,
  SubTitle,
  FieldTitle,
  Line,
  TextLink,
} from '../../../components'

import { SchemeNodeType } from '../SchemeNode/utils/nodeType'

import { MenuContainer } from './elements'
import MenuOptions from './MenuOptions'

interface Props {
  nodeInfo: SchemeNodeType | null
  updateMenuInfo: (data: SchemeNodeType) => void
}

const NodeMenu = ({ nodeInfo, updateMenuInfo }: Props) => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false)

  useEffect(() => {
    setIsOptionsVisible(false)
  }, [nodeInfo])

  const renderMenu = () => {
    if (nodeInfo) {
      const { info, children } = nodeInfo
      if (isOptionsVisible) {
        return (
          <MenuOptions
            data={nodeInfo}
            returnToInfo={() => setIsOptionsVisible(false)}
          />
        )
      }

      return (
        <FlexContainer
          height='100%'
          width='100%'
          direction='column'
          justify='flex-start'
          align='flex-start'
        >
          <SubTitle>{info.name}</SubTitle>
          <Line margin='0 0 20px 0' />
          <FieldTitle>Children Nodes</FieldTitle>
          {children.map(child => (
            <TextLink margin='0 0 20px 0' onClick={() => updateMenuInfo(child)}>
              {child.info.name}
            </TextLink>
          ))}
          <TextLink onClick={() => setIsOptionsVisible(true)}>
            + Add new node
          </TextLink>
        </FlexContainer>
      )
    }

    return (
      <Text align='center'>Click on a node to edit it or to add a new one</Text>
    )
  }

  return <MenuContainer>{renderMenu()}</MenuContainer>
}

export default NodeMenu
