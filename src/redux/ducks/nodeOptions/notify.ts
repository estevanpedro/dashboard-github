import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import uniqid from 'uniqid'

export interface Email {
  id: string
  email: string
}
interface NotifyState {
  name: string
  emails: Email[]
}

const initialState: NotifyState = {
  name: 'Notify',
  emails: [
    {
      id: '0',
      email: '',
    },
  ],
}

const reducer = createSlice({
  name: 'notify',
  initialState,
  reducers: {
    updateNotifyName(state: NotifyState, action: PayloadAction<string>) {
      state.name = action.payload
    },
    addEmail(state: NotifyState) {
      state.emails = [
        ...state.emails,
        {
          id: uniqid(),
          email: '',
        },
      ]
    },
    removeEmail(state: NotifyState, action: PayloadAction<string>) {
      state.emails = state.emails.filter(email => email.id !== action.payload)
    },
    updateEmail(state: NotifyState, action: PayloadAction<Email>) {
      state.emails = state.emails.map(email =>
        email.id === action.payload.id
          ? { ...email, email: action.payload.email }
          : email
      )
    },
  },
})

export const {
  updateNotifyName,
  addEmail,
  removeEmail,
  updateEmail,
} = reducer.actions

export default reducer.reducer
