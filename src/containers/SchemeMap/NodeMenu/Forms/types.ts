export interface SplitData {
  type: 'split'
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

export interface TimerData {
  type: 'timer'
  id?: number
  name: string
  info: {
    time: {
      hours: number
      minutes: number
      seconds: number
    }
  }
}

export type FormData = SplitData | TimerData
