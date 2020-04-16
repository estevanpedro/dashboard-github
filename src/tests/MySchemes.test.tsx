import React from 'react'
import { fireEvent, screen, wait } from '@testing-library/react'

import { render } from './testUtils'

import MySchemes from '../containers/MySchemes/MySchemes'

describe('MyScehemes', () => {
  it('should open new scheme modal', async () => {
    render(<MySchemes />)

    expect(screen.queryByTestId('newSchemeModal')).toBeNull()

    await wait(() => {
      fireEvent.click(screen.getByText('New Scheme'))
    })

    expect(screen.queryByTestId('newSchemeModal')).toBeInTheDocument()
  })

  it('should correctly change form values from the New Scheme modal', async () => {
    render(<MySchemes />)

    await wait(() => {
      fireEvent.click(screen.getByText('New Scheme'))
    })

    const schemeNameValue = screen.getByLabelText(/^scheme name/i)
    const payoutValue = screen.getByLabelText(/^payout/i)
    const privateSelector = screen.getByLabelText('Private or Public?')

    expect(schemeNameValue).toHaveValue('')
    expect(payoutValue).toHaveValue(0.1)
    expect(privateSelector).toHaveValue('public')

    await wait(() => {
      fireEvent.change(schemeNameValue, { target: { value: 'Test name' } })
      fireEvent.change(payoutValue, { target: { value: 0.008 } })
      fireEvent.change(privateSelector, { target: { value: 'private' } })
    })

    expect(schemeNameValue).toHaveValue('Test name')
    expect(payoutValue).toHaveValue(0.008)
    expect(privateSelector).toHaveValue('private')
  })

  it('should output errors correctly when the form is not valid', async () => {
    render(<MySchemes />)

    await wait(() => {
      fireEvent.click(screen.getByText('New Scheme'))
    })

    const schemeNameValue = screen.getByLabelText(/^scheme name/i)
    const payoutValue = screen.getByLabelText(/^payout/i)

    await wait(() => {
      fireEvent.change(schemeNameValue, { target: { value: '' } })
      fireEvent.change(payoutValue, { target: { value: 0 } })
      fireEvent.click(screen.getByText('Create'))
    })

    const errors = screen.getAllByTestId('errorMessage')

    expect(errors[0]).toHaveTextContent("Name can't be empty!")
    expect(errors[1]).toHaveTextContent('Payout has to be more than zero!')

    await wait(() => {
      fireEvent.change(schemeNameValue, { target: { value: 'Valid name' } })
      fireEvent.change(payoutValue, { target: { value: 0.1 } })
    })

    expect(errors[0]).toHaveTextContent('')
    expect(errors[1]).toHaveTextContent('')
  })
})
