import React from 'react'
import { Formik, FormikErrors } from 'formik'

import { Button, Text, FlexContainer } from '../../../../components'
import { MenuButtonContainer } from '../elements'

import { TitleType } from '../../SchemeNode/options'

import { FormData, SwapData } from './types'

interface Props {
  onConfirm: (title: TitleType, FormData: FormData) => void
  initialState?: FormData | null
}

const SwapForm = ({ onConfirm, initialState }: Props) => {
  const swapInitialValues: FormData = {
    type: 'swap',
    name: 'Swap',
  }

  const handleSubmit = (values: FormData) => {
    onConfirm('Swap', values)
  }

  const validateSwap = (values: FormData) => {}

  return (
    <>
      <FlexContainer direction='column'>
        <Text>Minimum of 0.001</Text>
        <Text>Bitcoin (BTC) to REAL (BRL)</Text>
      </FlexContainer>
      <Formik
        initialValues={
          (initialState && initialState.type === 'swap' && initialState) ||
          swapInitialValues
        }
        onSubmit={handleSubmit}
        validate={validateSwap}
      >
        <MenuButtonContainer>
          <Button type='submit' align='flex-end' margin='20px 0'>
            Confirm
          </Button>
        </MenuButtonContainer>
      </Formik>
    </>
  )
}

export default SwapForm
