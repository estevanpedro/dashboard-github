import React, { useContext } from 'react'
import Popup from 'reactjs-popup'
import Title from '../../components/Title'
import Text from '../../components/Text'
import {
  Container,
  Close,
  IconButton,
  PopupStyleLight,
  PopupStyleDark,
  ModalField,
} from './elements'
import Button from '../../components/Button'
import { ThemeContext } from 'styled-components'

const ModalSmall = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  const themeContext = useContext(ThemeContext)
  return (
    <Popup
      contentStyle={
        themeContext.mode === 'light' ? PopupStyleLight : PopupStyleDark
      }
      trigger={<IconButton> {title} </IconButton>}
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
          <ModalField align={'right'}>
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

export default ModalSmall
