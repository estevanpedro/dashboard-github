import uniqid from 'uniqid'
import { addNode, removeNode, updateNode } from '../../../redux/ducks/schemeMap'
import { SchemeNodeType } from './nodeType'

export interface Split {
  name: string
  id: string
  address: string
  share: number
  children?: SchemeNodeType[]
}

export interface Email {
  id: string
  email: string
}

export interface Address {
  id: string
  name: string
  address: string
  value: number
  percentage: number
}

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
  address: string,
  splits: Split[]
) => {
  return addNode({
    id: nodeData.id,
    node: {
      id: uniqid(),
      name,
      type: 'split',
      children: splits.map(split => {
        return {
          id: uniqid(),
          type: 'address',
          name: split.name,
          address: split.address,
          children: [],
          info: {
            percentage: split.share / 100,
          },
        }
      }),
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
      info: { time: timerInfo },
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
            percentage: address.percentage / 100,
            value: address.value,
          },
        }
      }),
      info: {
        payout: '0.01', //  TTODO: PLACEHOLDER
      },
    },
  })
}

/**
 * Add swap helper
 * @param {SchemeNodeType} nodeData Data from the node to get appended
 * @param {string} name Swap name
 * @param {string} userId User id
 */
export const addSwap = (
  nodeData: SchemeNodeType,
  name: string,
  userId: string
) => {
  return addNode({
    id: nodeData.id,
    node: { id: uniqid(), type: 'swap', name, children: [], info: { userId } },
  })
}

/**
 * Add event helper
 * @param nodeData Data from the node to get appended
 * @param name Event name
 * @param value Event price value
 * @param direction Direction of price check
 */
export const addEvent = (
  nodeData: SchemeNodeType,
  name: string,
  value: number,
  direction: 'above' | 'bellow'
) => {
  return addNode({
    id: nodeData.id,
    node: {
      id: uniqid(),
      type: 'event',
      name,
      children: [],
      info: {
        event_price: value,
        direction,
      },
    },
  })
}

/**
 * Adds a reference to another existent scheme
 * @param nodeData Data from the node to get appended
 * @param name Imported cheme name
 * @param id Scheme id
 */
export const addScheme = (
  nodeData: SchemeNodeType,
  name: string,
  id: string
) => {
  return addNode({
    id: nodeData.id,
    node: {
      id: uniqid(),
      type: 'scheme',
      name,
      children: [],
      info: { schemeId: id },
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

/**
 * Edit node helper
 * @param id node id
 * @param nodeValue new node value
 */
export const editNode = (id: string, nodeValue: SchemeNodeType) => {
  return updateNode({ id, nodeValue })
}