import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { navigate } from '@reach/router'
import { useSelector } from 'react-redux'
import { Formik, FormikErrors } from 'formik'
import { RiBankLine } from 'react-icons/ri'
import { TiTick } from 'react-icons/ti'

import Button from '../../components/Button'
import Input from '../../components/Input'
import Link from '../../components/Link'
import LinkToInputs from '../../components/LinkToInputs'
import Error from '../../components/Error'
import { SubTitle } from '../../components/Title'

import Api from '../../Api'

import { changeSecretToken, setUserId } from '../../redux/ducks/auth'
import { setLoading } from '../../redux/ducks/loading'

import { RootState } from '../../redux/rootReducer'

import {
  LoginContainer,
  LoginForm,
  LoginCDA,
  SmallText,
  CDAText,
} from './elements'

const Login = () => {
  const [apiError, setApiError] = useState('')
  const [CDA, setCDA] = useState<boolean>(false)
  const { secretToken } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    if (secretToken) {
      navigate('/my-schemes')
    }
  }, [secretToken])

  const formInitialValues = {
    username: '',
    password: '',
    user_type: 'splitmaster',
  }

  type LoginValues = typeof formInitialValues

  const handleSubmit = async (values: LoginValues) => {
    let userType = 'splitmaster'
    if (CDA === true) {
      userType = 'cda'
    }

    const userData = {
      username: values.username,
      password: values.password,
      user_type: userType,
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
        dispatch(setUserId(response.data.user.id))
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
      {({ values, errors, touched, handleChange, handleSubmit }) => (
        <LoginForm onSubmit={handleSubmit}>
          {CDA ? (
            <SubTitle>Login with your CDA account</SubTitle>
          ) : (
            <SubTitle>Login with your Splitcoin account</SubTitle>
          )}
          <LoginContainer>
            <Input
              label='Username'
              name='username'
              value={values.username}
              onChange={handleChange}
              type='text'
              error={touched.username && errors.username ? errors.username : ''}
            />
            <Input
              label='Password'
              name='password'
              value={values.password}
              onChange={handleChange}
              type='password'
              error={touched.password && errors.password ? errors.password : ''}
            />
            <LinkToInputs to='/forgot'>Forgot Password</LinkToInputs>
            <Error>{apiError}</Error>
            <Button type='submit' margin='0 0 20px 0'>
              Login
            </Button>
            <Link to='/sign-up'>Create an account</Link>

            <SmallText> or login with CDA </SmallText>
            <LoginCDA
              type='button'
              hover={CDA}
              onClick={() => {
                setCDA(last => !last)
              }}
            >
              {CDA ? (
                <>
                  <CDAText>Alright to login with CDA</CDAText>
                  <TiTick size={25} />
                </>
              ) : (
                <>
                  <CDAText>Capital Digital Aberto</CDAText>
                  <RiBankLine size={25} />
                </>
              )}
            </LoginCDA>
          </LoginContainer>
        </LoginForm>
      )}
    </Formik>
  )
}

export default Login
