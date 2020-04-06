import React from 'react'
import { IconType } from 'react-icons/lib/cjs'

import { Text } from '../../../components'

import { OptionContainer } from './elements'

interface Props {
  title: string
  icon: IconType
  onClick: () => void
}

const NewNodeOption = ({ title, icon: Icon, onClick }: Props) => {
  return (
    <OptionContainer onClick={onClick}>
      <Icon size={30} style={{ margin: 5 }} />
      <Text size='small'>{title}</Text>
    </OptionContainer>
  )
}

export default NewNodeOption
