import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { navigate } from '@reach/router'

import Button from '../../components/Button'
import Input from '../../components/Input'
import Link from '../../components/Link'
import Error from '../../components/Error'

import { SubTitle } from '../../components/Title'

import Api from '../../Api'

import { changeSecretToken } from '../../redux/ducks/auth'

import { LoginContainer, LoginForm } from './elements'

const Login = () => {
  const [usernameValue, setUsernameValue] = useState('estevanpedro')
  const [passwordValue, setPasswordValue] = useState('estevan')
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
        const response = await Api.login(userData)
        console.log('response login: ', response.data.message)
        if (response.data.error) {
          console.log('response.error: ', response.data.error)
          setApiError(response.error)
        }
        if (response.data.access_token) {
          console.log('response.access_token: ', response.data.access_token)
          dispatch(changeSecretToken(response.data.access_token))
          navigate('/my-schemes')
        }

      } catch (e) {
        console.error(e)
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
