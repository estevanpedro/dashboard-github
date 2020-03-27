import { FunctionComponent } from 'react'
import { MdCallSplit, MdAccessAlarms, MdNotificationsActive, MdSend, MdSwapHoriz, MdEventAvailable, MdModeEdit, MdDelete } from "react-icons/md"

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

export interface NodeOption {
  id: number
  title:
  | 'Split'
  | 'Timer'
  | 'Notify'
  | 'Send'
  | 'Swap'
  | 'Event'
  | 'Edit'
  | 'Delete'
  description: string
  icon: any
  content: FunctionComponent
}

const options: NodeOption[] = [
  {
    id: 1,
    title: 'Split',
    description: '',
    icon: MdCallSplit,
    content: SplitContent,
  },
  {
    id: 2,
    title: 'Timer',
    description: '',
    icon: MdAccessAlarms,
    content: TimerContent,
  },
  {
    id: 3,
    title: 'Notify',
    description: '',
    icon: MdNotificationsActive,
    content: NotifyContent,
  },
  {
    id: 4,
    title: 'Send',
    description: '',
    icon: MdSend,
    content: SendContent,
  },
  {
    id: 5,
    title: 'Swap',
    description: '',
    icon: MdSwapHoriz,
    content: SwapContent,
  },
  {
    id: 6,
    title: 'Event',
    description: '',
    icon: MdEventAvailable,
    content: EventContent,
  },
  {
    id: 7,
    title: 'Edit',
    description: '',
    icon: MdModeEdit,
    content: EditContent,
  },
  {
    id: 8,
    title: 'Delete',
    description: '',
    icon: MdDelete,
    content: DeleteContent,
  },
]

export default options
