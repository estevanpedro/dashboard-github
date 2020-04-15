import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { MdEdit } from 'react-icons/md'

import {
  FlexContainer,
  Text,
  SubTitle,
  FieldTitle,
  Line,
  TextLink,
  SmallButton,
} from '../../../components'

import { SchemeNodeType } from '../SchemeNode/utils/nodeType'

import options, { TitleType } from '../SchemeNode/options'
import { editNode } from '../SchemeNode/utils/toolsFuncions'

import { MenuContainer } from './elements'
import MenuOptions from './MenuOptions'
import { FormData } from './Forms/types'

interface Props {
  nodeInfo: SchemeNodeType | null
  updateMenuInfo: (data: SchemeNodeType) => void
}

const NodeMenu = ({ nodeInfo, updateMenuInfo }: Props) => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false)
  const [isEditActive, setIsEditActive] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    setIsOptionsVisible(false)
    setIsEditActive(false)
  }, [nodeInfo])

  const handleConfirmEdit = (title: TitleType, FormData: FormData) => {
    if (nodeInfo) {
      const { id } = nodeInfo

      const data: SchemeNodeType = {
        ...nodeInfo,
        name: FormData.name,
        address: FormData.address,
        children: FormData.splits.map((split, i) => {
          return {
            ...nodeInfo.children[i],
            name: split.name,
            address: split.address,
            type: 'address',
            info: nodeInfo.children[i]
              ? {
                  ...nodeInfo.children[i].info,
                  percentage: split.share / 100,
                }
              : {
                  percentage: split.share / 100,
                },
          }
        }),
      }

      dispatch(editNode(id, data))
      setIsEditActive(false)
    }
  }

  const renderMenu = () => {
    if (nodeInfo) {
      const { name, children, type } = nodeInfo

      if (isOptionsVisible) {
        return (
          <MenuOptions
            data={nodeInfo}
            returnToInfo={() => setIsOptionsVisible(false)}
          />
        )
      }

      if (isEditActive) {
        const nodeType = options.find(
          option => option.title.toLowerCase() === type
        )

        const initialState: FormData = {
          name: nodeInfo.name,
          address: nodeInfo.address || '',
          splits: nodeInfo.children.map(child => {
            return {
              name: child.name,
              address: child.address || '',
              share:
                child.info && child.info.percentage
                  ? child.info.percentage * 100
                  : 0,
            }
          }),
        }

        return (
          <FlexContainer
            height='100%'
            width='100%'
            direction='column'
            justify='flex-start'
            align='flex-start'
            padding='20px'
          >
            <TextLink
              onClick={() => setIsEditActive(false)}
              margin='0 0 20px 0'
            >
              ← {name} info
            </TextLink>
            <SubTitle>Edit</SubTitle>
            {nodeType ? (
              <nodeType.content
                initialState={initialState}
                onConfirm={handleConfirmEdit}
              />
            ) : (
              <Text>Something went wrong</Text>
            )}
          </FlexContainer>
        )
      }

      return (
        <FlexContainer
          height='100%'
          width='100%'
          direction='column'
          justify='flex-start'
          align='flex-start'
          padding='20px'
        >
          <SubTitle>{name}</SubTitle>
          {type !== 'address' && type !== 'root' && (
            <SmallButton
              onClick={() => setIsEditActive(true)}
              margin='0 0 20px 0'
            >
              <MdEdit />
            </SmallButton>
          )}

          <Line margin='0 0 20px 0' />
          <FieldTitle>Children Nodes</FieldTitle>
          {children &&
            children.map(child => (
              <TextLink
                margin='0 0 20px 0'
                onClick={() => updateMenuInfo(child)}
              >
                {child.name}
              </TextLink>
            ))}
          <TextLink onClick={() => setIsOptionsVisible(true)}>
            + Add new node
          </TextLink>
        </FlexContainer>
      )
    }

    return (
      <FlexContainer padding='20px'>
        <Text align='center'>
          Click on a node to edit it or to add a new one
        </Text>
      </FlexContainer>
    )
  }

  return <MenuContainer>{renderMenu()}</MenuContainer>
}

export default NodeMenu
