import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '../../../redux/rootReducer'

import { addSplit, removeSplit } from '../../../redux/ducks/nodeOptions/split'
import {
  updateNameValue,
  updateHoursValue,
  updateMinutesValue,
  updateSecondsValue,
} from '../../../redux/ducks/nodeOptions/timer'

import Input from '../../../components/Input'
import FlexContainer from '../../../components/FlexContainer'
import Text from '../../../components/Text'

export const SplitContent = () => {
  return (
    <>
      <h1>SplitContent</h1>
    </>
  )
}

export const TimerContent = () => {
  const { name, hours, minutes, seconds } = useSelector(
    (state: RootState) => state.timer
  )
  const dispatch = useDispatch()

  return (
    <>
      <Input
        label='Name'
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(updateNameValue(e.target.value))
        }
        type='text'
        width={'100%'}
      />
      <FlexContainer width='100%' justify='space-between'>
        <Input
          label='Hours'
          value={String(hours)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch(updateHoursValue(Number(e.target.value)))
          }
          type='number'
          width={'100px'}
        />
        <Input
          label='Minutes'
          value={String(minutes)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch(updateMinutesValue(Number(e.target.value)))
          }
          type='number'
          width={'100px'}
        />
        <Input
          label='Seconds'
          value={String(seconds)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch(updateSecondsValue(Number(e.target.value)))
          }
          type='number'
          width={'100px'}
        />
      </FlexContainer>
    </>
  )
}

export const NotificationContent = () => {
  return (
    <>
      <h1>NotificationContent</h1>
    </>
  )
}

export const SendContent = () => {
  return (
    <>
      <h1>SendContent </h1>
    </>
  )
}

export const SwapContent = () => {
  return (
    <>
      <h1>SwapContent</h1>
    </>
  )
}

export const EventContent = () => {
  return (
    <>
      <h1>EventContent</h1>
    </>
  )
}

export const EditContent = () => {
  return (
    <>
      <h1>EditContent</h1>
    </>
  )
}
