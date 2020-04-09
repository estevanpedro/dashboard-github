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
  onClick: () => void
  align?: 'stretch' | 'center' | 'flex-start' | 'flex-end'
  children: JSX.Element
}

const IconButton = ({
  isSecondary,
  margin,
  onClick,
  align,
  children,
}: Props) => {
  return (
    <ButtonContainer
      margin={margin}
      isSecondary={isSecondary}
      onClick={onClick}
      align={align}
    >
      {children}
    </ButtonContainer>
  )
}

export default IconButton
