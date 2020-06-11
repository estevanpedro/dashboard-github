import React from 'react'
import styled from 'styled-components'

import Button from './Button'

const ButtonContainer = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  img {
    width: 10px;
    height: 10px;
  }
`

interface Props {
  isSecondary?: boolean
  margin?: string
  icon: string
  onClick: () => void
  align?: 'stretch' | 'center' | 'flex-start' | 'flex-end'
}

const IconButton = ({ isSecondary, margin, icon, onClick, align }: Props) => {
  return (
    <ButtonContainer
      margin={margin}
      isSecondary={isSecondary}
      onClick={onClick}
      align={align}
    >
      <img src={icon} alt='icon' />
    </ButtonContainer>
  )
}

export default IconButton
