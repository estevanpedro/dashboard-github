import React from 'react'
import styled from 'styled-components'

import Button from './Button'

const ButtonContainer = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  img {
    width: 24px;
    height: 24px;
  }
`

interface Props {
  isSecondary?: boolean
  margin?: string
  icon: string
  onClick: () => void
}

const IconButton = ({ isSecondary, margin, icon, onClick }: Props) => {
  return (
    <ButtonContainer
      margin={margin}
      isSecondary={isSecondary}
      onClick={onClick}
    >
      <img src={icon} />
    </ButtonContainer>
  )
}

export default IconButton
