import React from 'react'
import { Formik } from 'formik'

import {
  Button,
  Input,
  FlexContainer,
  FieldTitle,
  TextLink,
} from '../../../../components'

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

  return (
    <Formik
      initialValues={
        (initialState && initialState.type === 'timer' && initialState) ||
        timerInitialValues
      }
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Input
            label='Timer name'
            name='name'
            value={values.name}
            onChange={handleChange}
            type='text'
            width='100%'
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
            />
            <Input
              label='Minute'
              name='info.time.minutes'
              value={values.info.time.minutes}
              onChange={handleChange}
              type='number'
              width='28%'
              min={0}
            />
            <Input
              label='Seconds'
              name='info.time.seconds'
              value={values.info.time.seconds}
              onChange={handleChange}
              type='number'
              width='28%'
              min={0}
            />
          </FlexContainer>
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
