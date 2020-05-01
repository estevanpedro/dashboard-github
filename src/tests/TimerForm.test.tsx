import React from 'react'
import { fireEvent, screen, wait } from '@testing-library/react'

import { TitleType } from '../containers/SchemeMap/options'
import { FormData } from '../containers/SchemeMap/NodeMenu/Forms/types'

import { render } from './testUtils'

import TimerForm from '../containers/SchemeMap/NodeMenu/Forms/TimerForm'

describe('TimerForm', () => {
  it('should correctly change form values', async () => {
    render(<TimerForm onConfirm={() => {}} />)

    const nameValue = screen.getByLabelText(/name/i)
    const hoursValue = screen.getByLabelText(/hours/i)
    const minutesValue = screen.getByLabelText(/minutes/i)
    const secondsValue = screen.getByLabelText(/seconds/i)

    expect(nameValue).toHaveValue('Timer')
    expect(hoursValue).toHaveValue(0)
    expect(minutesValue).toHaveValue(0)
    expect(secondsValue).toHaveValue(0)

    await wait(() => {
      fireEvent.change(nameValue, { target: { value: 'Test Name' } })
      fireEvent.change(hoursValue, { target: { value: 1 } })
      fireEvent.change(minutesValue, { target: { value: 2 } })
      fireEvent.change(secondsValue, { target: { value: 3 } })
    })

    expect(nameValue).toHaveValue('Test Name')
    expect(hoursValue).toHaveValue(1)
    expect(minutesValue).toHaveValue(2)
    expect(secondsValue).toHaveValue(3)
  })

  it('should output errros correctly when the form is not valid', async () => {
    render(<TimerForm onConfirm={() => {}} />)
    const nameValue = screen.getByLabelText(/name/i)
    const hoursValue = screen.getByLabelText(/hours/i)
    const minutesValue = screen.getByLabelText(/minutes/i)
    const secondsValue = screen.getByLabelText(/seconds/i)
    const errors = screen.getAllByTestId('errorMessage')

    await wait(() => {
      fireEvent.click(screen.getByText(/confirm/i))
    })

    expect(errors[0]).toHaveTextContent('')
    expect(errors[4]).toHaveTextContent('Time should not be 0')

    await wait(() => {
      fireEvent.change(nameValue, { target: { value: '' } })
      fireEvent.change(hoursValue, { target: { value: 1 } })
      fireEvent.change(minutesValue, { target: { value: 2 } })
      fireEvent.change(secondsValue, { target: { value: 3 } })
    })

    expect(errors[0]).toHaveTextContent("Name can't be empty")
    expect(errors[4]).toHaveTextContent('')
  })

  it('should send correct information on confirm', async () => {
    const mockConfirm = jest.fn((title: TitleType, data: FormData) => data)

    render(<TimerForm onConfirm={mockConfirm} />)

    const nameValue = screen.getByLabelText(/name/i)
    const hoursValue = screen.getByLabelText(/hours/i)
    const minutesValue = screen.getByLabelText(/minutes/i)
    const secondsValue = screen.getByLabelText(/seconds/i)

    await wait(() => {
      fireEvent.change(nameValue, { target: { value: 'Test Name' } })
      fireEvent.change(hoursValue, { target: { value: 1 } })
      fireEvent.change(minutesValue, { target: { value: 2 } })
      fireEvent.change(secondsValue, { target: { value: 3 } })
      fireEvent.click(screen.getByText(/confirm/i))
    })

    expect(mockConfirm).toHaveBeenCalled()
    expect(mockConfirm).toReturnWith({
      type: 'timer',
      name: 'Test Name',
      info: { time: { hours: 1, minutes: 2, seconds: 3 } },
    })
  })
})
