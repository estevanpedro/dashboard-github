import { SchemeNodeType } from './containers/SchemeMap/SchemeNode/utils/nodeType'

export interface SchemeInfo {
  name: string
  fee: boolean
  payout: string
  visibility: 'public' | 'private'
  tree: SchemeNodeType
}

export interface SchemeType {
  balance: number
  fee: string
  id: string
  last_transaction: number
  name: string
  payout: string | number
  tree: SchemeNodeType
  user_id: string
  visibility: string
}

export interface HistoryType {
  address: string
  amount_received: number
  amount_sent: number
  created_at: number
  network: string
  txid: string
}

export interface FirstSplitType {
  address: string
  children: FirstSplitType[]
  id: string
  info: any
  name: string
  type: string
}