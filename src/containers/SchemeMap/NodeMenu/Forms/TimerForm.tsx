import React from 'react'
import { Formik, FormikErrors } from 'formik'

import { Button, Input, FlexContainer, Text } from '../../../../components'

import { TitleType } from '../../SchemeNode/options'

import { MenuButtonContainer } from '../elements'
import { FormData, TimerData } from './types'

interface Props {
  onConfirm: (title: TitleType, FormData: FormData) => void
  initialState?: FormData | null
}

const TimerForm = ({ onConfirm, initialState = null }: Props) => {
  const timerInitialValues: FormData = {
    type: 'timer',
    name: 'Timer',
    info: {
      time: {
        hours: '0',
        minutes: '0',
        seconds: '0',
      },
    },
  }

  const handleSubmit = (values: TimerData) => {
    onConfirm('Timer', values)
  }

  const validateTimer = (values: TimerData) => {
    const { name, info } = values

    const errors: FormikErrors<TimerData> = {}

    if (!name.length) {
      errors.name = "Name can't be empty"
    }

    if (
      info.time.hours === '0' &&
      info.time.minutes === '0' &&
      info.time.seconds === '0'
    ) {
      errors.type = 'Time should not be 0'
    }

    return errors
  }

  return (
    <Formik
      initialValues={
        (initialState && initialState.type === 'timer' && initialState) ||
        timerInitialValues
      }
      onSubmit={handleSubmit}
      validate={validateTimer}
    >
      {({ values, errors, touched, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Input
            label='Timer name'
            name='name'
            value={values.name}
            onChange={handleChange}
            type='text'
            width='100%'
            error={touched.name && errors.name ? errors.name : ''}
          />
          <FlexContainer justify='space-between'>
            <Input
              label='Hours'
              name='info.time.hours'
              value={values.info.time.hours}
              onChange={handleChange}
              type='number'
              width='28%'
              min={0}
              marginBottom={1}
            />
            <Input
              label='Minutes'
              name='info.time.minutes'
              value={values.info.time.minutes}
              onChange={handleChange}
              type='number'
              width='28%'
              min={0}
              marginBottom={1}
            />
            <Input
              label='Seconds'
              name='info.time.seconds'
              value={values.info.time.seconds}
              onChange={handleChange}
              type='number'
              width='28%'
              min={0}
              marginBottom={1}
            />
          </FlexContainer>
          <Text
            color='cancel'
            size='verySmall'
            margin='0'
            data-testid='errorMessage'
          >
            {touched.type && errors.type ? errors.type : ''}
          </Text>
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

export default TimerForm
