import { FunctionComponent } from 'react'
import {
  MdCallSplit,
  MdAccessAlarms,
  MdNotificationsActive,
  MdSend,
  MdSwapHoriz,
  MdEventAvailable,
  MdModeEdit,
  MdDelete,
} from 'react-icons/md'

import { IconType } from 'react-icons/lib/cjs'

import {
  SplitContent,
  TimerContent,
  NotifyContent,
  SendContent,
  SwapContent,
  EventContent,
  EditContent,
  DeleteContent,
} from './ModalContents'

export type TitleType =
  | 'Split'
  | 'Timer'
  | 'Notify'
  | 'Send'
  | 'Swap'
  | 'Event'
  | 'Edit'
  | 'Delete'

export interface NodeOption {
  id: number
  title: TitleType
  icon: IconType
  content: FunctionComponent
}

const options: NodeOption[] = [
  {
    id: 1,
    title: 'Split',
    icon: MdCallSplit,
    content: SplitContent,
  },
  {
    id: 2,
    title: 'Timer',
    icon: MdAccessAlarms,
    content: TimerContent,
  },
  {
    id: 3,
    title: 'Notify',
    icon: MdNotificationsActive,
    content: NotifyContent,
  },
  {
    id: 4,
    title: 'Send',
    icon: MdSend,
    content: SendContent,
  },
  {
    id: 5,
    title: 'Swap',
    icon: MdSwapHoriz,
    content: SwapContent,
  },
  {
    id: 6,
    title: 'Event',
    icon: MdEventAvailable,
    content: EventContent,
  },
]

export default options
