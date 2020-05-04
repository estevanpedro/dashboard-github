import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { navigate } from '@reach/router'
import { Formik, FormikErrors } from 'formik'
import { useTranslation } from 'react-i18next'

import Button from '../../components/Button'
import Input from '../../components/Input'
import Link from '../../components/Link'
import Title from '../../components/Title'

import Error from '../../components/Error'

import Api from '../../Api'
import { changeSecretToken, setUserId } from '../../redux/ducks/auth'
import { setLoading } from '../../redux/ducks/loading'

import { SignUpContainer, SignUpForm, ReturnText } from './elements'

const SignUp = () => {
  const { t } = useTranslation()
  const [apiError, setApiError] = useState('')

  const dispatch = useDispatch()

  const signupInitialValues = {
    fullName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  type SignUpValues = typeof signupInitialValues

  const handleSubmit = async (values: SignUpValues) => {
    const signUpData = {
      fullname: values.fullName,
      email: values.email,
      username: values.username,
      password: values.password,
    }
    try {
      dispatch(setLoading(true))
      const response = await Api.signup(signUpData)
      dispatch(setLoading(false))

      if (response.data.error) {
        setApiError(response.data.error)
      }

      if (response.data.access_token) {
        dispatch(changeSecretToken(response.data.access_token))
        dispatch(setUserId(response.data.user.id))
        navigate('/profile')
      }
    } catch (err) {
      dispatch(setLoading(false))
      setApiError('Something went wrong!')
      console.error(err)
    }
  }

  const signUpvalidation = (values: SignUpValues) => {
    const { fullName, email, username, password, confirmPassword } = values
    // TODO: improve signup validation
    const errors: FormikErrors<SignUpValues> = {}

    if (fullName.length < 3) {
      errors.fullName = t('signup.Your name needs to have at least 3 characters')
    }

    if (!email.length) {
      errors.email = t('signup.You must use a valid email')
    }

    if (username.length < 3) {
      errors.username = t('signup.Your password needs to have at least 6 characters')
    }

    if (password.length < 6) {
      errors.password = t('')
    }

    if (password !== confirmPassword) {
      errors.password = t('signup.Your passwords must match')
    }

    return errors
  }

  return (
    <SignUpContainer>
      <Title>{t('signup.Create an account')}</Title>
      <Formik
        initialValues={signupInitialValues}
        onSubmit={handleSubmit}
        validate={signUpvalidation}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <SignUpForm onSubmit={handleSubmit}>
            <Input
              label={t('signup.Full Name')}
              name='fullName'
              value={values.fullName}
              onChange={handleChange}
              error={touched.fullName && errors.fullName ? errors.fullName : ''}
              type='text'
            />
            <Input
              label={t('signup.Username')}
              name='username'
              value={values.username}
              onChange={handleChange}
              error={touched.username && errors.username ? errors.username : ''}
              type='text'
            />
            <Input
              label='Email'
              name='email'
              value={values.email}
              onChange={handleChange}
              error={touched.email && errors.email ? errors.email : ''}
              type='email'
            />
            <Input
              label={t('signup.Password')}
              name='password'
              value={values.password}
              onChange={handleChange}
              error={touched.password && errors.password ? errors.password : ''}
              type='password'
            />
            <Input
              label={t('signup.Confirm Password')}
              name='confirmPassword'
              value={values.confirmPassword}
              onChange={handleChange}
              type='password'
            />
            <Error>{apiError}</Error>
            <Button type='submit'>{t('signup.Create now')}</Button>
            <ReturnText size='regular'>
              {t('signup.If you already have an account')}, <Link to='/login'>{t('signup.login')}</Link>
            </ReturnText>
          </SignUpForm>
        )}
      </Formik>
    </SignUpContainer>
  )
}

export default SignUp
