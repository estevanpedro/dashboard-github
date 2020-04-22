import { NodeType } from '../../SchemeNode/utils/nodeType'

export interface DefaultData {
  type: NodeType
  id?: number
  name: string
}

export interface SplitData extends DefaultData {
  type: 'split'
  address: string
  info?: any
  splits: {
    id?: number
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

export type FormData = SplitData | TimerData | NotifyData | SendData | SwapData
