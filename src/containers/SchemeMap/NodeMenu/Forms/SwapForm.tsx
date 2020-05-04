import React from 'react'
import { Formik, FormikErrors } from 'formik'
import { useTranslation } from 'react-i18next'

import { Button, Input, Text, FlexContainer } from '../../../../components'
import { MenuButtonContainer } from '../elements'

import { TitleType } from '../../options'

import { FormData, SwapData } from './types'

interface Props {
  onConfirm: (title: TitleType, FormData: FormData) => void
  initialState?: FormData | null
}

const SwapForm = ({ onConfirm, initialState }: Props) => {
  const { t } = useTranslation()
  const swapInitialValues: FormData = {
    type: 'swap',
    name: 'Swap',
  }

  const handleSubmit = (values: SwapData) => {
    onConfirm('Swap', values)
  }

  const validateSwap = (values: SwapData) => {
    const { name } = values

    const errors: FormikErrors<SwapData> = {}

    if (!name.length) {
      errors.name = "Name can't be empty!"
    }

    return errors
  }

  return (
    <>
      <FlexContainer direction='column' margin='0 0 20px 0'>
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
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Input
              label='Swap name'
              name='name'
              value={values.name}
              onChange={handleChange}
              type='text'
              width='100%'
              error={touched.name && errors.name ? errors.name : ''}
            />
            <MenuButtonContainer>
              <Button type='submit' align='flex-end' margin='20px 0'>
                Confirm
              </Button>
            </MenuButtonContainer>
          </form>
        )}
      </Formik>
    </>
  )
}

export default SwapForm
