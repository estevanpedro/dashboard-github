import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { OverflowContainer, SplitContainer } from './elements'

import { RootState } from '../../../redux/rootReducer'

import {
  addSplit,
  removeSplit,
  updateSplitName,
  updateSplitAddress,
  updateAddressName,
  updateAddressValue,
  updateAddressShare,
} from '../../../redux/ducks/nodeOptions/split'

import {
  updateTimerName,
  updateHoursValue,
  updateMinutesValue,
  updateSecondsValue,
} from '../../../redux/ducks/nodeOptions/timer'

import {
  updateNotifyName,
  addEmail,
  removeEmail,
  updateEmail,
} from '../../../redux/ducks/nodeOptions/notify'

import {
  updateSendName,
  addSend,
  removeSend,
  updateSendAddressName,
  updateSendAddress,
  updateSendValue,
  updateSendPercentage,
} from '../../../redux/ducks/nodeOptions/send'

import IconButton from '../../../components/IconButton'
import Input from '../../../components/Input'
import FlexContainer from '../../../components/FlexContainer'
import Title, { SubTitle } from '../../../components/Title'
import Slider from '../../../components/Slider'
import Line from '../../../components/Line'

import minus from '../../../assets/icons/minus.svg'
import plus from '../../../assets/icons/plus.svg'

export const SplitContent = () => {
  const { name, splitAddress, splits } = useSelector(
    (state: RootState) => state.split
  )
  const dispatch = useDispatch()

  return (
    <FlexContainer direction='column' width='100%' justify='space-between'>
      <Input
        label='Split Name'
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(updateSplitName(e.target.value))
        }
        type='text'
        width='100'
      />
      <FlexContainer
        width='100%'
        height='80px'
        justify='space-between'
        align='center'
      >
        <SubTitle>Split List</SubTitle>
        <IconButton icon={plus} onClick={() => dispatch(addSplit())} />
      </FlexContainer>
      <OverflowContainer>
        {splits.map((split, i) => (
          <SplitContainer key={split.id}>
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
              label={'Name'}
              value={split.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(
                  updateAddressName({ id: split.id, name: e.target.value })
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
                    updateAddressShare({ id: split.id, share: Number(value) })
                  )
                }}
                formatLabel={value => `${value}%`}
              />
            </FlexContainer>
          </SplitContainer>
        ))}
      </OverflowContainer>
    </FlexContainer>
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
          dispatch(updateTimerName(e.target.value))
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
  const { name, emails } = useSelector((state: RootState) => state.notify)
  const dispatch = useDispatch()

  return (
    <FlexContainer direction='column' width='100%'>
      <Input
        label='Name'
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(updateNotifyName(e.target.value))
        }
        type='text'
        width='100%'
      />
      <FlexContainer
        width='100%'
        height='80px'
        justify='space-between'
        align='center'
      >
        <SubTitle>Email list</SubTitle>
        <IconButton
          icon={plus}
          onClick={() => dispatch(addEmail())}
          margin='0 0 20px 0'
        />
      </FlexContainer>
      <OverflowContainer>
        {emails.map((email, i) => (
          <FlexContainer
            key={email.id}
            width='100%'
            justify='space-between'
            align='center'
            margin='0 0 50px 0'
          >
            <FlexContainer padding='20px' width='100%' justify='flex-start'>
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
            </FlexContainer>
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
    </FlexContainer>
  )
}

export const SendContent = () => {
  const { name, addresses } = useSelector((state: RootState) => state.send)
  const dispatch = useDispatch()

  return (
    <FlexContainer direction='column' width='100%' justify='space-between'>
      <Input
        label='Name'
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(updateSendName(e.target.value))
        }
        type='text'
        width='100%'
      />
      <FlexContainer
        width='100%'
        height='80px'
        justify='space-between'
        align='center'
      >
        <SubTitle>Send list</SubTitle>
        <IconButton
          icon={plus}
          onClick={() => dispatch(addSend())}
          margin='0 0 20px 0'
        />
      </FlexContainer>
      <OverflowContainer>
        {addresses.map((address, i) => (
          <SplitContainer key={address.id}>
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
                  onClick={() => dispatch(removeSend(address.id))}
                />
              )}
            </FlexContainer>
            <Input
              label='Name'
              value={address.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(
                  updateSendAddressName({
                    id: address.id,
                    name: e.target.value,
                  })
                )
              }
              type='text'
              width='100%'
            />
            <Input
              label={`Address`}
              value={address.address}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(
                  updateSendAddress({
                    id: address.id,
                    address: e.target.value,
                  })
                )
              }
              type='text'
              width='100%'
            />
            <Input
              label={`Value`}
              value={String(address.value)}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(
                  updateSendValue({
                    id: address.id,
                    value: Number(e.target.value),
                  })
                )
              }
              type='number'
              width='100%'
            />
            <FlexContainer align='center'>
              <Slider
                minValue={0}
                maxValue={100}
                value={address.percentage}
                onChange={value => {
                  dispatch(
                    updateSendPercentage({
                      id: address.id,
                      percentage: Number(value),
                    })
                  )
                }}
                formatLabel={value => `${value}%`}
              />
            </FlexContainer>
          </SplitContainer>
        ))}
      </OverflowContainer>
    </FlexContainer>
  )
}

export const SwapContent = () => {
  return (
    <>
      <h1>[WIP]</h1>
    </>
  )
}

export const EventContent = () => {
  return (
    <>
      <h1>[WIP]</h1>
    </>
  )
}

export const EditContent = () => {
  return (
    <>
      <h1>[WIP]</h1>
    </>
  )
}

export const DeleteContent = () => {
  return <></>
}