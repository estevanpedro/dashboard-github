export type NodeType =
  | 'root'
  | 'split'
  | 'timer'
  | 'notify'
  | 'send'
  | 'swap'
  | 'event'
  | 'address'
  | 'scheme'

export declare type SchemeNodeType = {
  id: string
  type: NodeType
  name: string
  children: SchemeNodeType[]
  info?: any
  address?: string
}
