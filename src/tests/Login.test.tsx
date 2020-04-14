import React from 'react'
import { fireEvent, screen, wait } from '@testing-library/react'

import { render } from './testUtils'

import Login from '../containers/Login/Login'

// Testing
describe('Login', () => {
  it('should correctly change form values', async () => {
    render(<Login />)

    const usernameValue = screen.getByLabelText(/username/i)
    const passwordValue = screen.getByLabelText(/password/i)

    expect(usernameValue).toHaveValue('')
    expect(passwordValue).toHaveValue('')

    await wait(() => {
      fireEvent.change(usernameValue, { target: { value: 'test' } })
      fireEvent.change(passwordValue, { target: { value: '123456' } })
    })

    expect(usernameValue).toHaveValue('test')
    expect(passwordValue).toHaveValue('123456')
  })

  it('should output errors when the input is not valid', async () => {
    render(<Login />)

    const usernameValue = screen.getByLabelText(/username/i)
    const passwordValue = screen.getByLabelText(/password/i)

    await wait(() => {
      fireEvent.click(screen.getByRole('button'))
    })

    const errors = screen.getAllByTestId('errorMessage')

    expect(errors[0]).toHaveTextContent(
      'Your username needs to have at least 3 characters'
    )

    expect(errors[1]).toHaveTextContent(
      'Your password needs to have at least 6 characters'
    )

    await wait(() => {
      fireEvent.change(usernameValue, { target: { value: 'test' } })
      fireEvent.change(passwordValue, { target: { value: '123456' } })
    })

    expect(errors[0]).toHaveTextContent('')
    expect(errors[1]).toHaveTextContent('')
  })
})
