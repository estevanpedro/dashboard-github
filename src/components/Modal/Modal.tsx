import React, { useContext } from 'react'
import Popup from "reactjs-popup";
import Title from '../../components/Title'
import Text from '../../components/Text'
import { Container, ModalField, Button, Close, IconButton, ModalLight, ModalDark } from './elements'

import { ThemeContext } from 'styled-components'
interface Props {
  title: string
  description: string
  Functions: any
}

const Modal = ({ title, description, Functions }: Props) => {

  const themeContext = useContext(ThemeContext);

  return (
    <Popup
      contentStyle={themeContext.mode === 'light' ? ModalLight : ModalDark}
      trigger={<IconButton>  {title}  </IconButton>}
      modal
    >
      {close => (
        <Container>
          <Close onClick={close}> &times; </Close>
          <ModalField align={'center'}>
            <Title> {Title} </Title>
          </ModalField>
          <ModalField >
            <Text size={'regular'}> {description} </Text>
          </ModalField>
          <ModalField >
            <Functions />
          </ModalField>
          <ModalField align={'center'}>
            <Button onClick={() => { close(); }} >
              Confirm
            </Button>
          </ModalField>
        </Container>
      )}
    </Popup>
  )
}

export default Modal
