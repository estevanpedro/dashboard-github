import React from 'react'
import { Formik, FieldArray, ArrayHelpers, FormikErrors } from 'formik'

import {
  Button,
  Input,
  Slider,
  FlexContainer,
  FieldTitle,
  TextLink,
} from '../../../../components'

import { TitleType } from '../../SchemeNode/options'

import { MenuButtonContainer, BorderContainer } from '../elements'
import { FormData, SendData } from './types'

interface Props {
  onConfirm: (type: TitleType, FormData: FormData) => void
  initialState?: FormData | null
}

const SendForm = ({ onConfirm, initialState = null }: Props) => {
  const sendInitialValues: SendData = {
    type: 'send',
    name: 'Send',
    addresses: [
      {
        name: 'Address 1',
        address: '',
        percentage: 100,
        value: 0,
      },
    ],
  }

  const handleSubmit = (values: SendData) => {
    onConfirm('Send', values)
  }

  const validateSendForm = (values: SendData) => {
    const { name } = values

    const errors: FormikErrors<SendData> = {}

    if (!name.length) {
      errors.name = "Name can't be empty"
    }

    return errors
  }

  return (
    <Formik
      initialValues={
        (initialState && initialState.type === 'send' && initialState) ||
        sendInitialValues
      }
      onSubmit={handleSubmit}
      validate={validateSendForm}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        setFieldValue,
      }) => (
        <form onSubmit={handleSubmit}>
          <Input
            label='Send Name'
            name='name'
            value={values.name}
            onChange={handleChange}
            type='text'
            width='100%'
            error={touched.name && errors.name ? errors.name : ''}
          />
          <FieldTitle>Addresses</FieldTitle>
          <FieldArray
            name='addresses'
            render={(arrayHelpers: ArrayHelpers) => (
              <FlexContainer direction='column'>
                {values.type === 'send' &&
                values.addresses &&
                values.addresses.length > 0
                  ? values.addresses.map((address, index) => {
                      return (
                        <BorderContainer key={index}>
                          <FlexContainer
                            width='100%'
                            justify='space-between'
                            align='center'
                            margin='0 0 15px 0'
                          >
                            <FieldTitle margin='0'>{`Address ${index +
                              1}`}</FieldTitle>
                            {index ? (
                              <TextLink
                                onClick={() => arrayHelpers.remove(index)}
                              >
                                Remove
                              </TextLink>
                            ) : null}
                          </FlexContainer>
                          <Input
                            label='Address name'
                            name={`addresses.${index}.name`}
                            value={address.name}
                            onChange={handleChange}
                            type='text'
                            width='100%'
                          />
                          <Input
                            label='Address Value(optional)'
                            name={`addresses.${index}.address`}
                            value={address.address}
                            onChange={handleChange}
                            type='text'
                            width='100%'
                          />
                          <Input
                            label='Value to be sent'
                            name={`addresses.${index}.value`}
                            value={String(address.value)}
                            onChange={handleChange}
                            type='number'
                            width='100%'
                          />
                          <Slider
                            name={`address.${index}.percentage`}
                            value={address.percentage}
                            onChange={value =>
                              setFieldValue(
                                `addresses.${index}.percentage`,
                                value
                              )
                            }
                            formatLabel={value => `${value}%`}
                            minValue={0}
                            maxValue={100}
                          />
                        </BorderContainer>
                      )
                    })
                  : null}
                <TextLink
                  alignSelf='flex-end'
                  onClick={() =>
                    arrayHelpers.insert(
                      values.type === 'send' ? values.addresses.length : 0,
                      {
                        name: `Address ${values.type === 'send' &&
                          values.addresses.length + 1}`,
                        address: '',
                        value: 0,
                        percentage: 0,
                      }
                    )
                  }
                >
                  Add address
                </TextLink>
              </FlexContainer>
            )}
          />
          <MenuButtonContainer>
            <Button type='submit' align='flex-end' margin='20px 0'>
              Confirm
            </Button>
          </MenuButtonContainer>
        </form>
      )}
    </Formik>
  )
}

export default SendForm
