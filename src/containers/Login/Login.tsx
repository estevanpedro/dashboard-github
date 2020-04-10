import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { navigate } from '@reach/router'
import { Formik, FormikErrors } from 'formik'

import Button from '../../components/Button'
import Input from '../../components/Input'
import Link from '../../components/Link'
import LinkToInputs from '../../components/LinkToInputs'
import Error from '../../components/Error'

import { SubTitle } from '../../components/Title'

import Api from '../../Api'

import { changeSecretToken } from '../../redux/ducks/auth'
import { setLoading } from '../../redux/ducks/loading'

import { LoginContainer, LoginForm } from './elements'

const Login = () => {
  const [apiError, setApiError] = useState('')

  const dispatch = useDispatch()

  const formInitialValues = {
    username: '',
    password: '',
  }

  type LoginValues = typeof formInitialValues

  const handleSubmit = async (values: LoginValues) => {
    const userData = {
      username: values.username,
      password: values.password,
    }

    try {
      dispatch(setLoading(true))
      const response = await Api.login(userData)
      dispatch(setLoading(false))

      if (response.data.error) {
        setApiError(response.data.error)
        return
      }

      if (response.data.access_token) {
        dispatch(changeSecretToken(response.data.access_token))
        navigate('/my-schemes')
      }
    } catch (err) {
      dispatch(setLoading(false))
      setApiError('Invalid username or password!')
      console.error(err)
    }
  }

  const loginValidation = (values: LoginValues) => {
    const { username, password } = values
    // TODO: improve validation
    const errors: FormikErrors<LoginValues> = {}

    if (username.length < 3) {
      errors.username = 'Your username needs to have at least 3 characters'
    }

    if (password.length < 6) {
      errors.password = 'Your password needs to have at least 6 characters'
    }

    return errors
  }

  return (
    <Formik
      initialValues={formInitialValues}
      onSubmit={handleSubmit}
      validate={loginValidation}
    >
      {({ values, errors, handleChange, handleSubmit }) => (
        <LoginContainer onSubmit={handleSubmit}>
          <SubTitle>Login with your Splitcoin account</SubTitle>
          <LoginForm>
            <Input
              label='Username'
              name='username'
              value={values.username}
              onChange={handleChange}
              type='text'
              error={errors.username}
            />
            <Input
              label='Password'
              name='password'
              value={values.password}
              onChange={handleChange}
              type='password'
              error={errors.password}
            />
            <LinkToInputs to='/forgot'>Forgot Password</LinkToInputs>
            <Error>{apiError}</Error>
            <Button type='submit' margin='0 0 20px 0'>
              Login
            </Button>
            <Link to='/sign-up'>Create an account</Link>
          </LoginForm>
        </LoginContainer>
      )}
    </Formik>
  )
}

export default Login
