import React from 'react'
import { fireEvent, screen, wait } from '@testing-library/react'

import { TitleType } from '../containers/SchemeMap/options'
import { FormData } from '../containers/SchemeMap/NodeMenu/Forms/types'

import { render } from './testUtils'

import SwapForm from '../containers/SchemeMap/NodeMenu/Forms/SwapForm'

describe('SwapForm', () => {
  it('should correctly change form values', async () => {
    render(<SwapForm onConfirm={() => {}} />)

    const nameValue = screen.getByLabelText(/name/i)

    expect(nameValue).toHaveValue('Swap')

    await wait(() => {
      fireEvent.change(nameValue, { target: { value: 'Test Name' } })
    })

    expect(nameValue).toHaveValue('Test Name')
  })

  it('should output errros correctly when the form is not valid', async () => {
    render(<SwapForm onConfirm={() => {}} />)
    const nameValue = screen.getByLabelText(/name/i)

    const errors = screen.getAllByTestId('errorMessage')

    await wait(() => {
      fireEvent.click(screen.getByText(/confirm/i))
    })

    expect(errors[0]).toHaveTextContent('')

    await wait(() => {
      fireEvent.change(nameValue, { target: { value: '' } })
    })

    expect(errors[0]).toHaveTextContent("Name can't be empty")
  })

  it('should send correct information on confirm', async () => {
    const mockConfirm = jest.fn((title: TitleType, data: FormData) => data)

    render(<SwapForm onConfirm={mockConfirm} />)

    const nameValue = screen.getByLabelText(/name/i)

    await wait(() => {
      fireEvent.change(nameValue, { target: { value: 'Test Name' } })

      fireEvent.click(screen.getByText(/confirm/i))
    })

    expect(mockConfirm).toHaveBeenCalled()
    expect(mockConfirm).toReturnWith({
      type: 'swap',
      name: 'Test Name',
    })
  })
})
