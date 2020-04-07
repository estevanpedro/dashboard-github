export type NodeType =
  | 'root'
  | 'split'
  | 'timer'
  | 'notify'
  | 'send'
  | 'swap'
  | 'event'
  | 'address'

export declare type SchemeNodeType = {
  id: string
  type: NodeType
  children: SchemeNodeType[]
  info: any // TODO: specified info type for each NodeType
}
