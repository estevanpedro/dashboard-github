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