import { NodeType } from '../../utils/nodeType'

export interface DefaultData {
  type: NodeType
  id?: string
  name: string
}

export interface SplitData extends DefaultData {
  type: 'split'
  info?: any
  splits: {
    id?: string
    name: string
    address: string
    share: number
  }[]
}

export interface TimerData extends DefaultData {
  type: 'timer'
  info: {
    time: {
      hours: string
      minutes: string
      seconds: string
    }
  }
}

export interface NotifyData extends DefaultData {
  type: 'notify'
  info: {
    emails: string[]
  }
}

export interface SendData extends DefaultData {
  type: 'send'
  addresses: {
    id?: number
    name: string
    address: string
    percentage: number
    value: number
  }[]
}

export interface SwapData extends DefaultData {
  type: 'swap'
}

export interface EventData extends DefaultData {
  type: 'event'
  value: number
  direction: 'above' | 'bellow'
}

export interface ImportSplit extends DefaultData {
  type: 'scheme'
}

export type FormData =
  | SplitData
  | TimerData
  | NotifyData
  | SendData
  | SwapData
  | EventData
  | ImportSplit
