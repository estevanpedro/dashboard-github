import React from 'react'
import { fireEvent, screen, wait } from '@testing-library/react'

import { TitleType } from '../containers/SchemeMap/SchemeNode/options'
import { FormData } from '../containers/SchemeMap/NodeMenu/Forms/types'

import { render } from './testUtils'

import NotifyForm from '../containers/SchemeMap/NodeMenu/Forms/NotifyForm'

describe('TimerForm', () => {
  it('should correctly change form values', async () => {
    render(<NotifyForm onConfirm={() => {}} />)

    const nameValue = screen.getByLabelText(/^name/i)
    const emailsValue = screen.getAllByLabelText(/^email/i)

    expect(nameValue).toHaveValue('Notify')
    expect(emailsValue[0]).toHaveValue('')

    await wait(() => {
      fireEvent.change(nameValue, { target: { value: 'Test Name' } })
      fireEvent.change(emailsValue[0], {
        target: { value: 'Testemail@test.com' },
      })
    })

    expect(nameValue).toHaveValue('Test Name')
    expect(emailsValue[0]).toHaveValue('Testemail@test.com')
  })

  it('should add an email correctly', async () => {
    render(<NotifyForm onConfirm={() => {}} />)

    await wait(() => {
      fireEvent.click(screen.getByText(/add email/i))
    })

    const emailsValue = screen.getAllByLabelText(/^email/i)

    expect(emailsValue).toHaveLength(2)
    expect(emailsValue[1]).toHaveValue('')
  })

  it('should remove an email correctly', async () => {
    render(<NotifyForm onConfirm={() => {}} />)

    await wait(() => {
      fireEvent.click(screen.getByText(/add email/i))
    })

    const emailsValue = screen.getAllByLabelText(/^email/i)

    expect(emailsValue).toHaveLength(2)

    await wait(() => {
      fireEvent.click(screen.getByText(/remove/i))
    })

    const newEmails = screen.getAllByLabelText(/^email/i)

    expect(newEmails).toHaveLength(1)
  })

  it('should output errros correctly when the form is not valid', async () => {
    render(<NotifyForm onConfirm={() => {}} />)

    await wait(() => {
      fireEvent.click(screen.getByText(/add email/i))
    })

    const nameValue = screen.getByLabelText(/name/i)
    const emailsValue = screen.getAllByLabelText(/^email/i)
    const errors = screen.getAllByTestId('errorMessage')

    await wait(() => {
      fireEvent.click(screen.getByText(/confirm/i))
    })

    expect(errors[0]).toHaveTextContent('')
    expect(errors[1]).toHaveTextContent("Email can't be empty")
    expect(errors[2]).toHaveTextContent("Email can't be empty")

    await wait(() => {
      fireEvent.change(nameValue, { target: { value: '' } })
      fireEvent.change(emailsValue[0], { target: { value: 'email@test.com' } })
    })

    expect(errors[0]).toHaveTextContent("Name can't be empty")
    expect(errors[1]).toHaveTextContent('')
    expect(errors[2]).toHaveTextContent("Email can't be empty")

    await wait(() => {
      fireEvent.change(emailsValue[1], { target: { value: 'email@test.com' } })
    })

    expect(errors[2]).toHaveTextContent('')
  })

  it('should send correct information on confirm', async () => {
    const mockConfirm = jest.fn((title: TitleType, data: FormData) => data)

    render(<NotifyForm onConfirm={mockConfirm} />)

    await wait(() => {
      fireEvent.click(screen.getByText(/add email/i))
    })

    const nameValue = screen.getByLabelText(/name/i)
    const emailsValue = screen.getAllByLabelText(/^email/i)

    await wait(() => {
      fireEvent.change(nameValue, { target: { value: 'Test Name' } })
      fireEvent.change(emailsValue[0], { target: { value: 'email1@test.com' } })
      fireEvent.change(emailsValue[1], { target: { value: 'email2@test.com' } })

      fireEvent.click(screen.getByText(/confirm/i))
    })

    expect(mockConfirm).toHaveBeenCalled()
    expect(mockConfirm).toReturnWith({
      type: 'notify',
      name: 'Test Name',
      info: { emails: ['email1@test.com', 'email2@test.com'] },
    })
  })
})
