import React, { useState, FunctionComponent } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '../../../redux/rootReducer'

import Button from '../../../components/Button'
import Modal from '../../../components/Modal'
import FlexContainer from '../../../components/FlexContainer'
import Text from '../../../components/Text'
import Title from '../../../components/Title'

import {
  Container,
  Node,
  RelativeContainer,
  VerticalArrow,
  Arrow,
  OptionNode,
} from './elements'
import options, { NodeOption } from './options'
import { NodeType, SchemeNodeType } from './utils/nodeType'
import { addSplit, addTimer, addNotify, addSend } from './utils/toolsFuncions'

interface Props {
  nodeData: SchemeNodeType
  ignoreLeftArrow?: boolean
  last?: boolean
}

interface ModalContent {
  title:
    | 'Split'
    | 'Timer'
    | 'Notify'
    | 'Send'
    | 'Swap'
    | 'Event'
    | 'Edit'
    | 'Delete'
  content: FunctionComponent
}

const SchemeNode = ({ nodeData, ignoreLeftArrow, last }: Props) => {
  const [optionsActive, setOptionsActive] = useState(false)
  const [modalContent, setModalContent] = useState<ModalContent | null>(null)
  const [formErrors, setFormErrors] = useState([])

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
    <Container hasChildren={hasChildren}>
      {!ignoreLeftArrow && (
        <RelativeContainer>
          <Arrow margin='right' />
        </RelativeContainer>
      )}
      {!last && <VerticalArrow />}
      <Modal
        trigger={
          <Node
            primary
            onClick={() => setOptionsActive(!optionsActive)}
            className={nodeClass()}
          >
            {nodeData.info.name}
          </Node>
        }
        title='Options'
        description=''
        onSubmit={modalContent ? ModalFunctions[modalContent.title] : undefined}
      >
        {!modalContent ? (
          <FlexContainer wrap='wrap' justify='space-between'>
            {options.map((option: NodeOption) => (
              <OptionNode
                key={option.id}
                primary={option.title !== 'Edit'}
                onClick={() => {
                  console.log(option.content)
                  setModalContent({
                    title: option.title,
                    content: option.content,
                  })
                }}
              >
                <img src={option.icon} />
                {option.title}
              </OptionNode>
            ))}
          </FlexContainer>
        ) : (
          <FlexContainer height='600px' direction='column' justify='flex-start'>
            <Text
              color='primary'
              onClick={() => setModalContent(null)}
              curosorPointer
            >
              ← Go back to options
            </Text>
            <Title>{modalContent.title}</Title>
            <modalContent.content />
            {formErrors.map(error => (
              <Text color='contrast'>{error}</Text>
            ))}
          </FlexContainer>
        )}
      </Modal>
      {hasChildren && <Arrow margin='left' />}
    </Container>
  )
}

export default SchemeNode
