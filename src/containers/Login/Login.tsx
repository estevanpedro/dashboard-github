import React, { useState } from 'react'

import Button from '../../components/Button'
import Input from '../../components/Input'
import Link from '../../components/Link'
import { SubTitle } from '../../components/Title'

import Api from '../../Api'

import { LoginContainer, LoginForm } from './elements'

const Login = () => {
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (loginValidation()) {
      setEmailError('')
      setPasswordError('')

      const userData = {
        email: emailValue,
        password: passwordValue,
      }
      // TODO: send data to the backend
      try {
        const response = await Api.login(userData)
        console.log(response)
      } catch (e) {
        console.error(e)
      }
    }
  }

  const loginValidation = () => {
    // TODO: improve validation
    let isValid = true

    if (!emailValue.length) {
      setEmailError('Your username needs to have at least 3 characters')
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
          label='Email'
          value={emailValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmailValue(e.target.value)
          }
          type='email'
          error={emailError}
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
