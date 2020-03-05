import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../../redux/rootReducer'

import Modal from '../../../components/Modal'

import { Container, Node } from './elements'
import OptionNode from './OptionNode'
import options, { NodeOption } from './options'

interface Props {
  nodeData: {
    name: string
  }
}

const SchemeNode = ({ nodeData }: Props) => {
  const [optionsActive, setOptionsActive] = useState(false)
  const { name, hours, minutes, seconds } = useSelector(
    (state: RootState) => state.timer
  )
  const { emails } = useSelector((state: RootState) => state.notify)

  const ModalFunctions = {
    Split: () => {},
    Timer: () => {
      const timerData = {
        name,
        hours,
        minutes,
        seconds,
      }

      console.log(timerData)
    },
    Notify: () => {
      console.log(emails)
    },
    Send: () => {},
    Swap: () => {},
    Event: () => {},
    Edit: () => {},
  }

  return (
    <Container>
      <Node primary onClick={() => setOptionsActive(!optionsActive)}>
        {nodeData.name}
      </Node>
      {optionsActive &&
        options.map((option: NodeOption) => (
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
    </Container>
  )
}

export default SchemeNode
