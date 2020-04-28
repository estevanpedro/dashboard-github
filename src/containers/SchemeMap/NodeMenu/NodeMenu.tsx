import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { navigate } from '@reach/router'
import { MdEdit, MdLink } from 'react-icons/md'
import uniqid from 'uniqid'

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
import { NodeType } from '../SchemeNode/utils/nodeType'

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

      let data: SchemeNodeType | null = null

      switch (FormData.type) {
        case 'split':
          data = {
            ...nodeInfo,
            name: FormData.name,
            address: FormData.address,
            children: FormData.splits.map((split, i) => {
              return {
                ...nodeInfo.children[i],
                id: split.id || uniqid(),
                name: split.name,
                address: split.address,
                type: 'address',
                // children: nodeInfo.children[i].children || [],
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
          break

        case 'timer':
          data = {
            ...nodeInfo,
            name: FormData.name,
            info: FormData.info,
          }
          dispatch(editNode(id, data))
          break

        case 'notify':
          data = {
            ...nodeInfo,
            name: FormData.name,
            info: FormData.info,
          }

          dispatch(editNode(id, data))
          break

        case 'send':
          data = {
            ...nodeInfo,
            name: FormData.name,
            children:
              FormData.type === 'send'
                ? FormData.addresses.map((address, i) => {
                    return {
                      ...nodeInfo.children[i],
                      name: address.name,
                      address: address.address,
                      type: 'address',
                      info: nodeInfo.children[i]
                        ? {
                            ...nodeInfo.children[i].info,
                            percentage: address.percentage / 100,
                            value: address.value,
                          }
                        : {
                            percentage: address.percentage / 100,
                            value: address.value,
                          },
                    }
                  })
                : [],
          }

          dispatch(editNode(id, data))
          break

        case 'swap':
          data = {
            ...nodeInfo,
            name: FormData.name,
          }

          dispatch(editNode(id, data))
          break

        default:
          data = null
      }

      setIsEditActive(false)
    }
  }

  const filterOptions = () => {
    let possibleOptions: NodeType[] = []

    if (nodeInfo) {
      switch (nodeInfo.type) {
        case 'root':
          if (!nodeInfo.children.length) {
            possibleOptions = ['split']
            break
          }

          possibleOptions = []
          break

        case 'split':
          possibleOptions = []
          break

        case 'address':
          possibleOptions = [
            'split',
            'notify',
            'timer',
            'swap',
            // 'event',
            'send',
          ]
          break

        case 'timer':
          possibleOptions = ['split', 'send']
          break

        case 'notify':
          possibleOptions = []
          break

        case 'send':
          possibleOptions = []
          break

        case 'swap':
          possibleOptions = []
          break

        case 'event':
          possibleOptions = ['split', 'swap', 'notify']
          break

        case 'scheme':
          possibleOptions = []
          break
      }
    }

    return options.filter(option => possibleOptions.includes(option.type))
  }

  const renderMenu = () => {
    if (nodeInfo) {
      const { name, children, type } = nodeInfo

      if (isOptionsVisible) {
        return (
          <MenuOptions
            data={nodeInfo}
            returnToInfo={() => setIsOptionsVisible(false)}
            options={filterOptions()}
          />
        )
      }

      if (isEditActive) {
        const nodeType = options.find(
          option => option.title.toLowerCase() === type
        )

        let initialState: FormData | null = null

        switch (nodeInfo.type) {
          case 'split':
            initialState = {
              type: 'split',
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
            break

          case 'timer':
            if (nodeInfo.info) {
              initialState = {
                type: 'timer',
                name: nodeInfo.name,
                info: {
                  time: {
                    hours: nodeInfo.info.time.hours || '0',
                    minutes: nodeInfo.info.time.minutes || '0',
                    seconds: nodeInfo.info.time.seconds || '0',
                  },
                },
              }
            }
            break

          case 'notify':
            if (nodeInfo.info) {
              initialState = {
                type: 'notify',
                name: nodeInfo.name,
                info: {
                  emails: nodeInfo.info.emails || [''],
                },
              }
            }
            break

          case 'send':
            initialState = {
              type: 'send',
              name: nodeInfo.name,
              addresses: nodeInfo.children.map(child => {
                return {
                  name: child.name,
                  address: child.info.address || '',
                  percentage:
                    child.info && child.info.percentage
                      ? child.info.percentage * 100
                      : 0,
                  value: child.info && child.info.value ? child.info.value : 0,
                }
              }),
            }
            break

          case 'swap':
            initialState = {
              type: 'swap',
              name: nodeInfo.name,
            }
            break
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
          {type !== 'address' && type !== 'root' && type !== 'scheme' && (
            <SmallButton
              onClick={() => setIsEditActive(true)}
              margin='0 0 20px 0'
            >
              <MdEdit />
            </SmallButton>
          )}
          {type === 'scheme' && (
            <SmallButton
              onClick={() => navigate(`/split-details/${nodeInfo.info.id}`)}
              margin='0 0 20px 0'
            >
              <MdLink />
            </SmallButton>
          )}
          {nodeInfo.address && (
            <FlexContainer margin='0 0 20px 0' direction='column'>
              <Text weight='bold'>Address:</Text>
              <Text size='verySmall'>{nodeInfo.address}</Text>
            </FlexContainer>
          )}

          <Line margin='0 0 20px 0' />
          {type !== 'scheme' && <FieldTitle>Children Nodes</FieldTitle>}
          {children &&
            children.map(child => (
              <TextLink
                margin='0 0 20px 0'
                onClick={() => updateMenuInfo(child)}
              >
                {child.name}
              </TextLink>
            ))}
          {filterOptions().length ? (
            <TextLink onClick={() => setIsOptionsVisible(true)}>
              + Add new node
            </TextLink>
          ) : null}
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
