import React from 'react'
import Popup from "reactjs-popup";
import Title from '../../components/Title'
import Text from '../../components/Text'
import { Container, ModalField, Button, Close, IconButton } from '../../components/Modal/style'

const Modal = ({tool, description, Functions}:{tool: string; description: string; Functions: any}) => {

  return (
    <Popup 
    contentStyle={{width: 400, borderRadius: 20}}
    trigger={ <IconButton>  {tool}  </IconButton> } 
    modal
    >
      {close => (
        <Container>
          <Close onClick={close}> &times; </Close>
          <ModalField align={'center'}>
          <Title> {tool} </Title>
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
