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
import {
  addSplit,
  addTimer,
  addNotify,
  addSend,
  deleteNode,
} from './utils/toolsFuncions'

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
  const [formErrors, setFormErrors] = useState<string[]>([])

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
    Split: async (close: () => void) => {
      const someEmpty = splits.some(split => !split.address || !split.name)
      const shareSum = splits.reduce((split, sum) => {
        return { ...sum, share: split.share + sum.share }
      })

      let noErrors = true

      if (!splitName) {
        setFormErrors([...formErrors, "Split name can't be empty"])
        noErrors = false
      }
      if (someEmpty) {
        setFormErrors([...formErrors, "Adddress and name can't be empty"])
        noErrors = false
      }

      if (shareSum.share !== 100) {
        setFormErrors([...formErrors, 'Total share number must be 100'])
        noErrors = false
      }

      if (noErrors) {
        dispatch(addSplit(nodeData, splitName, splits))
        setOptionsActive(false)
        close()
      }
    },
    Timer: (close: () => void) => {
      const timerInfo = {
        hours,
        minutes,
        seconds,
      }

      let noErrors = true

      if (!timerName) {
        setFormErrors([...formErrors, "The timer name can't be empty"])
        noErrors = false
      }
      if (hours === 0 && minutes === 0 && seconds === 0) {
        setFormErrors([...formErrors, "The time can't be zero!"])
        noErrors = false
      }

      if (noErrors) {
        dispatch(addTimer(nodeData, timerName, timerInfo))
        setOptionsActive(false)
        close()
      }
    },
    Notify: (close: () => void) => {
      const someEmpty = emails.some(email => !email.email)
      let noErrors = true

      if (!notifyName) {
        setFormErrors([...formErrors, "The notify name can't be empty"])
        noErrors = false
      }

      if (someEmpty) {
        setFormErrors([...formErrors, "Email field can't be empty"])
        noErrors = false
      }

      if (noErrors) {
        dispatch(addNotify(nodeData, notifyName, emails))
        setOptionsActive(false)
        close()
      }
    },
    Send: (close: () => void) => {
      const someEmpty = addresses.some(
        address => !address.address || !address.name
      )

      const addressSum = addresses.reduce((address, sum) => {
        return { ...sum, percentage: address.percentage + sum.percentage }
      })

      let noErrors = true

      if (!sendName) {
        setFormErrors([...formErrors, "Send name can't be empty"])
        noErrors = false
      }

      if (someEmpty) {
        setFormErrors([...formErrors, "Address and name can't be empty"])
        noErrors = false
      }

      if (addressSum.percentage !== 100) {
        setFormErrors([...formErrors, 'Percentage total must be 100'])
        noErrors = false
      }

      if (noErrors) {
        dispatch(addSend(nodeData, sendName, addresses))
        setOptionsActive(false)
        close()
      }
    },
    Swap: (close: () => void) => {
      setOptionsActive(false)
      close()
    },
    Event: (close: () => void) => {
      setOptionsActive(false)
      close()
    },
    Edit: (close: () => void) => {
      setOptionsActive(false)
      close()
    },
    Delete: (close: () => void) => {
      dispatch(deleteNode(nodeData.id))
      setOptionsActive(false)
      close()
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

  const filterOptions = (options: NodeOption[]) => {
    if (nodeData.children.length) {
      return options.filter(
        option => option.title === 'Edit' || option.title === 'Delete'
      )
    }
    return options
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
        onSubmit={modalContent ? ModalFunctions[modalContent.title] : undefined}
        errors={formErrors}
      >
        {!modalContent ? (
          <FlexContainer wrap='wrap' justify='space-between' margin='20px 20px'>
            {filterOptions(options).map((option: NodeOption) => (
              <OptionNode
                key={option.id}
                primary={option.title !== 'Edit'}
                onClick={() => {
                  setModalContent({
                    title: option.title,
                    content: option.content,
                  })
                }}
              >
                <option.icon size={30} style={{ margin: 5 }} />
                {option.title}
              </OptionNode>
            ))}
          </FlexContainer>
        ) : (
          <FlexContainer
            height='600px'
            direction='column'
            justify='flex-start'
            width='100%'
          >
            <Text
              color='primary'
              onClick={() => setModalContent(null)}
              curosorPointer
              margin='0 0 10px 0'
            >
              ← Go back to options
            </Text>
            <Title>{modalContent.title}</Title>
            <modalContent.content />
          </FlexContainer>
        )}
      </Modal>
      {hasChildren && <Arrow margin='left' />}
    </Container>
  )
}

export default SchemeNode
