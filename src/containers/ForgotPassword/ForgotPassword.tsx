import React from 'react'
import { useDispatch } from 'react-redux'
import { navigate } from '@reach/router'
import { Formik, FormikErrors } from 'formik'
import { useTranslation } from 'react-i18next'

import { setLoading } from '../../redux/ducks/loading'

import { Title, Button, Input } from '../../components'

import Api from '../../Api'

import { ForgotContainer } from './elements'

const ResetPassword = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const forgotInitialValues = {
    email: '',
  }

  type ForgotValues = typeof forgotInitialValues

  const handleSubmit = async (values: ForgotValues) => {
    try {
      dispatch(setLoading(true))
      const response = await Api.forgotPassword(values.email)
      dispatch(setLoading(false))

      if (response.data.message) {
        navigate('/reset')
      }
    } catch (err) {
      dispatch(setLoading(false))
      console.error(err)
    }
  }

  const validateForgot = (values: ForgotValues) => {
    const { email } = values

    const errors: FormikErrors<ForgotValues> = {}

    if (!email.length) {
      errors.email = t('forgotPassword.You must use a valid email')
    }

    return errors
  }

  return (
    <ForgotContainer>
      <Formik
        initialValues={forgotInitialValues}
        onSubmit={handleSubmit}
        validate={validateForgot}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Title>{t('forgotPassword.Change your password')}</Title>

            <Input
              label='Email'
              name='email'
              value={values.email}
              onChange={handleChange}
              type='text'
              error={touched.email && errors.email ? errors.email : ''}
            />
            <Button type='submit' margin='0 0 20px 0'>
              {t('form.confirm')}
            </Button>
          </form>
        )}
      </Formik>
    </ForgotContainer>
  )
}

export default ResetPassword
