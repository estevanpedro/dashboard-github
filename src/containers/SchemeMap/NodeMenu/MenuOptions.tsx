import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { FlexContainer, SubTitle, TextLink } from '../../../components'

import { NodeOption, TitleType } from '../options'
import {
  addSplit,
  addTimer,
  addNotify,
  addSend,
  addSwap,
  addEvent,
  addScheme,
} from '../utils/toolsFuncions'
import { SchemeNodeType } from '../utils/nodeType'

import NewNodeOption from './NewNodeOption'
import { RootState } from '../../../redux/rootReducer'

interface Props {
  data: SchemeNodeType
  returnToInfo: () => void
  options: NodeOption[]
}

const MenuOptions = ({ data, returnToInfo, options }: Props) => {
  const { t } = useTranslation()
  const [optionActive, setOptionActive] = useState<NodeOption | null>(null)
  const { userId } = useSelector((state: RootState) => state.auth)

  const dispatch = useDispatch()

  const handleMenuRender = () => {
    if (optionActive) {
      const handleConfirm = (type: TitleType, formData: any) => {
        switch (type) {
          case 'Split':
            dispatch(
              addSplit(data, formData.name, formData.address, formData.splits)
            )
            break

          case 'Timer':
            dispatch(
              addTimer(data, formData.name, {
                hours: Number(formData.info.time.hours),
                minutes: Number(formData.info.time.minutes),
                seconds: Number(formData.info.time.seconds),
              })
            )
            returnToInfo()
            break

          case 'Notify':
            dispatch(addNotify(data, formData.name, formData.info.emails))
            returnToInfo()
            break

          case 'Send':
            dispatch(addSend(data, formData.name, formData.addresses))
            returnToInfo()
            break

          case 'Swap':
            dispatch(addSwap(data, formData.name, userId))
            returnToInfo()
            break

          case 'Event':
            dispatch(
              addEvent(data, formData.name, formData.value, formData.direction)
            )
            break

          case 'ImportSplit':
            dispatch(addScheme(data, formData.name, formData.id))
            returnToInfo()
            break
        }
        returnToInfo()
      }

      return (
        <FlexContainer
          height='100%'
          width='100%'
          direction='column'
          position='relative'
          justify='flex-start'
          padding='20px'
        >
          <TextLink onClick={() => setOptionActive(null)} margin='0 0 20px 0'>
            ← {t('schemeMap.addNewNode')}
          </TextLink>
          <SubTitle>{optionActive.title}</SubTitle>
          <optionActive.content onConfirm={handleConfirm} />
        </FlexContainer>
      )
    }

    return (
      <FlexContainer
        direction='column'
        width='100%'
        height='100%'
        justify='flex-start'
        padding='20px'
      >
        <TextLink
          onClick={returnToInfo}
          margin='0 0 20px 0'
        >{`← ${data.name} info`}</TextLink>
        <SubTitle>Add new node</SubTitle>
        <FlexContainer wrap='wrap' width='100%' justify='center'>
          {options.map(option => (
            <NewNodeOption
              key={option.id}
              title={option.title}
              icon={option.icon}
              onClick={() => setOptionActive(option)}
            />
          ))}
        </FlexContainer>
      </FlexContainer>
    )
  }

  return (
    <FlexContainer
      width='100%'
      height='100%'
      direction='column'
      justify='flex-start'
      align='flex-start'
    >
      {handleMenuRender()}
    </FlexContainer>
  )
}

export default MenuOptions
