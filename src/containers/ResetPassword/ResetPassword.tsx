import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { navigate } from '@reach/router'

import { setLoading } from '../../redux/ducks/loading'

import { Title, Button, Input } from '../../components'

import Api from '../../Api'

import { Text, ForgotContainer } from './elements'

const ResetPassword = () => {
  const [reset_token, setReset_token] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = async (reset_token: string, password: string) => {
    try {
      dispatch(setLoading(true))
      const response = await Api.resetPassword(reset_token, password)
      dispatch(setLoading(false))

      if (response.data) {
        navigate('/login')
      }
    } catch (err) {
      dispatch(setLoading(false))
      console.error(err)
    }
  }

  return (
    <ForgotContainer>
      <Title>New Password</Title>

      <Input
        type='text'
        label='Token'
        value={reset_token}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setReset_token(e.target.value)
        }
      />
      <Input
        type='text'
        label='Password'
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
      />
      <Button
        onClick={() => {
          handleSubmit(reset_token, password)
        }}
        margin='0 0 20px 0'
      >
        Confirm
      </Button>
      <Text>Check your e-mail to get the token.</Text>
    </ForgotContainer>
  )
}

export default ResetPassword
