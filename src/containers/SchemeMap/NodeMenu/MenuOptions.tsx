import React from 'react'

import { FlexContainer, SubTitle, TextLink } from '../../../components'

import options from '../SchemeNode/options'
import { NodeType } from '../SchemeNode/utils/nodeType'
import NewNodeOption from './NewNodeOption'

interface Props {
  nodeName: string
  nodeType: NodeType
  returnToInfo: () => void
}

const MenuOptions = ({ nodeName, nodeType, returnToInfo }: Props) => {
  return (
    <FlexContainer
      width='100%'
      height='100%'
      direction='column'
      justify='flex-start'
      align='flex-start'
    >
      <TextLink
        onClick={returnToInfo}
        margin='0 0 20px 0'
      >{`← ${nodeName} info`}</TextLink>
      <SubTitle>Add new node</SubTitle>
      <FlexContainer wrap='wrap' width='100%' justify='center'>
        {options.map(option => (
          <NewNodeOption title={option.title} icon={option.icon} />
        ))}
      </FlexContainer>
    </FlexContainer>
  )
}

export default MenuOptions
