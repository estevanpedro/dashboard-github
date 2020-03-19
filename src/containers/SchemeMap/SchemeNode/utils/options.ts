import { FunctionComponent } from 'react'

import splitIcon from '../../../../assets/icons/split.svg'
import timerIcon from '../../../../assets/icons/stopwatch.svg'
import notifyIcon from '../../../../assets/icons/bell.svg'
import sendIcon from '../../../../assets/icons/share.svg'
import swapIcon from '../../../../assets/icons/sort.svg'
import eventIcon from '../../../../assets/icons/tick.svg'
import editIcon from '../../../../assets/icons/edit.svg'

import {
  SplitContent,
  TimerContent,
  NotifyContent,
  SendContent,
  SwapContent,
  EventContent,
  EditContent,
} from '../ModalContents'

export interface NodeOption {
  id: number
  title: 'Split' | 'Timer' | 'Notify' | 'Send' | 'Swap' | 'Event' | 'Edit'
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
]

export default options
