import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import uniqid from 'uniqid'

interface Email {
  id: string
  email: string
}
interface NotifyState {
  emails: Email[]
}

const initialState: NotifyState = {
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

export const { addEmail, removeEmail, updateEmail } = reducer.actions

export default reducer.reducer
