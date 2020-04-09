export interface FormData {
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
