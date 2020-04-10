import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { navigate } from '@reach/router'

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
  const [usernameValue, setUsernameValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [usernameError, setUsernameError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [apiError, setApiError] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (loginValidation()) {
      setUsernameError('')
      setPasswordError('')

      const userData = {
        username: usernameValue,
        password: passwordValue,
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
  }

  const loginValidation = () => {
    // TODO: improve validation
    let isValid = true

    if (!usernameValue.length) {
      setUsernameError('Your username needs to have at least 3 characters')
      isValid = false
    }

    if (!passwordValue.length) {
      setPasswordError('Your password needs to have at least 6 characters')
      isValid = false
    }

    return isValid
  }

  return (
    <LoginContainer onSubmit={handleSubmit}>
      <SubTitle>Login with your Splitcoin account</SubTitle>
      <LoginForm>
        <Input
          label='Username'
          value={usernameValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUsernameValue(e.target.value)
          }
          type='text'
          error={usernameError}
        />
        <Input
          label='Password'
          value={passwordValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPasswordValue(e.target.value)
          }
          type='password'
          error={passwordError}
        />
        <LinkToInputs to='/forgot'>Forgot Password</LinkToInputs>
        <Error>{apiError}</Error>
        <Button type='submit' margin='0 0 20px 0'>
          Login
        </Button>
        <Link to='/sign-up'>Create an account</Link>
      </LoginForm>
    </LoginContainer>
  )
}

export default Login
