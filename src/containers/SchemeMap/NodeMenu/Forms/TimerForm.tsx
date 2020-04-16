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

import { MenuButtonContainer, BorderContainer } from '../elements'
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
        hours: 0,
        minutes: 0,
        seconds: 0,
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
        </form>
      )}
    </Formik>
  )
}

export default TimerForm
