import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { InputContainer } from './elements'

import { RootState } from '../../../redux/rootReducer'

import { addSplit, removeSplit } from '../../../redux/ducks/nodeOptions/split'

import {
  updateNameValue,
  updateHoursValue,
  updateMinutesValue,
  updateSecondsValue,
} from '../../../redux/ducks/nodeOptions/timer'

import {
  addEmail,
  removeEmail,
  updateEmail,
} from '../../../redux/ducks/nodeOptions/notify'

import IconButton from '../../../components/IconButton'
import Input from '../../../components/Input'
import FlexContainer from '../../../components/FlexContainer'
import Slider from '../../../components/Slider'
import Text from '../../../components/Text'

import minus from '../../../assets/icons/minus.svg'
import plus from '../../../assets/icons/plus.svg'

export const SplitContent = () => {
  return (
    <>
      <h1>SplitContent</h1>
      <Slider value={0} maxValue={100} onChange={() => {}} />
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

export const NotifyContent = () => {
  const { emails } = useSelector((state: RootState) => state.notify)
  const dispatch = useDispatch()

  return (
    <FlexContainer direction='column' height='500px'>
      <InputContainer>
        {emails.map((email, i) => (
          <FlexContainer
            key={email.id}
            width='100%'
            justify='space-between'
            align='center'
            margin='0 0 50px 0'
          >
            <Input
              label={`Email ${i + 1}`}
              value={email.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(updateEmail({ id: email.id, email: e.target.value }))
              }
              type='email'
              width='85%'
              marginBottom={1}
            />
            {i > 0 && (
              <IconButton
                icon={minus}
                onClick={() => dispatch(removeEmail(email.id))}
                margin='0 5px 0 0'
              />
            )}
          </FlexContainer>
        ))}
      </InputContainer>

      <IconButton icon={plus} onClick={() => dispatch(addEmail())} />
    </FlexContainer>
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
