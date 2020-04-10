export interface SplitData {
  id?: number
  name: string
  address: string
  splits: {
    id?: number
    name: string
    address: string
    share: number
  }[]
}

export type FormData = SplitData
