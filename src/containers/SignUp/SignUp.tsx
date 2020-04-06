import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { navigate } from '@reach/router'

import Button from '../../components/Button'
import Input from '../../components/Input'
import Link from '../../components/Link'
import Title from '../../components/Title'

import Error from '../../components/Error'

import Api from '../../Api'
import { changeSecretToken } from '../../redux/ducks/auth'

import { SignUpContainer, SignUpForm, ReturnText } from './elements'

const SignUp = () => {
  const [fullNameValue, setFullNameValue] = useState('')
  const [usernameValue, setUsernameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('')

  const [fullNameError, setFullNameError] = useState('')
  const [userNameError, setUsernameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [apiError, setApiError] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (signUpvalidation()) {
      setFullNameError('')
      setUsernameError('')
      setEmailError('')
      setPasswordError('')

      const signUpData = {
        fullname: fullNameValue,
        email: emailValue,
        username: usernameValue,
        password: passwordValue,
      }
      try {
        const response = await Api.UserSignup(signUpData)
        if (response.data.error) {
          setApiError(response.data.error)
        }
        if (response.data.acess_token) {
          console.log('response.access_token: ', response.data.acess_token)
          dispatch(changeSecretToken(response.data.acess_token))
          navigate('/profile')
        }
      } catch (e) {
        console.error(e)
      }
    }
  }


  const signUpvalidation = () => {
    // TODO: improve signup validation
    let isValid = true

    if (fullNameValue.length < 3) {
      setFullNameError('Your name must be bigger than three characters')
    }

    if (!emailValue.length) {
      setEmailError('You must use a valid email')
    }

    if (usernameValue.length < 3) {
      setUsernameError('Your username needs to have at least 3 characters')
    }

    if (passwordValue.length < 3) {
      setPasswordError('Your password needs to have at least 6 characters')
    }

    if (passwordValue !== confirmPasswordValue) {
      setPasswordError('Your passwords must match')
    }

    return isValid
  }

  return (
    <SignUpContainer>
      <Title>Create an account</Title>
      <SignUpForm onSubmit={handleSubmit}>
        <Input
          label='Full Name'
          value={fullNameValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFullNameValue(e.target.value)
          }
          error={fullNameError}
          type='text'
        />
        <Input
          label='Username'
          value={usernameValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUsernameValue(e.target.value)
          }
          error={userNameError}
          type='text'
        />
        <Input
          label='Email'
          value={emailValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmailValue(e.target.value)
          }
          error={emailError}
          type='email'
        />
        <Input
          label='Password'
          value={passwordValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPasswordValue(e.target.value)
          }
          error={passwordError}
          type='password'
        />
        <Input
          label='Confirm Password'
          value={confirmPasswordValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setConfirmPasswordValue(e.target.value)
          }
          type='password'
        />
        <Error>{apiError}</Error>
        <Button onClick={() => { }} type='submit'>Create now</Button>
        <ReturnText size='regular'>
          If you already have an account, <Link to='/login'>login</Link>
        </ReturnText>
      </SignUpForm>
    </SignUpContainer>
  )
}

export default SignUp
