import React, { ReactElement, useContext } from 'react'
import Popup from 'reactjs-popup'

import Title from '../../components/Title'
import Text from '../../components/Text'
import Button from '../../components/Button'

import {
  Container,
  ModalField,
  Close,
  IconButton,
  PopupStyleLight,
  PopupStyleDark,
} from './elements'

import { ThemeContext } from 'styled-components'
interface Props {
  trigger: ReactElement
  title: string
  description: string
  children: ReactElement
  onSubmit: () => void
}

const Modal = ({ trigger, title, description, children, onSubmit }: Props) => {
  const themeContext = useContext(ThemeContext)

  return (
    <Popup
      contentStyle={
        themeContext.mode === 'light' ? PopupStyleLight : PopupStyleDark
      }
      trigger={trigger}
      modal
    >
      {close => (
        <Container>
          <Close onClick={close}> &times; </Close>
          <ModalField>
            <Title> {title} </Title>
          </ModalField>
          <ModalField>
            <Text size={'regular'}> {description} </Text>
          </ModalField>
          <ModalField>{children}</ModalField>
          <ModalField align={'right'}>
            <Button
              onClick={() => {
                onSubmit()
                close()
              }}
            >
              Confirm
            </Button>
          </ModalField>
        </Container>
      )}
    </Popup>
  )
}

export default Modal
