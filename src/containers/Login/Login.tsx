import React, { useState } from 'react'

import Button from '../../components/Button'
import Input from '../../components/Input'
import Link from '../../components/Link'
import { SubTitle } from '../../components/Title'

import { LoginContainer, LoginForm } from './elements'

const Login = () => {
  const [usernameValue, setUsernameValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [usernameError, setUsernameError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (loginValidation()) {
      setUsernameError('')
      setPasswordError('')

      const userData = {
        username: usernameValue,
        password: passwordValue,
      }

      console.log(userData)
      // TODO: send data to the backend
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
        <Button type='submit' margin='0 0 20px 0'>
          Login
        </Button>
        <Link>Create an account</Link>
      </LoginForm>
    </LoginContainer>
  )
}

export default Login
