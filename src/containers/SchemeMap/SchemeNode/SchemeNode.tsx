import React, { useState, FunctionComponent } from 'react'
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
import options, { NodeOption } from './options'
import { SchemeNodeType } from './utils/nodeType'
import { addSplit, addTimer, addNotify, addSend } from './utils/toolsFuncions'

interface Props {
  nodeData: SchemeNodeType
  ignoreLeftArrow?: boolean
  last?: boolean
}

interface ModalContent {
  content: FunctionComponent
}

const SchemeNode = ({ nodeData, ignoreLeftArrow, last }: Props) => {
  const [optionsActive, setOptionsActive] = useState(false)
  const [modalContent, setModalContent] = useState<ModalContent | null>(null)

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
    Delete: () => {
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
    <Modal
      trigger={
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

          {hasChildren && <Arrow margin='left' />}
        </Container>
      }
      title='Options'
      description=''
    >
      {!modalContent ? (
        <FlexContainer wrap='wrap' justify='space-between'>
          {options.map((option: NodeOption) => (
            <OptionNode
              key={option.id}
              primary={option.title !== 'Edit'}
              onClick={() => {
                console.log(option.content)
                setModalContent({ content: option.content })
              }}
            >
              <img src={option.icon} />
              {option.title}
            </OptionNode>
          ))}
        </FlexContainer>
      ) : (
        <FlexContainer height='600px'>
          <modalContent.content />
        </FlexContainer>
      )}
    </Modal>
  )
}

export default SchemeNode
