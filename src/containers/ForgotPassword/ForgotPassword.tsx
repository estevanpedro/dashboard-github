import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { navigate } from '@reach/router'

import { setLoading } from '../../redux/ducks/loading'

import { Title, Button, Input } from '../../components'

import Api from '../../Api'

import { ForgotContainer } from './elements'

const ResetPassword = () => {
  const [email, setEmail] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = async (email: string) => {
    try {
      dispatch(setLoading(true))
      const response = await Api.forgotPassword(email)
      dispatch(setLoading(false))

      if (response.data.message) {
        navigate('/reset')
      }
    } catch (err) {
      dispatch(setLoading(false))
      console.error(err)
    }
  }

  return (
    <ForgotContainer>
      <Title>Change your password</Title>

      <Input
        type='text'
        label='Email'
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
      <Button
        onClick={() => {
          handleSubmit(email)
        }}
        margin='0 0 20px 0'
      >
        Confirm
      </Button>
    </ForgotContainer>
  )
}

export default ResetPassword
