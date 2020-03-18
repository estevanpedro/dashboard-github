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

import styled, { css } from 'styled-components' //TEMP

// TODO: REFACTOR CODE

const NodeContainer = styled(Container)<{ hasChildren?: boolean }>`
  /* margin-left: 5rem;
  margin-right: ${props => props.children && '5rem'}; */
  margin-bottom: 5rem;
  display: flex;
  align-items: center;
`

const arrowPointerMixin = css`
  ::after {
    content: '';
    position: absolute;
    right: 1rem;

    border: solid black;
    border-width: 0 1px 1px 0;
    display: inline-block;

    /* Change this to alter arrow pointer size */
    padding: 3px;
    top: -3px;

    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }
`

const RelativeContainer = styled.div`
  position: relative;
`

const Arrow = styled.div<{ margin: 'left' | 'right' }>`
  height: 1px;
  width: 2.5rem;
  margin-right: ${props => props.margin === 'right' && '1rem'};
  background-color: black;

  ${props => props.margin === 'right' && arrowPointerMixin}
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
      dispatch(
        addNode({
          id: nodeData.id,
          node: {
            id: uniqid(),
            type: 'timer',
            children: [],
            info: { name: timerName, timerInfo: { hours, minutes, seconds } },
          },
        })
      )
      setOptionsActive(false)
    },
    Notify: () => {
      dispatch(
        addNode({
          id: nodeData.id,
          node: {
            id: uniqid(),
            type: 'notify',
            children: [],
            info: { name: notifyName, emails },
          },
        })
      )
      setOptionsActive(false)
    },
    Send: () => {
      dispatch(
        addNode({
          id: nodeData.id,
          node: {
            id: uniqid(),
            type: 'send',
            children: addresses.map(address => {
              return {
                id: uniqid(),
                type: 'address',
                children: [],
                info: {
                  name: address.name,
                  address: address.address,
                  percentage: address.percentage,
                  value: address.value,
                },
              }
            }),
            info: { name: sendName },
          },
        })
      )
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
    <NodeContainer hasChildren={hasChildren}>
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
    </NodeContainer>
  )
}

export default SchemeNode
