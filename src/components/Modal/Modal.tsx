import React, { ReactElement, useContext, useState } from 'react'
import { ThemeContext } from 'styled-components'
import Popup from 'reactjs-popup'

import Button from '../../components/Button'
import FlexContainer from '../../components/FlexContainer'

import {
  Container,
  Close,
  PopupStyleLight,
  PopupStyleDark,
  ErrorAlert,
  ErrorInfo,
} from './elements'

import warningIcon from '../../assets/icons/warning.svg'

interface Props {
  trigger: ReactElement
  title: string
  children: ReactElement
  onSubmit?: (close: () => void) => void | undefined
  errors?: string[]
}

const Modal = ({ trigger, children, onSubmit, errors = [] }: Props) => {
  const themeContext = useContext(ThemeContext)
  const [errorInfoActive, setErrorInfoActive] = useState(false)
  return (
    <Popup
      contentStyle={
        themeContext.colors.primary === '#FF9140'
          ? PopupStyleLight
          : PopupStyleDark
      }
      trigger={trigger}
      modal
    >
      {close => (
        <Container>
          <Close onClick={close}> &times; </Close>
          <FlexContainer width='100%' direction='column' justify='flex-start'>
            {children}
          </FlexContainer>
          {onSubmit && (
            <FlexContainer
              width='100%'
              margin='20% 0 0 0 '
              align='center'
              justify='flex-end'
            >
              {errors.length ? (
                <>
                  {errorInfoActive && (
                    <ErrorInfo>
                      {errors.map(error => (
                        <FlexContainer justify='flex-start' width='100%'>
                          {error}
                        </FlexContainer>
                      ))}
                    </ErrorInfo>
                  )}
                  <ErrorAlert
                    onClick={() => setErrorInfoActive(!errorInfoActive)}
                  >
                    <img src={warningIcon} alt='warning icon' />
                  </ErrorAlert>
                </>
              ) : null}
              <Button
                onClick={() => {
                  onSubmit(close)
                }}
              >
                Confirm
              </Button>
            </FlexContainer>
          )}
        </Container>
      )}
    </Popup>
  )
}

export default Modal
