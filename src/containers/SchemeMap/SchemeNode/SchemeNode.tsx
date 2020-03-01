import React, { useState } from 'react'

import Modal from '../../../components/Modal'

import { Container, Node } from './elements'
import OptionNode from './OptionNode'
import options from './options'

interface Props {
  nodeData: {
    name: string
  }
}

const SchemeNode = ({ nodeData }: Props) => {
  const [optionsActive, setOptionsActive] = useState(false)
  return (
    <Container>
      <Node primary onClick={() => setOptionsActive(!optionsActive)}>
        {nodeData.name}
      </Node>
      {optionsActive &&
        options.map(option => (
          <Modal
            trigger={
              <OptionNode key={option.id} primary={option.title !== 'Edit'}>
                <img src={option.icon} />
                {option.title}
              </OptionNode>
            }
            title={option.title}
            description={option.description}
          >
            <option.content />
          </Modal>
        ))}
    </Container>
  )
}

export default SchemeNode
