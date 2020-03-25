import uniqid from 'uniqid'

import { addNode } from '../../../../redux/ducks/schemeMap'
import { Split } from '../../../../redux/ducks/nodeOptions/split'
import { Email } from '../../../../redux/ducks/nodeOptions/notify'
import { Address } from '../../../../redux/ducks/nodeOptions/send'

import { SchemeNodeType } from './nodeType'

export const addSplit = (
  nodeData: SchemeNodeType,
  name: string,
  splits: Split[]
) => {
  return addNode({
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
      info: { name },
    },
  })
}

export const addTimer = (
  nodeData: SchemeNodeType,
  name: string,
  timerInfo: { hours: number; minutes: number; seconds: number }
) => {
  return addNode({
    id: nodeData.id,
    node: {
      id: uniqid(),
      type: 'timer',
      children: [],
      info: { name, timerInfo },
    },
  })
}

export const addNotify = (
  nodeData: SchemeNodeType,
  name: string,
  emails: Email[]
) => {
  return addNode({
    id: nodeData.id,
    node: {
      id: uniqid(),
      type: 'notify',
      children: [],
      info: { name, emails },
    },
  })
}

export const addSend = (
  nodeData: SchemeNodeType,
  name: string,
  addresses: Address[]
) => {
  return addNode({
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
      info: { name },
    },
  })
}
