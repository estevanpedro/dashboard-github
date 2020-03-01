import splitIcon from '../../../assets/icons/split.svg'
import timerIcon from '../../../assets/icons/stopwatch.svg'
import notificationIcon from '../../../assets/icons/bell.svg'
import sendIcon from '../../../assets/icons/share.svg'
import swapIcon from '../../../assets/icons/sort.svg'
import eventIcon from '../../../assets/icons/tick.svg'
import editIcon from '../../../assets/icons/edit.svg'

import {
  SplitContent,
  TimerContent,
  NotificationContent,
  SendContent,
  SwapContent,
  EventContent,
  EditContent,
} from './ModalContents'

export default [
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
    title: 'Notification',
    description: '',
    icon: notificationIcon,
    content: NotificationContent,
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
