import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '../../../redux/rootReducer'

import Modal from '../../../components/Modal'
import FlexContainer from '../../../components/FlexContainer'

import {
  Container,
  Node,
  RelativeContainer,
  VerticalArrow,
  Arrow,
  OptionNode,
} from './elements'
import options, { NodeOption } from './utils/options'
import { SchemeNodeType } from './utils/nodeType'
import { addSplit, addTimer, addNotify, addSend } from './utils/toolsFuncions'

interface Props {
  nodeData: SchemeNodeType
  ignoreLeftArrow?: boolean
  last?: boolean
}

const SchemeNode = ({ nodeData, ignoreLeftArrow, last }: Props) => {
  const [optionsActive, setOptionsActive] = useState(false)

  const dispatch = useDispatch()

  const { name: timerName, hours, minutes, seconds } = useSelector(
    (state: RootState) => state.timer
  )
  const { name: splitName, splits } = useSelector(
    (state: RootState) => state.split
  )
  const { name: notifyName, emails } = useSelector(
    (state: RootState) => state.notify
  )
  const { name: sendName, addresses } = useSelector(
    (state: RootState) => state.send
  )

  const ModalFunctions = {
    Split: () => {
      dispatch(addSplit(nodeData, splitName, splits))
      setOptionsActive(false)
    },
    Timer: () => {
      const timerInfo = {
        hours,
        minutes,
        seconds,
      }

      dispatch(addTimer(nodeData, timerName, timerInfo))
      setOptionsActive(false)
    },
    Notify: () => {
      dispatch(addNotify(nodeData, notifyName, emails))
      setOptionsActive(false)
    },
    Send: () => {
      dispatch(addSend(nodeData, sendName, addresses))
      setOptionsActive(false)
    },
    Swap: () => {
      setOptionsActive(false)
    },
    Event: () => {
      setOptionsActive(false)
    },
    Edit: () => {
      setOptionsActive(false)
    },
  }

  const hasChildren = nodeData.children.length > 0

  const nodeClass = () => {
    switch (nodeData.type) {
      case 'timer':
      case 'notify':
      case 'send':
      case 'swap':
      case 'event':
        return 'tool'

      case 'address':
        return 'address'

      default:
        return
    }
  }

  return (
    <Container hasChildren={hasChildren}>
      {!ignoreLeftArrow && (
        <RelativeContainer>
          <Arrow margin='right' />
        </RelativeContainer>
      )}
      {/* If not last, create line with height 100% and position relative minus button height / 2 */}
      {!last && <VerticalArrow />}
      <Node
        primary
        onClick={() => setOptionsActive(!optionsActive)}
        className={nodeClass()}
      >
        {nodeData.info.name}
      </Node>
      {optionsActive && (
        <FlexContainer position='absolute' left='130px' zIndex='2'>
          {options.map((option: NodeOption) => (
            <Modal
              key={option.id}
              trigger={
                <OptionNode key={option.id} primary={option.title !== 'Edit'}>
                  <img src={option.icon} />
                  {option.title}
                </OptionNode>
              }
              title={option.title}
              description={option.description}
              onSubmit={ModalFunctions[option.title]}
            >
              <option.content />
            </Modal>
          ))}
        </FlexContainer>
      )}
      {hasChildren && <Arrow margin='left' />}
    </Container>
  )
}

export default SchemeNode
