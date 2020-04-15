import React from 'react'
import { fireEvent, screen, wait } from '@testing-library/react'

import { render } from './testUtils'

import SignUp from '../containers/SignUp'

describe('SignUp', () => {
  it('should correctly change form values', async () => {
    render(<SignUp />)

    const fullNameValue = screen.getByLabelText(/^full name/i)
    const usernameValue = screen.getByLabelText(/^username/i)
    const emailValue = screen.getByLabelText(/^email/i)
    const passwordValue = screen.getByLabelText(/^password/i)
    const confirmPasswordValue = screen.getByLabelText(/^confirm password/i)

    expect(fullNameValue).toHaveValue('')
    expect(usernameValue).toHaveValue('')
    expect(emailValue).toHaveValue('')
    expect(passwordValue).toHaveValue('')
    expect(confirmPasswordValue).toHaveValue('')

    await wait(() => {
      fireEvent.change(fullNameValue, { target: { value: 'Test Name' } })
      fireEvent.change(usernameValue, { target: { value: 'Test Username' } })
      fireEvent.change(emailValue, { target: { value: 'test@test.com' } })
      fireEvent.change(passwordValue, { target: { value: '123456' } })
      fireEvent.change(confirmPasswordValue, { target: { value: '123456' } })
    })

    expect(fullNameValue).toHaveValue('Test Name')
    expect(usernameValue).toHaveValue('Test Username')
    expect(emailValue).toHaveValue('test@test.com')
    expect(passwordValue).toHaveValue('123456')
    expect(confirmPasswordValue).toHaveValue('123456')
  })

  it('should output errros correctly when the form is not valid', async () => {
    render(<SignUp />)

    const fullNameValue = screen.getByLabelText(/^full name/i)
    const usernameValue = screen.getByLabelText(/^username/i)
    const emailValue = screen.getByLabelText(/^email/i)
    const passwordValue = screen.getByLabelText(/^password/i)
    const confirmPasswordValue = screen.getByLabelText(/^confirm password/i)
    const errors = screen.getAllByTestId('errorMessage')

    await wait(() => {
      fireEvent.change(fullNameValue, { target: { value: 'T' } })
      fireEvent.change(usernameValue, { target: { value: 'T' } })
      fireEvent.change(emailValue, { target: { value: '' } })
      fireEvent.change(passwordValue, { target: { value: '123' } })
      fireEvent.change(confirmPasswordValue, { target: { value: '1234' } })
      fireEvent.click(screen.getByRole('button'))
    })

    expect(errors[0]).toHaveTextContent(
      'Your name needs to have at least 3 characters'
    )
    expect(errors[1]).toHaveTextContent(
      'Your username needs to have at least 3 characters'
    )
    expect(errors[2]).toHaveTextContent('You must use a valid email')
    expect(errors[3]).toHaveTextContent('Your passwords must match')

    await wait(() => {
      fireEvent.change(fullNameValue, { target: { value: 'Test Name' } })
      fireEvent.change(usernameValue, { target: { value: 'Test Username' } })
      fireEvent.change(emailValue, { target: { value: 'test@test.com' } })
      fireEvent.change(passwordValue, { target: { value: '123456' } })
      fireEvent.change(confirmPasswordValue, { target: { value: '123456' } })
    })

    expect(errors[0]).toHaveTextContent('')
    expect(errors[1]).toHaveTextContent('')
    expect(errors[2]).toHaveTextContent('')
    expect(errors[3]).toHaveTextContent('')
  })
})
