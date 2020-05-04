import React from 'react'
import { Formik, FormikErrors } from 'formik'
import { useTranslation } from 'react-i18next'

import { Button, Input, FlexContainer, Text } from '../../../../components'

import { TitleType } from '../../options'

import { MenuButtonContainer } from '../elements'
import { FormData, TimerData } from './types'

interface Props {
  onConfirm: (title: TitleType, FormData: FormData) => void
  initialState?: FormData | null
}

const TimerForm = ({ onConfirm, initialState = null }: Props) => {
  const { t } = useTranslation()
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
      errors.name = t('errors.namecantbeempty')
    }

    if (
      info.time.hours === '0' &&
      info.time.minutes === '0' &&
      info.time.seconds === '0'
    ) {
      errors.type = t('timer.Timeshouldnotbe0')
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
            label={t('timer.timerName')}
            name='name'
            value={values.name}
            onChange={handleChange}
            type='text'
            width='100%'
            error={touched.name && errors.name ? errors.name : ''}
          />
          <FlexContainer justify='space-between'>
            <Input
              label={t('timer.hours')}
              name='info.time.hours'
              value={values.info.time.hours}
              onChange={handleChange}
              type='number'
              width='28%'
              min={0}
              marginBottom={1}
            />
            <Input
              label={t('timer.minutes')}
              name='info.time.minutes'
              value={values.info.time.minutes}
              onChange={handleChange}
              type='number'
              width='28%'
              min={0}
              marginBottom={1}
            />
            <Input
              label={t('timer.seconds')}
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
              {t('form.confirm')}
            </Button>
          </MenuButtonContainer>
        </form>
      )}
    </Formik>
  )
}

export default TimerForm
