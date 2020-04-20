import React from 'react'
import { fireEvent, screen, wait } from '@testing-library/react'

import { TitleType } from '../containers/SchemeMap/SchemeNode/options'
import { FormData } from '../containers/SchemeMap/NodeMenu/Forms/types'

import { render } from './testUtils'

import SendForm from '../containers/SchemeMap/NodeMenu/Forms/SendForm'

describe('SendForm', () => {
  it('should correctly change form values', async () => {
    render(<SendForm onConfirm={() => {}} />)

    const nameValue = screen.getByLabelText(/^send name/i)
    const addressNameValues = screen.getAllByLabelText(/^address name/i)
    const addressValueValues = screen.getAllByLabelText(/address value/i)
    const values = screen.getAllByLabelText(/^value to be sent/i)

    expect(nameValue).toHaveValue('Send')
    expect(addressNameValues[0]).toHaveValue('Address 1')
    expect(addressValueValues[0]).toHaveValue('')
    expect(values[0]).toHaveValue(0)

    await wait(() => {
      fireEvent.change(nameValue, { target: { value: 'Test Name' } })
      fireEvent.change(addressNameValues[0], {
        target: { value: 'Address Test Name' },
      })
      fireEvent.change(addressValueValues[0], {
        target: { value: '1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2' },
      })
      fireEvent.change(values[0], {
        target: { value: 1 },
      })
    })

    expect(nameValue).toHaveValue('Test Name')
    expect(addressNameValues[0]).toHaveValue('Address Test Name')
    expect(addressValueValues[0]).toHaveValue(
      '1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2'
    )
    expect(values[0]).toHaveValue(1)
  })

  it('should add an address correctly', async () => {
    render(<SendForm onConfirm={() => {}} />)

    await wait(() => {
      fireEvent.click(screen.getByText(/add address/i))
    })

    const addressNameValues = screen.getAllByLabelText(/^address name/i)

    expect(addressNameValues).toHaveLength(2)
    expect(addressNameValues[1]).toHaveValue('Address 2')
  })

  it('should remove an address correctly', async () => {
    render(<SendForm onConfirm={() => {}} />)

    await wait(() => {
      fireEvent.click(screen.getByText(/add address/i))
      fireEvent.click(screen.getByText(/remove/i))
    })

    const addressNameValues = screen.getAllByLabelText(/^address name/i)

    expect(addressNameValues).toHaveLength(1)
  })

  it('should output errros correctly when the form is not valid', async () => {
    render(<SendForm onConfirm={() => {}} />)

    const nameValue = screen.getByLabelText(/^send name/i)
    const errors = screen.getAllByTestId('errorMessage')

    await wait(() => {
      fireEvent.change(nameValue, { target: { value: '' } })
      fireEvent.click(screen.getByText(/confirm/i))
    })

    expect(errors[0]).toHaveTextContent("Name can't be empty")
  })

  it('should send correct information on confirm', async () => {
    const mockConfirm = jest.fn((title: TitleType, data: FormData) => data)

    render(<SendForm onConfirm={mockConfirm} />)

    await wait(() => {
      fireEvent.click(screen.getByText(/add address/i))
    })

    const nameValue = screen.getByLabelText(/^send name/i)
    const addressNameValues = screen.getAllByLabelText(/^address name/i)
    const addressValueValues = screen.getAllByLabelText(/address value/i)
    const values = screen.getAllByLabelText(/^value to be sent/i)

    await wait(() => {
      fireEvent.change(nameValue, { target: { value: 'Test Name' } })
      fireEvent.change(addressNameValues[0], {
        target: { value: 'Address Test Name' },
      })
      fireEvent.change(addressValueValues[0], {
        target: { value: '1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2' },
      })
      fireEvent.change(values[0], {
        target: { value: 1 },
      })
      fireEvent.click(screen.getByText(/confirm/i))
    })

    expect(mockConfirm).toHaveBeenCalled()
    expect(mockConfirm).toReturnWith({
      type: 'send',
      name: 'Test Name',
      addresses: [
        {
          name: 'Address Test Name',
          address: '1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2',
          percentage: 100,
          value: 1,
        },
        {
          name: 'Address 2',
          address: '',
          percentage: 0,
          value: 0,
        },
      ],
    })
  })
})
