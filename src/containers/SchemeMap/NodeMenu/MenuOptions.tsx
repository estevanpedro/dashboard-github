import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { FlexContainer, SubTitle, TextLink } from '../../../components'

import options, { NodeOption, TitleType } from '../SchemeNode/options'
import { addSplit } from '../SchemeNode/utils/toolsFuncions'
import { SchemeNodeType } from '../SchemeNode/utils/nodeType'

import NewNodeOption from './NewNodeOption'
import { FormData } from './Forms/types'

interface Props {
  data: SchemeNodeType
  returnToInfo: () => void
}

const MenuOptions = ({ data, returnToInfo }: Props) => {
  const [optionActive, setOptionActive] = useState<NodeOption | null>(null)

  const dispatch = useDispatch()

  const handleMenuRender = () => {
    if (optionActive) {
      const handleConfirm = (type: TitleType, FormData: any) => {
        switch (type) {
          case 'Split':
            dispatch(
              addSplit(data, FormData.name, FormData.address, FormData.splits)
            )
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
            ← Add new node
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
