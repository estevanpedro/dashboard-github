import { SchemeNodeType } from './containers/SchemeMap/SchemeNode/utils/nodeType'

export interface SchemeInfo {
  name: string
  fee: boolean
  payout: string
  visibility: 'public' | 'private'
  tree: SchemeNodeType
}
