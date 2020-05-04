import React from 'react'
import { useDispatch } from 'react-redux'
import { navigate } from '@reach/router'
import { Formik, FormikErrors } from 'formik'
import { useTranslation } from 'react-i18next'

import { setLoading } from '../../redux/ducks/loading'

import { Title, Button, Input } from '../../components'

import Api from '../../Api'

import { Text, ForgotContainer } from './elements'

const ResetPassword = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const resetInitialValues = {
    resetToken: '',
    password: '',
    confirmPassword: '',
  }

  type ResetValues = typeof resetInitialValues

  const handleSubmit = async (values: ResetValues) => {
    try {
      dispatch(setLoading(true))
      const response = await Api.resetPassword(
        values.resetToken,
        values.password
      )
      dispatch(setLoading(false))

      if (response.data) {
        navigate('/login')
      }
    } catch (err) {
      dispatch(setLoading(false))
      console.error(err)
    }
  }

  const validateReset = (values: ResetValues) => {
    const { resetToken, password, confirmPassword } = values

    const errors: FormikErrors<ResetValues> = {}

    if (resetToken.length < 10) {
      errors.resetToken = 'Your reset token must be valid'
    }

    if (password.length < 6) {
      errors.password = 'Your password needs to have at least 6 character'
    }

    if (password !== confirmPassword) {
      errors.password = 'Your passwords must match'
    }

    return errors
  }

  return (
    <ForgotContainer>
      <Formik
        initialValues={resetInitialValues}
        onSubmit={handleSubmit}
        validate={validateReset}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Title>New Password</Title>
            <Input
              label='Token'
              name='resetToken'
              value={values.resetToken}
              onChange={handleChange}
              type='text'
              error={
                touched.resetToken && errors.resetToken ? errors.resetToken : ''
              }
            />
            <Input
              label='Password'
              name='password'
              value={values.password}
              onChange={handleChange}
              type='text'
              error={touched.password && errors.password ? errors.password : ''}
            />
            <Input
              label='Confirm Password'
              name='confirmPassword'
              value={values.confirmPassword}
              onChange={handleChange}
              type='text'
            />
            <Button type='submit' margin='0 0 20px 0'>
              Confirm
            </Button>
          </form>
        )}
      </Formik>

      <Text>Check your e-mail to get the token.</Text>
    </ForgotContainer>
  )
}

export default ResetPassword
