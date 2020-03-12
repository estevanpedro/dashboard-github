export type NodeType = 'split' | 'timer' | 'notify' | 'send' | 'swap' | 'event'

export declare type SchemeNodeType = {
  id: string
  type: NodeType
  children: SchemeNodeType[]
  info: any
}
