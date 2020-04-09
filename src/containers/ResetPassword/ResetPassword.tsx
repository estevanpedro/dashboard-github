import React, { useState } from 'react'
import Title, { SubTitle } from '../../components/Title'
import Button from '../../components/Button'
import { Text, TextMargin, ForgotForm, ForgotContainer } from './elements'
import Link from '../../components/Link'
import Input from '../../components/Input'
import Api from '../../Api'
import { navigate } from '@reach/router'

const ResetPassword = () => {
    const [reset_token, setReset_token] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (reset_token: any, password: any) => {

        try {
            const response = await Api.resetPassword(reset_token, password)
            if (response.data) {
                navigate('/login')
            }
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <ForgotContainer>
            <Title>New Password</Title>

            <Input
                type='text'
                label='Token'
                value={reset_token}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setReset_token(e.target.value)}
            />
            <Input
                type='text'
                label='Password'
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            />
            <Button onClick={() => { handleSubmit(reset_token, password) }} margin='0 0 20px 0'>
                Confirm
                </Button>
            <Text>Check your e-mail to get the token.</Text>
        </ForgotContainer>
    )
}

export default ResetPassword