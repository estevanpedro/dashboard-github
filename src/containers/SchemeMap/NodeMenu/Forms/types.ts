export interface SplitData {
  type: 'split'
  id?: number
  name: string
  address: string
  info?: any
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
      hours: string
      minutes: string
      seconds: string
    }
  }
}

export type FormData = SplitData | TimerData
