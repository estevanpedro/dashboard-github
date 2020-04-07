import uniqid from 'uniqid'

import { addNode, removeNode } from '../../../../redux/ducks/schemeMap'
import { Split } from '../../../../redux/ducks/nodeOptions/split'
import { Email } from '../../../../redux/ducks/nodeOptions/notify'
import { Address } from '../../../../redux/ducks/nodeOptions/send'

import { SchemeNodeType } from './nodeType'

/**
 * Add split helper
 * @param {SchemeNodeType} nodeData Data from the node to get appended
 * @param {string} name Split name
 * @param {string} splitAddress New node address
 * @param {Split[]} splits Split addresses
 */
export const addSplit = (
  nodeData: SchemeNodeType,
  name: string,
  splitAddress: string,
  splits: Split[]
) => {
  return addNode({
    id: nodeData.id,
    node: {
      id: uniqid(),
      type: 'split',
      name: name,
      children: splits.map(split => {
        return {
          id: uniqid(),
          type: 'address',
          name: split.name,
          children: [],
          info: {
            address: split.address,
            share: split.share,
          },
        }
      }),
      info: { splitAddress },
    },
  })
}

/**
 * Add Timer helper
 * @param {nodeData} nodeData Data from the node to get appended
 * @param {string} name Timer name
 * @param {timerInfo} timerInfo Timer time
 */
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
      name: name,
      children: [],
      info: { name, timerInfo },
    },
  })
}

/**
 * Add Notify helper
 * @param {SchemeNodeType} nodeData Data from the node to get appended
 * @param {string} name Notify name
 * @param {Email[]} emails Email list
 */
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
      name: name,
      children: [],
      info: { emails },
    },
  })
}

/**
 * Add Send helper
 * @param {SchemeNodeType} nodeData Data from the node to get appended
 * @param {string} name Send name
 * @param {Address[]} addresses Addresses list
 */
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
      name: name,
      children: addresses.map(address => {
        return {
          id: uniqid(),
          type: 'address',
          name: address.name,
          children: [],
          info: {
            address: address.address,
            percentage: address.percentage,
            value: address.value,
          },
        }
      }),
    },
  })
}

/**
 * Delete node helper
 * @param {string} id Deleted node id
 */
export const deleteNode = (id: string) => {
  return removeNode({ id })
}
