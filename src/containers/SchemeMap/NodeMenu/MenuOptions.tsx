import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Button, FlexContainer, SubTitle, TextLink } from '../../../components'
import { RootState } from '../../../redux/rootReducer'

import options, { NodeOption, TitleType } from '../SchemeNode/options'
import {
  addSplit,
  addTimer,
  addNotify,
  addSend,
} from '../SchemeNode/utils/toolsFuncions'
import { SchemeNodeType } from '../SchemeNode/utils/nodeType'

import NewNodeOption from './NewNodeOption'

interface Props {
  data: SchemeNodeType
  returnToInfo: () => void
}

const MenuOptions = ({ data, returnToInfo }: Props) => {
  const [optionActive, setOptionActive] = useState<NodeOption | null>(null)

  const dispatch = useDispatch()

  const { name: timerName, hours, minutes, seconds } = useSelector(
    (state: RootState) => state.timer
  )
  const { name: splitName, splitAddress, splits } = useSelector(
    (state: RootState) => state.split
  )
  const { name: notifyName, emails } = useSelector(
    (state: RootState) => state.notify
  )
  const { name: sendName, addresses } = useSelector(
    (state: RootState) => state.send
  )

  const OptionFunctions = {
    Split: addSplit(data, splitName, splitAddress, splits),
    Timer: addTimer(data, timerName, { hours, minutes, seconds }),
    Notify: addNotify(data, notifyName, emails),
    Send: addSend(data, sendName, addresses),
    Swap: () => {},
    Event: () => {},
  }

  const handleMenuRender = () => {
    if (optionActive) {
      const handleConfirm = (type: TitleType) => {
        dispatch(OptionFunctions[type])
        returnToInfo()
      }

      return (
        <FlexContainer direction='column'>
          <TextLink onClick={() => setOptionActive(null)} margin='0 0 20px 0'>
            ← Add new node
          </TextLink>
          <optionActive.content />
          <Button
            onClick={() => handleConfirm(optionActive.title)}
            align='flex-end'
            margin='20px 0'
          >
            Confirm
          </Button>
        </FlexContainer>
      )
    }

    return (
      <>
        <TextLink
          onClick={returnToInfo}
          margin='0 0 20px 0'
        >{`← ${data.info.name} info`}</TextLink>
        <SubTitle>Add new node</SubTitle>
        <FlexContainer wrap='wrap' width='100%' justify='center'>
          {options.map(option => (
            <NewNodeOption
              title={option.title}
              icon={option.icon}
              onClick={() => setOptionActive(option)}
            />
          ))}
        </FlexContainer>
      </>
    )
  }

  return (
    <FlexContainer
      width='100%'
      height='100%'
      direction='column'
      justify='flex-start'
      align='flex-start'
    >
      {handleMenuRender()}
    </FlexContainer>
  )
}

export default MenuOptions
