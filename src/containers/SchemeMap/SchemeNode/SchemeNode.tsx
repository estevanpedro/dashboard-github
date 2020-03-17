import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import uniqid from 'uniqid'

import { RootState } from '../../../redux/rootReducer'
import { addNode } from '../../../redux/ducks/schemeMap'

import Modal from '../../../components/Modal'

import { Container, Node, SplitContainer } from './elements'
import OptionNode from './OptionNode'
import options, { NodeOption } from './options'

import { SchemeNodeType } from './nodeType'
import FlexContainer from '../../../components/FlexContainer'

import styled from 'styled-components' //TEMP

const NodeContainer = styled(Container)<{ hasChildren?: boolean }>`
  /* margin-left: 5rem;
  margin-right: ${props => props.children && '5rem'}; */
  margin-bottom: 5rem;
  display: flex;
  align-items: center;
`

const Arrow = styled.div<{ margin: 'left' | 'right' }>`
  height: 1px;
  width: 2.5rem;
  margin-right: ${props => props.margin === 'right' && '1rem'};
  background-color: black;
`

const VerticalArrow = styled.div`
  width: 1px;
  height: 100%;
  position: absolute;
  left: 0;
  top: 42px;

  background-color: black;
`

interface Props {
  nodeData: SchemeNodeType
  ignoreLeftArrow?: boolean
  last?: boolean
}

const SchemeNode = ({ nodeData, ignoreLeftArrow, last }: Props) => {
  const [optionsActive, setOptionsActive] = useState(false)

  const dispatch = useDispatch()

  const { name, hours, minutes, seconds } = useSelector(
    (state: RootState) => state.timer
  )
  const { name: splitName, splits } = useSelector(
    (state: RootState) => state.split
  )
  const { emails } = useSelector((state: RootState) => state.notify)
  const { addresses } = useSelector((state: RootState) => state.send)

  const ModalFunctions = {
    Split: () => {
      dispatch(
        addNode({
          id: nodeData.id,
          node: {
            id: uniqid(),
            type: 'split',
            children: splits.map(split => {
              return {
                id: uniqid(),
                type: 'address',
                children: [],
                info: {
                  name: split.name,
                  address: split.address,
                  share: split.share,
                },
              }
            }),
            info: { name: splitName },
          },
        })
      )
      setOptionsActive(false)
    },
    Timer: () => {
      const timerData = {
        name,
        hours,
        minutes,
        seconds,
      }

      console.log(timerData)
      setOptionsActive(false)
    },
    Notify: () => {
      console.log(emails)
      setOptionsActive(false)
    },
    Send: () => {
      console.log(addresses)
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
      case 'timer' || 'notify' || 'send' || 'swap' || 'event':
        return 'tool'

      case 'address':
        return 'address'

      default:
        return
    }
  }

  return (
    <NodeContainer hasChildren={hasChildren}>
      {!ignoreLeftArrow && <Arrow margin='right' />}
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
    </NodeContainer>
  )
}

export default SchemeNode
