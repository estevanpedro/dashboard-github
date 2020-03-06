import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { OverflowContainer } from './elements'

import { RootState } from '../../../redux/rootReducer'

import {
  addSplit,
  removeSplit,
  updateSplitAddress,
  updateSplitShare,
} from '../../../redux/ducks/nodeOptions/split'

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
import Line from '../../../components/Line'
import FlexContainer from '../../../components/FlexContainer'
import { SubTitle } from '../../../components/Title'
import Slider from '../../../components/Slider'

import minus from '../../../assets/icons/minus.svg'
import plus from '../../../assets/icons/plus.svg'

export const SplitContent = () => {
  const { splits } = useSelector((state: RootState) => state.split)
  const dispatch = useDispatch()

  return (
    <>
      <OverflowContainer>
        {splits.map((split, i) => (
          <>
            <FlexContainer
              width='100%'
              justify='space-between'
              padding='0 5px 0 0'
            >
              <SubTitle>{`Address ${i + 1}`}</SubTitle>
              {i > 0 && (
                <IconButton
                  margin='30px 0'
                  icon={minus}
                  onClick={() => dispatch(removeSplit(split.id))}
                />
              )}
            </FlexContainer>

            <Input
              label={`Address`}
              value={split.address}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(
                  updateSplitAddress({ id: split.id, address: e.target.value })
                )
              }
              type='text'
              width='100%'
            />
            <FlexContainer align='center'>
              <Slider
                minValue={0}
                maxValue={100}
                value={split.share}
                onChange={value => {
                  dispatch(
                    updateSplitShare({ id: split.id, share: Number(value) })
                  )
                }}
                formatLabel={value => `${value}%`}
              />
            </FlexContainer>

            <Line margin='40px 0' />
          </>
        ))}
      </OverflowContainer>
      <IconButton icon={plus} onClick={() => dispatch(addSplit())} />
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
          min={0}
        />
        <Input
          label='Minutes'
          value={String(minutes)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch(updateMinutesValue(Number(e.target.value)))
          }
          type='number'
          width={'100px'}
          min={0}
        />
        <Input
          label='Seconds'
          value={String(seconds)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch(updateSecondsValue(Number(e.target.value)))
          }
          type='number'
          width={'100px'}
          min={0}
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
      <OverflowContainer>
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
      </OverflowContainer>

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
