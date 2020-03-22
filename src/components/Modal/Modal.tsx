import React, { ReactElement, useContext } from 'react'
import Popup from 'reactjs-popup'

import Text from '../../components/Text'
import Button from '../../components/Button'

import {
  Container,
  ModalField,
  Close,
  PopupStyleLight,
  PopupStyleDark,
} from './elements'

import { ThemeContext } from 'styled-components'
interface Props {
  trigger: ReactElement
  title: string
  description: string
  children: ReactElement
  onSubmit?: () => void
}

const Modal = ({ trigger, description, children, onSubmit }: Props) => {
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
          <ModalField>{children}</ModalField>
          {onSubmit && (
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
          )}
        </Container>
      )}
    </Popup>
  )
}

export default Modal
