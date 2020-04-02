export interface LibInfo {
  schemeName: string
  schemeCreator?: string
  userId: number
  balance: number
  payout: number
  lastTransaction: string
  id: number
  currency: string
  public: boolean
  address: string
  serviceFee: boolean
  owners: {
    address: string
    size: number
    label: string
    paid: number
  }[]
}
