import { FunctionComponent } from 'react'
import {
  MdCallSplit,
  MdAccessAlarms,
  MdNotificationsActive,
  MdSend,
  MdSwapHoriz,
  MdEventAvailable,
  // MdModeEdit,
  // MdDelete,
} from 'react-icons/md'

import { IconType } from 'react-icons/lib/cjs'

import { FormData } from '../NodeMenu/Forms/types'

import SplitOptions from '../NodeMenu/Forms/SplitOptions'
import TimerForm from '../NodeMenu/Forms/TimerForm'
import NotifyForm from '../NodeMenu/Forms/NotifyForm'
import SendForm from '../NodeMenu/Forms/SendForm'
import SwapForm from '../NodeMenu/Forms/SwapForm'
import EventForm from '../NodeMenu/Forms/EventForm'

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
    content: SplitOptions,
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
    id: 4,
    title: 'Send',
    type: 'send',
    icon: MdSend,
    content: SendForm,
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
