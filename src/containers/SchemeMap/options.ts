import { FunctionComponent } from 'react'
import {
  MdCallSplit,
  MdAccessAlarms,
  MdNotificationsActive,
  MdSwapHoriz,
  MdEventAvailable,
} from 'react-icons/md'

import { IconType } from 'react-icons/lib/cjs'

import { FormData } from './NodeMenu/Forms/types'

import SplitForm from './NodeMenu/Forms/SplitForm'
import TimerForm from './NodeMenu/Forms/TimerForm'
import NotifyForm from './NodeMenu/Forms/NotifyForm'
import SwapForm from './NodeMenu/Forms/SwapForm'
import EventForm from './NodeMenu/Forms/EventForm'

import { NodeType } from './utils/nodeType'

export type TitleType =
  | 'Split'
  | 'Timer'
  | 'Notify'
  | 'Send'
  | 'Swap'
  | 'Event'
  | 'ImportSplit'

export interface NodeOption {
  id: number
  title: TitleType
  icon: IconType
  type: NodeType
  content: FunctionComponent<{
    onConfirm: (type: TitleType, data: any) => void
    initialState?: FormData | null
  }>
}

const options: NodeOption[] = [
  {
    id: 1,
    title: 'Split',
    type: 'split',
    icon: MdCallSplit,
    content: SplitForm,
  },
  {
    id: 2,
    title: 'Timer',
    type: 'timer',
    icon: MdAccessAlarms,
    content: TimerForm,
  },
  {
    id: 3,
    title: 'Notify',
    type: 'notify',
    icon: MdNotificationsActive,
    content: NotifyForm,
  },
  {
    id: 5,
    title: 'Swap',
    type: 'swap',
    icon: MdSwapHoriz,
    content: SwapForm,
  },
  {
    id: 6,
    title: 'Event',
    type: 'event',
    icon: MdEventAvailable,
    content: EventForm,
  },
]

export default options