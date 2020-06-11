import React, { useState } from 'react'
import Title, { SubTitle } from '../../components/Title'
import { useDispatch } from 'react-redux'
import { Formik, FormikErrors } from 'formik'
import { navigate } from '@reach/router'
import Button from '../../components/Button'
import Input from '../../components/Input';
import {
  Form,
  Container,
} from './elements'
import Api from '../../Api';
import { setUsername } from '../../redux/ducks/username'



const Username = () => {
  const [usernameError, setUsernameError] = useState('')

  const dispatch = useDispatch()
  const formInitialValues = {
    username: '',
  }

  const handleSubmit = async (values: any) => {
    dispatch(setUsername(values.username))
    navigate('/details')
  }

  return (
    <Formik
      initialValues={formInitialValues}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Title>Enter the Github username</Title>
          <Container>
            <Input
              label="Username"
              name='username'
              value={values.username}
              onChange={handleChange}
              type='text'
              error={touched.username && errors.username ? errors.username : ''}
            />
            <Button type='submit' margin='0 0 20px 0'>
              Enter
            </Button>
          </Container>
        </Form>
      )}
    </Formik>
  )
}

export default Username
