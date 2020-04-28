import React from 'react'
import { Formik, FormikErrors } from 'formik'

import { Button, Input, Selector } from '../../../../components'
import { MenuButtonContainer } from '../elements'

import { TitleType } from '../../SchemeNode/options'

import { FormData, EventData } from './types'

interface Props {
  onConfirm: (title: TitleType, FormData: FormData) => void
  initialState?: FormData | null
}

const EventForm = ({ onConfirm, initialState }: Props) => {
  const eventInitialValues: FormData = {
    type: 'event',
    name: 'Event',
    value: 0,
    direction: 'above',
  }

  const handleSubmit = (values: EventData) => {
    onConfirm('Event', values)
  }

  const validateSwap = (values: EventData) => {
    const { name, value } = values
    const errors: FormikErrors<EventData> = {}

    if (!name.length) {
      errors.name = "Name can't be empty!"
    }

    if (!value) {
      errors.value = "Value can't be zero"
    }

    return errors
  }

  const handleDirectionValue = (
    value: string,
    setFieldValue: (field: string, value: any) => void
  ) => {
    console.log(value)
    setFieldValue('direction', value)
  }

  return (
    <Formik
      initialValues={
        (initialState && initialState.type === 'event' && initialState) ||
        eventInitialValues
      }
      onSubmit={handleSubmit}
      validate={validateSwap}
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
            label='Event name'
            name='name'
            value={values.name}
            onChange={handleChange}
            type='text'
            width='100%'
            error={touched.name && errors.name ? errors.name : ''}
          />
          <Selector
            label='Value'
            values={['above', 'bellow']}
            selectedValue={values.direction}
            onChange={(value: string) =>
              handleDirectionValue(value, setFieldValue)
            }
          />
          <Input
            name='value'
            value={String(values.value)}
            onChange={handleChange}
            type='number'
            width='100%'
            error={touched.value && errors.value ? errors.value : ''}
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

export default EventForm
