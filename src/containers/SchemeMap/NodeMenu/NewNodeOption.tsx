import React from 'react'
import { IconType } from 'react-icons/lib/cjs'

import ds from '../../../design/designSystem'

import { Text } from '../../../components'

import { OptionContainer } from './elements'

interface Props {
  title: string
  icon: IconType
}
const NewNodeOption = ({ title, icon: Icon }: Props) => {
  return (
    <OptionContainer>
      <Icon size={30} style={{ margin: 5 }} />
      <Text size='small'>{title}</Text>
    </OptionContainer>
  )
}

export default NewNodeOption
