import React, { useState } from 'react'
import Title, { SubTitle } from '../../components/Title'
import Button from '../../components/Button'
import { Text, TextMargin, ForgotForm, ForgotContainer } from './elements'
import Link from '../../components/Link'
import Input from '../../components/Input'
import Api from '../../Api'
import { navigate } from '@reach/router'

const ResetPassword = () => {

    const [email, setEmail] = useState('')

    const handleSubmit = async (email: any) => {
        try {
            const response = await Api.forgotPassword(email)
            console.log('response', response)
            if (response.data.message) {
                navigate('/reset')
            }
        } catch (e) {
            console.error(e)
        }
    }


    return (
        <ForgotContainer onSubmit={handleSubmit}>

            <Title>Change your password</Title>

            <Input
                type='text'
                label='Email'
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
            <Button onClick={() => { handleSubmit(email) }} margin='0 0 20px 0'>
                Confirm
                </Button>
        </ForgotContainer>
    )
}

export default ResetPassword