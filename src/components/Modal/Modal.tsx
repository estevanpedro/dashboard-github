import React from 'react'
import Popup from 'reactjs-popup'

import Title from '../../components/Title'
import Text from '../../components/Text'
import Button from '../../components/Button'

import {
  PopupStyle,
  Container,
  ModalField,
  Close,
  IconButton,
} from './elements'

interface Props {
  title: string
  description: string
  Functions: any
}

const Modal = ({ title, description, Functions }: Props) => {
  return (
    <Popup
      contentStyle={PopupStyle}
      trigger={<IconButton> {title} </IconButton>}
      modal
    >
      {close => (
        <Container>
          <Close onClick={close}> &times; </Close>
          <ModalField align={'center'}>
            <Title> {title} </Title>
          </ModalField>
          <ModalField>
            <Text size={'regular'}> {description} </Text>
          </ModalField>
          <ModalField>
            <Functions />
          </ModalField>
          <ModalField align={'center'}>
            <Button
              onClick={() => {
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
