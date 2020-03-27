import { FunctionComponent } from 'react'

import splitIcon from '../../../assets/icons/split.png'
import timerIcon from '../../../assets/icons/stopwatch.png'
import notifyIcon from '../../../assets/icons/bell.png'
import sendIcon from '../../../assets/icons/blank.png'
import swapIcon from '../../../assets/icons/sort.svg'
import eventIcon from '../../../assets/icons/tick.png'
import editIcon from '../../../assets/icons/blank.png'

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
  icon: string
  content: FunctionComponent
}

const options: NodeOption[] = [
  {
    id: 1,
    title: 'Split',
    description: '',
    icon: splitIcon,
    content: SplitContent,
  },
  {
    id: 2,
    title: 'Timer',
    description: '',
    icon: timerIcon,
    content: TimerContent,
  },
  {
    id: 3,
    title: 'Notify',
    description: '',
    icon: notifyIcon,
    content: NotifyContent,
  },
  {
    id: 4,
    title: 'Send',
    description: '',
    icon: sendIcon,
    content: SendContent,
  },
  {
    id: 5,
    title: 'Swap',
    description: '',
    icon: swapIcon,
    content: SwapContent,
  },
  {
    id: 6,
    title: 'Event',
    description: '',
    icon: eventIcon,
    content: EventContent,
  },
  {
    id: 7,
    title: 'Edit',
    description: '',
    icon: editIcon,
    content: EditContent,
  },
  {
    id: 8,
    title: 'Delete',
    description: '',
    icon: editIcon,
    content: DeleteContent,
  },
]

export default options
